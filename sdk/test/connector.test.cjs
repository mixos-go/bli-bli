'use strict'
const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { createBlibliConnector, InMemoryTokenStore } = require('../dist/connector/index')
const { BlibliError } = require('../dist/types')
const { sign } = require('../dist/client')

const credentials = { clientKey: 'ck', clientSecret: 'cs' }

function makeFetch(log) {
  return async (url, init) => {
    log.urls.push(String(url))
    log.headers.push(init && init.headers ? init.headers : {})
    return { ok: true, status: 200, text: async () => JSON.stringify({ output: { success: true } }) }
  }
}

const mkSpec = () => ({ method: 'GET', path: '/openapi/seller/product', query: ['itemSku'], body: [], pathParams: [] })

describe('InMemoryTokenStore', () => {
  it('get/set/delete/keys', () => {
    const s = new InMemoryTokenStore()
    assert.equal(s.get('s'), undefined)
    s.set('s', { accessToken: 'KEY' })
    assert.equal(s.get('s').accessToken, 'KEY')
    s.delete('s')
    assert.equal(s.get('s'), undefined)
    assert.deepEqual(s.keys(), [])
  })
})

describe('BlibliConnector (key-based, tanpa OAuth)', () => {
  it('buildAuthUrl lempar BlibliError jelas', () => {
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb' })
    assert.throws(() => c.buildAuthUrl('s1'), (e) => e instanceof BlibliError && /tidak menggunakan OAuth/.test(e.message))
  })
  it('handleCallback lempar BlibliError jelas', () => {
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb' })
    assert.throws(() => c.handleCallback('s1', 'code'), (e) => e instanceof BlibliError && /tidak menggunakan OAuth/.test(e.message))
  })
  it('refresh lempar BlibliError jelas', async () => {
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb', fetch: makeFetch({ urls: [], headers: [] }) })
    await assert.rejects(c.refresh('s1'), (e) => e instanceof BlibliError && /tidak kedaluwarsa/.test(e.message))
  })

  it('connect: simpan apiSellerKey, return TokenSet', async () => {
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb' })
    const token = await c.connect('s1', 'KEY_A')
    assert.equal(token.accessToken, 'KEY_A')
    assert.equal(token.shopId, 's1')
    assert.deepEqual(c.listShopIds(), ['s1'])
  })

  it('getClient shop belum connect → BlibliError jelas', async () => {
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb' })
    await assert.rejects(c.getClient('nope'), (e) => e instanceof BlibliError && /belum connect/.test(e.message))
  })

  it('getClient: inject apiSellerKey + Basic tetap jalan', async () => {
    const log = { urls: [], headers: [] }
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb', fetch: makeFetch(log) })
    await c.connect('s1', 'KEY_A')
    const client = await c.getClient('s1')
    await client.request(mkSpec(), { itemSku: 'SKU1' })
    const h = log.headers[0]
    assert.ok(h['Api-Seller-Key'] === 'KEY_A', JSON.stringify(h))
    assert.ok(h.Authorization.startsWith('Basic '), JSON.stringify(h))
  })

  it('multi-seller isolation: Api-Seller-Key per shop tidak tercampur', async () => {
    const log = { urls: [], headers: [] }
    const c = createBlibliConnector({ credentials, redirectUri: 'https://a/cb', fetch: makeFetch(log) })
    await c.connect('s1', 'KEY_A')
    await c.connect('s2', 'KEY_B')
    const c1 = await c.getClient('s1')
    const c2 = await c.getClient('s2')
    await c1.request(mkSpec(), {})
    await c2.request(mkSpec(), {})
    assert.ok(log.headers[0]['Api-Seller-Key'] === 'KEY_A', JSON.stringify(log.headers[0]))
    assert.ok(log.headers[1]['Api-Seller-Key'] === 'KEY_B', JSON.stringify(log.headers[1]))
    assert.deepEqual(c.listShopIds().sort(), ['s1', 's2'])
  })
})

describe('sign (smoke Blibli)', () => {
  it('base64 HMAC-SHA256 + signatureTime deterministik utk input sama', () => {
    const a = sign('sigKey', { method: 'GET', path: '/openapi/seller/product', timestampMs: 1700000000000 })
    const b = sign('sigKey', { method: 'GET', path: '/openapi/seller/product', timestampMs: 1700000000000 })
    assert.equal(a.signature, b.signature)
    assert.equal(a.signatureTime, '1700000000000')
    assert.match(a.signature, /^[A-Za-z0-9+/=]+$/)
  })
  it('request dengan signatureKey → header Signature & Signature-Time', async () => {
    const log = { urls: [], headers: [] }
    const c = createBlibliConnector({ credentials: { ...credentials, signatureKey: 'sigKey' }, redirectUri: 'https://a/cb', fetch: makeFetch(log) })
    await c.connect('s1', 'KEY_A')
    const client = await c.getClient('s1')
    await client.request(mkSpec(), {})
    const h = log.headers[0]
    assert.ok(h.Signature, JSON.stringify(h))
    assert.ok(h['Signature-Time'], JSON.stringify(h))
  })
})