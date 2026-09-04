# TODO — Blibli SDK (connector + OAuth)

Urutan fase wajib diikuti (fase N butuh fase N-1 selesai). Dalam satu fase, task boleh paralel
selama tidak menyentuh file yang sama. Setiap task = 1 PR.

Status: `[ ]` belum, `[~]` in progress, `[x]` selesai & merged.

> **Contract connector SERAGAM** (dipakai identik di SDK Shopee/TTS/Lazada/Blibli — hanya detail
> internal platform yang beda). Jangan ubah bentuk/struktur contract tanpa persetujuan bersama:
> folder, interface `TokenStore`, tipe `TokenSet`, dan kelas connector harus sama persis antar repo.

> **Catatan khusus Blibli:** berbeda dari 3 SDK lain, SDK ini saat ini **TIDAK punya OAuth sama
> sekali** — auth hanya berupa HTTP Basic auth (`clientKey`/`clientSecret`) + header
> `Api-Seller-Key` + opsional `Signature`. Tidak ada access/refresh token. Jadi connector di sini
> banyak dibangun **dari nol** (Fase 2 menggantikan "fix primitif OAuth" yang di platform lain).

---

## Kontrak seragam connector (multi-seller)

Folder yang harus ada (bentuk sama di semua repo):

```
sdk/src/connector/
├── types.ts        <- TokenSet, ConnectorConfig, token + shop identifier
├── token-store.ts  <- interface TokenStore + InMemoryTokenStore
├── connector.ts    <- class BlibliConnector (multi-seller) + auto-refresh
└── index.ts        <- createBlibliConnector(config) factory
```

### `types.ts`

```ts
interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari expires_in platform saat diperoleh). */
  expiresAt?: number
  /** field tambahan spesifik platform (mis. apiSellerKey, environment). */
  [key: string]: unknown
}

interface ConnectorConfig {
  credentials: /* tipe kredensial platform (mis. BlibliCredentials) */
  redirectUri: string
  store?: TokenStore
  /** environment/region default + pilihan tambahan sesuai platform. */
  environment?: unknown
  scope?: string
}
```

### `token-store.ts`

```ts
interface TokenStore {
  get(shopId: string): Promise<TokenSet | undefined> | TokenSet | undefined
  set(shopId: string, token: TokenSet): Promise<void> | void
  delete(shopId: string): Promise<void> | void
}

class InMemoryTokenStore implements TokenStore { /* Map<shopId, TokenSet> */ }
```

### `connector.ts`

Kelas `BlibliConnector` **multi-seller** (satu instance, banyak shop):

- `buildAuthUrl(shopId, state?): string` — URL OAuth yang harus dikunjungi seller (per shop).
- `handleCallback(shopId, code): Promise<TokenSet>` — exchange code → token, simpan ke store.
- `refresh(shopId): Promise<TokenSet>` — refresh token sebelum/ketika kedaluwarsa, update store.
- `getClient(shopId): BlibliClient` — client untuk shop tsb yang **auto-inject token** dan
  `auto-refresh` saat `expiresAt` mendekat; kalau token belum ada → lempar error yang jelas.
- `listShopIds(): string[]`.

### `index.ts`

`createBlibliConnector(config: ConnectorConfig): BlibliConnector`

---

## Fase 1 — Connector core (struktur + contract)

- [x] **Riset endpoint OAuth Blibli** (authorize + token) — temuan: API saat ini
      (`seller-api.blibli.com`) **tokenless** (Basic `clientKey:clientSecret` + header
      `Api-Seller-Key`; release resmi Java client: "it's tokenless, no need to maintain token
      anymore"). Tidak ada authorize/token/refresh endpoint. OAuth hanya di MTA lama (v3.x,
      deprecated, host `api-uata.gdn-app.com/v2/oauth/token`, body `{apiUsername, apiPassword,
      mtaUsername, mtaPassword, platformName, refreshToken?}` → `{access_token, refresh_token}`,
      business call via `/v2/proxy/mta/...`) — host & skema proxy berbeda dari endpoint SDK ini.
      **Keputusan (disetujui user): adaptasi key-based** — kontrak seragam dipertahankan, tapi
      `buildAuthUrl`/`handleCallback`/`refresh` lempar error jelas & registrasi via
      `connect(shopId, apiSellerKey)`. Detail di `sdk/src/connector/connector.ts`.
- [x] `connector/types.ts` — `TokenSet` (accessToken = apiSellerKey, tanpa expiry), `BlibliConnectorConfig`
      (credentials/redirectUri/store/environment/fetch); `redirectUri` dipertahankan utk kontrak seragam.
