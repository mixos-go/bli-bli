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

- [ ] Riset endpoint OAuth Blibli (authorize + token): cek `references/`, `SKILL.md`, dan doc resmi
      Blibli Seller API. Tentukan `authorizeEndpoint` & `tokenEndpoint` + bentuk request/response
      (access_token, refresh_token, expires_in). Taruh temuan di PR description.
- [ ] `connector/types.ts` — `TokenSet`, `ConnectorConfig` sesuai kontrak; tambah field spesifik
      Blibli bila perlu.
- [ ] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore`.
- [ ] `connector/connector.ts` — class `BlibliConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` → bangun URL authorize (client_id, redirect_uri, state).
  - `handleCallback(shopId, code)` → exchange code via `tokenEndpoint`, parse jadi `TokenSet`,
    simpan.
  - `refresh(shopId)` → refresh via `tokenEndpoint` (grant_type=refresh_token), update store.
  - `getClient(shopId)` → return `BlibliClient` yang auto-inject token & auto-refresh (Fase 2).
  - `listShopIds()`.
- [ ] `connector/index.ts` — `createBlibliConnector(config)`.
- [ ] Ekspor connector dari `src/index.ts`.

## Fase 2 — OAuth dari nol + token injection di client

Blibli belum punya OAuth sama sekali, jadi ini dibangun baru (menggantikan "fix primitif" platform
lain):

- [ ] **Token payload**: `BlibliCredentials` saat ini cuma `clientKey/clientSecret/apiSellerKey`
      (`src/types.ts:11`). Tambah support token (access/refresh) — apakah sbg field opsional di
      `BlibliCredentials`, atau dibawa connector terpisah. Putuskan & dokumentasikan.
- [ ] **Inject token ke request**: `BlibliClient.request()` (`src/client.ts:182-201`) saat ini
      hardcoded `Authorization: Basic` + `Api-Seller-Key`. Tambah dukungan `Authorization: Bearer
      <accessToken>` untuk endpoint yang butuh token (tanpa merusak flow Basic yang ada).
- [ ] **Credential mutability**: `credentials` & `defaults` `private readonly` (`src/client.ts:123`)
      → putuskan pendekatan agar connector bisa inject/refresh token runtime (setter, rekonstruksi
      client, atau terapkan `Authorization` dari store tiap call). Dokumentasikan.
- [ ] Tambah konstanta host OAuth endpoint (mungkin beda dari `seller-api.blibli.com`).
- [ ] Implement auto-refresh: cek `expiresAt` sebelum call; refresh jika `< threshold`.
      Single-flight agar refresh tidak dobel saat paralel.

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
