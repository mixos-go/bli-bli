# @mixos-go/bli-bli-sdk

TypeScript SDK untuk **Blibli Seller Center API (MTA)** — mencakup **131 API**
dalam **17 kategori**, di-*generate* langsung dari doc reference repo ini
(`references/api/**`).

- Opsional **HMAC-SHA256 signing** sesuai `generate_signature.php` resmi Blibli
- Basic auth (`clientKey:clientSecret`) + `Api-Seller-Key`
- Skip otomatis doc webhook / staging-only yang tidak punya callable raw-path
- Typed request per API (path param, query, request body)
- Zero-dependency runtime (hanya TypeScript/devDep)

> Catatan: SDK ini hanya mem-*generate* **callable** API (yang punya `API raw
> string` berisi method + path). Doc webhook (Webhook Order/Product/Store
> Management/Queue/History/Authentication, Soft Release/Deprecated) dan beberapa
> staging-only tanpa path (`Self Approval Service (Staging Environment Only)`,
> `Seller Chat/sellerChatOTTV1`) di-skip karena tidak bisa di-*request* langsung.

## Instalasi

```bash
# build SDK (jalankan dari folder sdk/)
cd sdk
npm install
npm run build
```

## Quick start

```ts
import { Blibli } from './index'

const blibli = new Blibli({
  credentials: {
    clientKey: 'YOUR_CLIENT_KEY',
    clientSecret: 'YOUR_CLIENT_SECRET',
    apiSellerKey: 'YOUR_API_SELLER_KEY',
    // opsional: jika diisi, tiap request diberi header Signature + Signature-Time
    signatureKey: 'YOUR_SIGNATURE_KEY',
  },
  environment: 'production', // 'production' | 'staging'
})

// GET-style API (param dikirim sbg query string)
const reasons = await blibli.order.cancellationReasonV1({
  requestId: 'myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed',
  username: 'seller@mail.com',
  storeId: 10001,
  storeCode: 'TOQ-15126',
  channelId: 'YourCompany',
})

// API dengan path param (placeholder {promoCode} <-> param `promo-code`)
await blibli.sellerPromoPurchaseDeals.upsertSellerPromoPurchaseDealDiscountedProductsV1({
  'promo-code': 'PROMO2025',
  requestId: 'uuid',
  storeCode: 'TOQ-15126',
  username: 'seller@mail.com',
  storeId: 10001,
})

// API dengan Request Body (2 argumen: params + body)
await blibli.product.addImageActiveProductV1(
  { requestId: 'uuid', storeId: 10001, storeCode: 'TOQ-15126', username: 'seller@mail.com', channelId: 'YourCompany' },
  { data: 'https://img/example.jpg', allVariants: { mainImage: true } },
)
```

Override environment per-call:

```ts
const res = await blibli.order.getOrderItemsV2(params, { environment: 'staging' })
```

## Signing (opsional)

Jika `signatureKey` disediakan, tiap request menambahkan header:

- `Signature-Time`: timestamp ms saat ini
- `Signature`: `base64(HMAC-SHA256(signatureKey, apiKey))` dengan
  `apiKey = METHOD\n<bodyMd5>\n<contentType>\n<D M d H:i:s T Y (WIB)>\n<path>`,
  sesuai implementasi PHP resmi Blibli (`formatBlibliDate` + `bodyRaw`).

Tanpa `signatureKey`, SDK cukup mengirim Basic auth + `Api-Seller-Key` (cocok
untuk endpoint yang tidak mewajibkan signature).

## Connector multi-seller (key-based, tanpa OAuth)

Blibli **tidak punya OAuth** untuk Seller API saat ini (`seller-api.blibli.com`):
auth-nya Basic (`clientKey:clientSecret`) + header `Api-Seller-Key` yang
dibuat per toko di Seller Center. Karena itu connector `BlibliConnector`
beradaptasi **key-based**: satu instance connector, banyak shop, API-Seller-Key
disimpan per `shopId` di `TokenStore` dan di-inject ke `BlibliClient` tiap
`getClient(shopId)`.

```ts
import { createBlibliConnector, InMemoryTokenStore } from './connector'

const connector = createBlibliConnector({
  credentials: { clientKey: '...', clientSecret: '...', signatureKey: 'OPTIONAL' },
  redirectUri: 'https://app.example/cb', // disimpan utk kontrak seragam; tidak terpakai
  store: new InMemoryTokenStore(),
  environment: 'production',
})

// Registrasi seller (pengganti OAuth handleCallback)
await connector.connect('TOQ-15126', 'API_SELLER_KEY_TOKO_TSB')

// Client untuk satu shop — apiSellerKey otomatis ter-inject
const client = await connector.getClient('TOQ-15126')

// Method OAuth (buildAuthUrl/handleCallback/refresh) melempar error jelas:
// Blibli tidak memakai OAuth. Key tidak kedaluwarsa → tidak ada refresh.
```

> Catatan kontrak: bentuk class/kontrak connector **identik** dengan Shopee/TTS/
> Lazada (`buildAuthUrl`, `handleCallback`, `refresh`, `getClient`), hanya saja di
> Blibli tiga method OAuth itu N/A dan digantikan `connect(shopId, apiSellerKey)`.

## Struktur

```
src/
  index.ts        # entry: class Blibli + wiring 17 category sub-clients
  client.ts       # BlibliClient: hosts, formatBlibliDate (WIB), sign, request
  types.ts        # BlibliCredentials, BlibliError, request options
  generated/      # AUTO-GENERATED per-category typed clients
scripts/
  generate.cjs    # generator (parse references/api -> src/generated)
  smoke.cjs       # smoke test signing/request/path-param/body
```

Regenerate setelah update doc: `npm run generate`.

## Lisensi

MIT
