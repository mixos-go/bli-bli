import { BlibliClient, BlibliClientConfig } from '../client'
import { BlibliCredentials, BlibliEnvironment, BlibliError } from '../types'
import { InMemoryTokenStore, TokenStore } from './token-store'
import { BlibliConnectorConfig, TokenSet } from './types'

function toTokenSet(apiSellerKey: string, shopId: string, environment: BlibliEnvironment): TokenSet {
  return {
    accessToken: apiSellerKey,
    shopId,
    environment,
  }
}

/**
 * Multi-seller connector untuk Blibli Seller API.
 *
 * Blibli TIDAK punya OAuth untuk API saat ini (seller-api.blibli.com): auth =
 * HTTP Basic (clientKey:clientSecret) + header `Api-Seller-Key` + optional
 * signature. Jadi connector beradaptasi key-based: `buildAuthUrl`/
 * `handleCallback`/`refresh` (bagian kontrak OAuth seragam) lempar error jelas,
 * dan registrasi seller dilakukan via `connect(shopId, apiSellerKey)`.
 *
 * Satu instance, banyak shop: apiSellerKey disimpan per `shopId` di TokenStore
 * dan di-inject ke `BlibliClient` saat `getClient(shopId)`.
 */
export class BlibliConnector {
  readonly credentials: BlibliCredentials
  readonly redirectUri: string
  readonly environment: BlibliEnvironment

  private readonly store: TokenStore
  private readonly fetchImpl?: typeof fetch
  private readonly shopIds = new Set<string>()

  constructor(config: BlibliConnectorConfig) {
    this.credentials = config.credentials
    this.redirectUri = config.redirectUri
    this.environment = config.environment ?? 'production'
    this.store = config.store ?? new InMemoryTokenStore()
    this.fetchImpl = config.fetch
  }

  /** Blibli tidak punya OAuth authorize — lempar error dengan pesan jelas. */
  buildAuthUrl(_shopId: string, _state?: string): string {
    throw new BlibliError(
      'Blibli tidak menggunakan OAuth. Registrasi seller langsung via connect(shopId, apiSellerKey).',
    )
  }

  /** Blibli tidak punya OAuth code — lempar error dengan pesan jelas. */
  handleCallback(_shopId: string, _code: string): Promise<TokenSet> {
    throw new BlibliError(
      'Blibli tidak menggunakan OAuth. Registrasi seller langsung via connect(shopId, apiSellerKey).',
    )
  }

  /** Key Blibli tidak kedaluwarsa — refresh tidak berlaku; lempar error jelas. */
  async refresh(_shopId: string): Promise<TokenSet> {
    throw new BlibliError('API-Seller-Key Blibli tidak kedaluwarsa — refresh tidak berlaku.')
  }

  /**
   * Registrasi/update seller: simpan apiSellerKey untuk shop tsb.
   * Pengganti `handleCallback` untuk platform bertoken.
   */
  async connect(shopId: string, apiSellerKey: string): Promise<TokenSet> {
    const token = toTokenSet(apiSellerKey, shopId, this.environment)
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /** Client untuk satu shop dengan apiSellerKey ter-inject. */
  async getClient(shopId: string): Promise<BlibliClient> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new BlibliError(`Shop ${shopId} belum connect. Panggil connect(shopId, apiSellerKey) dulu.`)
    }
    const cfg: BlibliClientConfig = {
      credentials: { ...this.credentials, apiSellerKey: token.accessToken },
      environment: this.environment,
      fetch: this.fetchImpl,
    }
    return new BlibliClient(cfg)
  }

  /** Daftar shop yang sudah pernah connect (punya apiSellerKey di store). */
  listShopIds(): string[] {
    const store = this.store as { keys?: () => readonly string[] }
    const fromStore = store.keys ? store.keys() : []
    return Array.from(new Set([...fromStore, ...this.shopIds]))
  }
}