- [x] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore` (dengan `keys()`).
- [x] `connector/connector.ts` — class `BlibliConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` & `handleCallback(shopId, code)` → lempar `BlibliError` jelas
    (Blibli tidak pakai OAuth).
  - `refresh(shopId)` → lempar jelas (key tidak kedaluwarsa).
  - `connect(shopId, apiSellerKey)` → simpan TokenSet (pengganti `handleCallback`).
  - `getClient(shopId)` (async) → `BlibliClient` ter-inject apiSellerKey per shop.
  - `listShopIds()` — union dari `keys()` store + Set internal connector.
- [x] `connector/index.ts` — `createBlibliConnector(config)`.
- [x] Ekspor connector dari `src/index.ts` (`export * from './connector'`).

## Fase 2 — OAuth dari nol + token injection di client

Keputusan user (Fase 1): **adaptasi key-based** — Blibli tidak punya OAuth, jadi fase ini
dianulir jadi dokumentasi & formalisasi keputusan (alih-alih bangun OAuth):

- [x] **Token payload / `Authorization: Bearer`**: N/A. Tidak ada access/refresh token; identitas
      per-shop = `apiSellerKey`, dikirim ulang via header `Api-Seller-Key` (bukan Bearer). Sudah
      ter-inject per shop di connector (`getClient` merge `credentials` + `apiSellerKey` shop).
- [x] **Credential mutability / aset detail**: N/A. Key tidak kedaluwarsa → tidak ada refresh
      runtime; `BlibliClient` dibangun per shop dengan kredensial (key) ter-override. `credentials`
      client tetap `private readonly`, aman.
- [x] **Host OAuth endpoint**: N/A (tidak ada). `redirectUri` di config connector dipertahankan
      hanya utk kepatuhan kontrak seragam.
- [x] **Auto-refresh**: N/A (key tidak kedaluwarsa). Dicatat di `sdk/README.md` § Connector
      multi-seller (key-based, tanpa OAuth) — 2 mode auth (Basic legacy vs connector multi-seller).
- [x] Dokumentasi: `sdk/README.md` ditambah bagian connector multi-seller; contoh `connect(shopId,
      apiSellerKey)` → `getClient(shopId)`.

## Fase 3 — Multi-seller switch

- [ ] `getClient(shopId)` utk shop berbeda menghasilkan client dgn token sendiri.
- [ ] Test isolasi antar shop (token + apiSellerKey tidak tercampur).

## Fase 4 — Testing (connector)

- [ ] Unit test `TokenStore`.
- [ ] Unit test `BlibliConnector` pakai mock (tanpa hit API asli): buildAuthUrl, handleCallback
      (parse token + expire), refresh, auto-refresh, error path.
- [ ] Unit test token injection di `BlibliClient.request()` (Basic tetap jalan + Bearer opsional).
- [ ] Unit test isolasi multi-seller.
- [ ] Smoke test signing & auth Basic tetap hijau (jangan rusak `sign()` & flow eksisting).

## Fase 5 — Docs & release

- [ ] Update `sdk/README.md`: jelaskan 2 mode auth — (1) Basic legacy, (2) OAuth connector
      (access/refresh token, multi-seller).
- [ ] Update `SKILL.md`/doc referensi OAuth Blibli jika perlu.
- [ ] Bump version + publish ke GitHub Packages.

---

## Catatan platform (mulai implement dari sini)

- Kredensial: `BlibliCredentials { clientKey, clientSecret, apiSellerKey, signatureKey? }`
  (`src/types.ts:11`).
- Auth saat ini: HTTP Basic (`clientKey:clientSecret`) + header `Api-Seller-Key` + opsional
  `Signature` HMAC (`src/client.ts:182-201`). **Belum ada access/refresh token / OAuth.**
- Signing: `src/client.ts sign()` — HMAC-SHA256 base64 + MD5 body + tanggal WIB; tidak terkait
  token OAuth.
- Webhook: Blibli **mengirim** JWT token ke partner (inbound) — bukan OAuth keluar; riset ini
  terpisah, jangan dicampur dgn OAuth connector.
- Host produksi `https://seller-api.blibli.com`; OAuth endpoint kemungkinan host terpisah → riset.
- Gap besar yang dilengkapi: seluruh OAuth flow + TokenStore + expiry + auto-refresh + multi-seller
  (platform lain tinggal bungkus primitif yang ada; di sini dibangun dari nol).
