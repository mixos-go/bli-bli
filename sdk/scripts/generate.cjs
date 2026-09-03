/**
 * Generator: parses every reference doc under `../../references/api` that
 * documents a callable API (contains an "API raw string") and emits a typed,
 * category-scoped SDK under `../src/generated`.
 *
 * Blibli specifics handled here:
 *  - Method + path parsed from the "API raw string" (literal `\n` separators).
 *  - Header table is auto-managed by the client (Basic auth, Api-Seller-Key,
 *    Signature) so it is not part of the request type.
 *  - Parameter table -> flat request type; `{param}` path placeholders routed
 *    as path params, the rest as query params.
 *  - Optional Request Body JSON -> nested body type.
 *  - Response bodies are undocumented -> `unknown` result.
 *  - Webhook / staging-only docs without a raw string are skipped.
 *
 * Run: `npm run generate` (from sdk/).
 */
const fs = require('fs')
const path = require('path')

const API_ROOT = path.join(__dirname, '../../references/api')
const OUT_DIR = path.join(__dirname, '../src/generated')

// ---------- Markdown helpers ----------

function splitSections(content) {
  const sections = {}
  let cur = null
  for (const line of content.split('\n')) {
    const m = line.match(/^### (.+)/)
    if (m) {
      cur = m[1].trim()
      sections[cur] = []
      continue
    }
    if (cur) sections[cur].push(line)
  }
  return sections
}

function parseTable(lines) {
  const rows = []
  let header = null
  for (const line of lines) {
    const t = line.trim()
    if (!t.startsWith('|')) continue
    const cells = t.split('|').slice(1, -1).map((c) => c.trim().replace(/`/g, ''))
    if (cells.every((c) => /^[-: ]+$/.test(c))) continue
    if (!header && /^(name|field|property|properties)$/i.test(cells[0] || '')) {
      header = cells
      continue
    }
    if (header) rows.push({ cells, header })
  }
  return { rows, header }
}

function colIdx(header, names) {
  if (!header) return -1
  return header.findIndex((h) => names.includes(h.toLowerCase()))
}

const TYPE_IDX_NAMES = ['type', 'datatype']
const REQ_IDX_NAMES = ['required', 'mandatory']
const DESC_IDX_NAMES = ['description']

// ---------- Raw string ----------

/**
 * Parse the "API raw string" line:
 *   POST\nHEX\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/...
 * (the text uses literal backslash-n sequences).
 */
function parseRaw(content) {
  const m = content.match(/API raw string:?\s*([^\n]*)/)
  if (!m) return null
  const val = m[1].replace(/\\n/g, '\n').trim()
  const lines = val.split('\n').map((l) => l.trim()).filter(Boolean)
  if (!lines.length) return null
  const method = lines[0].toUpperCase()
  const path = lines.find((l) => l.startsWith('/')) || null
  if (!path) return null
  return { method, path }
}

// ---------- Naming ----------

function pascal(str) {
  return str
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('')
}

function camel(str) {
  const p = pascal(str)
  return p[0].toLowerCase() + p.slice(1)
}

function safeIdentifier(name) {
  const c = camel(name)
  if (/^[A-Za-z_$]/.test(c)) return c
  return '_' + c
}

function moduleName(cat) {
  return pascal(cat.replace(/[^A-Za-z0-9]+/g, ' '))
}

// ---------- Type mapping ----------

function mapBaseType(type) {
  const t = (type || '').trim().toLowerCase()
  if (t.endsWith('[]')) return `Array<${mapBaseType(t.slice(0, -2))}>`
  if (t === 'object' || t === 'map' || t === 'jsonobject' || t === 'array') return 'Record<string, unknown>'
  if (/^(integer|int|int32|int64|long|float|double|number|bigdecimal)$/.test(t)) return 'number'
  if (t === 'boolean' || t === 'bool') return 'boolean'
  if (/^(string|text|url|enum|date|datetime|byte|binary|uuid)$/.test(t)) return 'string'
  return 'unknown'
}

// ---------- JSON -> TS (for Request Body) ----------

function jsonToTs(value, indent) {
  const pad = '  '.repeat(indent)
  if (value === null || value === undefined) return 'unknown'
  const t = typeof value
  if (t === 'number') return 'number'
  if (t === 'boolean') return 'boolean'
  if (t === 'string') return 'string'
  if (Array.isArray(value)) {
    if (value.length === 0) return 'Array<unknown>'
    return `Array<${jsonToTs(value[0], indent)}>`
  }
  if (t === 'object') {
    const keys = Object.keys(value)
    if (!keys.length) return 'Record<string, unknown>'
    const lines = ['{']
    for (const k of keys) {
      lines.push(`${pad}  ${JSON.stringify(k)}?: ${jsonToTs(value[k], indent + 1)},`)
    }
    lines.push(`${pad}}`)
    return lines.join('\n')
  }
  return 'unknown'
}

function bodyInterface(name, json) {
  const lines = [`export interface ${name} {`]
  if (json && typeof json === 'object' && !Array.isArray(json)) {
    for (const [k, v] of Object.entries(json)) {
      lines.push(`  ${JSON.stringify(k)}?: ${jsonToTs(v, 1)},`)
    }
  }
  lines.push(`}`)
  return lines.join('\n')
}

function firstJson(lines) {
  const joined = lines.join('\n')
  const m = joined.match(/```\s*\n([\s\S]*?)\n```/)
  if (!m) return null
  try {
    return JSON.parse(m[1])
  } catch {
    return null
  }
}

// ---------- Request interface (flat from Parameter table) ----------

function requestInterface(name, table, pathNames) {
  const pad = '  '
  const lines = [`export interface ${name} {`]
  const seen = new Set()
  const typeIdx = colIdx(table.header, TYPE_IDX_NAMES)
  const reqIdx = colIdx(table.header, REQ_IDX_NAMES)
  const descIdx = colIdx(table.header, DESC_IDX_NAMES)
  for (const { cells, header } of table.rows) {
    const fieldName = (cells[0] || '').trim()
    if (!fieldName || seen.has(fieldName)) continue
    seen.add(fieldName)
    const type = typeIdx >= 0 ? cells[typeIdx] : (header.length > 1 ? cells[1] : '')
    const reqVal = reqIdx >= 0 ? cells[reqIdx] : undefined
    const required = reqVal !== undefined && /^yes$/i.test(String(reqVal).trim())
    const ts = mapBaseType(type)
    const route = pathNames.has(fieldName) ? '(path)' : ''
    const desc = descIdx >= 0 ? cells[descIdx] : ''
    const jdoc = desc.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
    if (jdoc || route) {
      lines.push(`${pad}/** ${jdoc ? jdoc + ' ' : ''}${route} */`)
    }
    lines.push(`${pad}${JSON.stringify(fieldName)}${required ? '' : '?'}: ${ts},`)
  }
  lines.push(`}`)
  return lines.join('\n')
}

// ---------- Doc parsing ----------

function parseDoc(cat, file, content) {
  const raw = parseRaw(content)
  if (!raw) return null
  const sections = splitSections(content)
  const apiName = file.replace(/\.md$/, '')

  const paramTable = parseTable(sections['Parameter'] || [])
  const paramNames = new Set(paramTable.rows.map((r) => (r.cells[0] || '').trim()).filter(Boolean))

  // Path placeholders -> path params; the rest -> query.
  const placeholders = [...raw.path.matchAll(/\{([^}]+)\}/g)].map((x) => x[1])
  // Map each placeholder to its actual parameter-table field name by
  // normalized matching (e.g. `{promoCode}` <-> `promo-code`).
  const norm = (s) => String(s).toLowerCase().replace(/[-_]/g, '')
  const byNorm = new Map()
  for (const n of paramNames) byNorm.set(norm(n), n)
  const pathParams = placeholders.map((ph) => [ph, byNorm.get(norm(ph)) || ph])
  const pathParamSet = new Set(pathParams.map(([, k]) => k))
  const queryParams = [...paramNames].filter((n) => !pathParamSet.has(n))

  // Request Body JSON.
  let bodyJson = null
  let bodyKeys = []
  if (sections['Request Body']) {
    bodyJson = firstJson(sections['Request Body'])
    if (bodyJson && typeof bodyJson === 'object' && !Array.isArray(bodyJson)) {
      bodyKeys = Object.keys(bodyJson)
    }
  }

  return { apiName, method: raw.method, path: raw.path, paramTable, paramNames, pathParams: [...pathParams], queryParams, bodyJson, bodyKeys }
}

function emitCategory(cat) {
  const dir = path.join(API_ROOT, cat)
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()

  const docs = []
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')
    const doc = parseDoc(cat, file, content)
    if (doc) docs.push({ file, ...doc })
  }
  if (docs.length === 0) return null

  const mod = moduleName(cat)
  const className = `Blibli${mod}Api`

  const typeParts = []
  const methodParts = []

  for (const doc of docs) {
    const { apiName, method, path: httpPath } = doc
    const Pascal = pascal(apiName)
    let reqType = Pascal
    let bodyType = ''
    if (!/Request$/.test(Pascal)) reqType = `${Pascal}Request`

    const hasBody = doc.bodyKeys.length > 0
    if (hasBody) {
      bodyType = `${Pascal}Body`
      typeParts.push(bodyInterface(bodyType, doc.bodyJson))
    }

    if (doc.paramTable.header && doc.paramNames.size > 0) {
      typeParts.push(requestInterface(reqType, doc.paramTable, new Set(doc.pathParams.map(([, k]) => k))))
    } else {
      typeParts.push(`export interface ${reqType} {}\n`)
    }

    const spec = {
      method,
      path: httpPath,
      query: doc.queryParams,
      pathParams: doc.pathParams,
      body: doc.bodyKeys,
    }
    const specJson = JSON.stringify(spec)
    const m = safeIdentifier(apiName)

    if (hasBody) {
      typeParts.push(`export type ${Pascal}Response = unknown`)
      methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqType}, body: ${bodyType}, opts?: BlibliRequestOptions): Promise<${Pascal}Response> {
    return this.client.request(${specJson}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }`)
    } else {
      typeParts.push(`export type ${Pascal}Response = unknown`)
      methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqType}, opts?: BlibliRequestOptions): Promise<${Pascal}Response> {
    return this.client.request(${specJson}, params as unknown as Record<string, unknown>, opts)
  }`)
    }
  }

  const fileContent = `// AUTO-GENERATED from Blibli Seller API reference docs (references/api/${cat}).
// Do not edit by hand; run \`npm run generate\` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

${typeParts.join('\n\n')}

export class ${className} {
  constructor(private client: BlibliClient) {}

${methodParts.join('\n\n')}
}
`

  fs.mkdirSync(path.join(OUT_DIR, mod), { recursive: true })
  fs.writeFileSync(path.join(OUT_DIR, mod, 'index.ts'), fileContent)
  return mod
}

function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true })
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const cats = fs.readdirSync(API_ROOT).filter((d) => fs.statSync(path.join(API_ROOT, d)).isDirectory()).sort()
  const modules = cats.map((cat) => emitCategory(cat)).filter(Boolean)

  const barrel = modules.map((mod) => `export { Blibli${mod}Api } from './${mod}'`).join('\n')
  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), `// AUTO-GENERATED barrel. Run \`npm run generate\`.\n${barrel}\n`)

  console.log(`Generated ${modules.length} category modules`)
  console.log(`Callable APIs covered: ${modules.length}`)
}

module.exports = { parseTable, splitSections, mapBaseType, pascal, camel, colIdx, parseRaw }

if (require.main === module) {
  main()
}
