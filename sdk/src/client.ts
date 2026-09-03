import * as crypto from 'crypto'
import {
  BlibliCredentials,
  BlibliEnvironment,
  BlibliError,
  BlibliRequestOptions,
} from './types'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/** Internal normalized request description for a generated API call. */
export interface ApiCallSpec {
  method: HttpMethod
  path: string
  /** Params sent as query string. */
  query: string[]
  /**
   * Path parameter substitutions as `[placeholder, paramKey]` pairs, where
   * `placeholder` is the token in the path (`{placeholder}`) and `paramKey` is
   * the request parameter that supplies its value (they may differ in
   * casing/hyphenation, e.g. `{promoCode}` <-> `promo-code`).
   */
  pathParams?: Array<[string, string]>
  /** Request Body top-level keys (if any). */
  body: string[]
}

/** Hosts by environment. */
export const BLIBLI_HOSTS: Record<BlibliEnvironment, string> = {
  production: 'https://seller-api.blibli.com',
  staging: 'https://seller-preprod-gcp.gdn-app.com',
}

/**
 * Format the millisecond timestamp in Blibli's canonical date pattern,
 * computed in Asia/Jakarta timezone:
 * `D M d H:i:s T Y`  e.g. `Tue May 12 16:28:52 WIB 2020`.
 */
export function formatBlibliDate(ms: number): string {
  const dt = new Date(ms)
  const day = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short' }).format(dt) // Tue
  const mon = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', month: 'short' }).format(dt) // May
  const dayNum = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', day: '2-digit' }).format(dt) // 12
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(dt)
  const tz = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', timeZoneName: 'short' })
    .formatToParts(dt)
    .find((p) => p.type === 'timeZoneName')?.value
  const year = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', year: 'numeric' }).format(dt)
  return `${day} ${mon} ${dayNum} ${time} ${tz} ${year}`
}

/**
 * Compute the Blibli HMAC-SHA256 signature (base64) using the official
 * algorithm:
 *
 *   bodyMD5 = md5(rawBody) after mapping real LF/CR to literal `\n`/`\r`
 *   apiKey  = method + "\n" + trim(bodyMD5) + "\n" + contentType + "\n" +
 *             blibliDate + "\n" + url
 *   sign    = base64(HMAC-SHA256(signatureKey, apiKey))
 */
export function sign(
  signatureKey: string,
  opts: {
    method: HttpMethod
    path: string
    body?: string
    contentType?: string
    timestampMs: number
  },
): { signature: string; signatureTime: string } {
  let bodyRaw = opts.body ?? ''
  bodyRaw = bodyRaw.replace(/\r/g, '\\r').replace(/\n/g, '\\n')
  const bodyMd5 = bodyRaw !== '' ? crypto.createHash('md5').update(bodyRaw).digest('hex') : ''

  const dateStr = formatBlibliDate(opts.timestampMs)
  const apiKey =
    opts.method +
    '\n' +
    bodyMd5.trim() +
    '\n' +
    (opts.contentType || 'application/json').trim() +
    '\n' +
    dateStr +
    '\n' +
    opts.path

  const sig = crypto.createHmac('sha256', signatureKey).update(apiKey).digest('base64')
  return { signature: sig, signatureTime: String(opts.timestampMs) }
}

function toMillis(value: number | string | Date | undefined): number {
  if (value === undefined) return Date.now()
  if (value instanceof Date) return value.getTime()
  const n = Number(value)
  if (typeof value === 'number' && n < 1e12) return Math.floor(n * 1000)
  if (typeof value === 'string' && /^\d+$/.test(value) && value.length <= 10) return Number(value) * 1000
  return Number.isFinite(n) ? Math.floor(n) : Date.now()
}

export interface BlibliClientConfig {
  credentials: BlibliCredentials
  environment?: BlibliEnvironment
  /** Custom fetch impl (defaults to globalThis.fetch). */
  fetch?: typeof fetch
  /** Response ttl in ms until throwing on non-2xx (default false). */
  throwOnHttpError?: boolean
}

/**
 * Low-level HTTP client for the Blibli Seller API.
 *
 * Handles endpoint resolution, HTTP Basic + Api-Seller-Key headers, optional
 * HMAC-SHA256 request signing, query/path parameter routing and JSON bodies.
 */
export class BlibliClient {
  readonly environment: BlibliEnvironment
  private readonly credentials: BlibliCredentials
  private readonly fetchImpl: typeof fetch
  private readonly throwOnHttpError: boolean

  constructor(cfg: BlibliClientConfig) {
    this.credentials = cfg.credentials
    this.environment = cfg.environment ?? 'production'
    this.fetchImpl = cfg.fetch ?? (globalThis as any).fetch
    this.throwOnHttpError = cfg.throwOnHttpError ?? false
    if (typeof this.fetchImpl !== 'function') {
      throw new Error(
        'Fetch is not available. Use Node 18+ or supply a `fetch` implementation in the client config.',
      )
    }
  }

  private baseUrl(opts: BlibliRequestOptions): string {
    if (opts.baseUrl) return opts.baseUrl.replace(/\/$/, '')
    return BLIBLI_HOSTS[opts.environment ?? this.environment]
  }

  /**
   * Perform an authenticated (and optionally signed) request.
   */
  async request(
    spec: ApiCallSpec,
    params: Record<string, unknown>,
    opts: BlibliRequestOptions = {},
  ): Promise<any> {
    const baseUrl = this.baseUrl(opts)
    const timestampMs = toMillis(opts.timestamp)

    // Substitute path params.
    let path = spec.path
    for (const [placeholder, paramKey] of spec.pathParams ?? []) {
      const v = params[paramKey]
      if (v !== undefined && v !== null) path = path.replace(`{${placeholder}}`, String(v))
    }

    // Query params.
    const q = new URLSearchParams()
    for (const k of spec.query) {
      const v = params[k]
      if (v !== undefined && v !== null) q.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v))
    }
    const qs = q.toString()
    const url = `${baseUrl}${path}${qs ? '?' + qs : ''}`

    // Body.
    let bodyStr: string | undefined
    if (spec.body.length) {
      const body: Record<string, unknown> = {}
      for (const k of spec.body) {
        if (params[k] !== undefined) body[k] = params[k]
      }
      bodyStr = JSON.stringify(body)
    }

    // Headers.
    const auth = Buffer.from(
      `${this.credentials.clientKey}:${this.credentials.clientSecret}`,
    ).toString('base64')
    const headers: Record<string, string> = {
      Authorization: `Basic ${auth}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Api-Seller-Key': this.credentials.apiSellerKey,
    }
    if (this.credentials.signatureKey) {
      const { signature, signatureTime } = sign(this.credentials.signatureKey, {
        method: spec.method,
        path,
        body: bodyStr,
        contentType: 'application/json',
        timestampMs,
      })
      headers['Signature'] = signature
      headers['Signature-Time'] = signatureTime
    }

    const init: RequestInit = {
      method: spec.method,
      headers,
      signal: opts.signal,
    }
    if (bodyStr !== undefined) init.body = bodyStr

    let res: Response
    try {
      res = await this.fetchImpl(url, init)
    } catch (e: any) {
      throw new BlibliError(`Network error: ${e?.message ?? e}`, { body: e })
    }

    const text = await res.text()
    let json: any
    try {
      json = text ? JSON.parse(text) : null
    } catch {
      json = text || null
    }

    if (!res.ok && this.throwOnHttpError) {
      throw new BlibliError(json?.message || `HTTP ${res.status}`, {
        code: json?.code ?? json?.errorCode,
        status: res.status,
        body: json,
      })
    }

    return json
  }
}
