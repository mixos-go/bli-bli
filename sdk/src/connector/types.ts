import type { BlibliCredentials, BlibliEnvironment } from '../types'
import type { TokenStore } from './token-store'

/**
 * Token pasangan untuk satu shop. Blibli memakai API-Seller-Key (tokenless,
 * tidak kedaluwarsa), jadi `accessToken` berisi `apiSellerKey` dari shop tsb.
 * `refreshToken`/`expiresAt` tidak digunakan Blibli (selalu undefined).
 */
export interface TokenSet {
  /** apiSellerKey milik shop (Blibli tidak punya OAuth access token). */
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa — Blibli key tidak kedaluwarsa. */
  expiresAt?: number
  [key: string]: unknown
}

export interface BlibliConnectorConfig {
  /** clientKey/clientSecret untuk Basic auth transport + signatureKey opsional. */
  credentials: BlibliCredentials
  /**
   * Tidak terpakai di Blibli (registrasi langsung via `connect`, bukan OAuth).
   * Dipertahankan agar kontrak connector seragam dengan platform lain.
   */
  redirectUri: string
  store?: TokenStore
  environment?: BlibliEnvironment
  fetch?: typeof fetch
}