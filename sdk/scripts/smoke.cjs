const assert = require('assert')
const crypto = require('crypto')
const { Blibli, sign } = require('../dist/index.js')

// Independent reproduction of Blibli's official PHP generate_signature algorithm.
function refSign(secret, method, path, body, contentType, ms) {
  const secs = Math.floor(ms / 1000)
  const dt = new Date(secs * 1000)
  const p = (o) => o === undefined ? '' : o
  const ISSUE = { length: 8 } // unused placeholder
  const day = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', weekday: 'short' }).format(dt)
  const mon = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', month: 'short' }).format(dt)
  const dayNum = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', day: '2-digit' }).format(dt)
  const time = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(dt)
  const tz = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', timeZoneName: 'short' }).formatToParts(dt).find((x) => x.type === 'timeZoneName').value
  const year = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Jakarta', year: 'numeric' }).format(dt)
  const patternDate = `${day} ${mon} ${dayNum} ${time} ${tz} ${year}`

  let raw = body || ''
  raw = raw.replace(/\r/g, '\\r').replace(/\n/g, '\\n')
  const bodyMd5 = raw !== '' ? crypto.createHash('md5').update(raw).digest('hex') : ''
  const apiKey = method + '\n' + bodyMd5.trim() + '\n' + (contentType || 'application/json').trim() + '\n' + patternDate + '\n' + path
  return crypto.createHmac('sha256', secret).update(apiKey).digest('base64')
}

async function main() {
  // 1. Signature matches the official Blibli algorithm.
  {
    const ms = 1589278732000 // some fixed ms
    const { signature } = sign('sigsecret', { method: 'POST', path: '/seller/v1/products/async', body: '{"x":1}', contentType: 'application/json', timestampMs: ms })
    const expected = refSign('sigsecret', 'POST', '/seller/v1/products/async', '{"x":1}', 'application/json', ms)
    assert.strictEqual(signature, expected)
    // empty body -> empty md5
    const { signature: s2 } = sign('k', { method: 'GET', path: '/path', body: '', contentType: 'application/json', timestampMs: ms })
    assert.strictEqual(s2, refSign('k', 'GET', '/path', '', 'application/json', ms))
    console.log('✓ sign(): base64 HMAC-SHA256 matches official algorithm (with + without body)')
  }

  // 2. GET request: headers + query params.
  {
    let captured = null
    const client = new Blibli({
      credentials: { clientKey: 'ck', clientSecret: 'cs', apiSellerKey: 'ASK' },
      environment: 'production',
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: '200', message: 'ok' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    const res = await client.order.cancellationReasonV1({
      requestId: 'rid-1',
      username: 'user@mail.com',
      storeId: 10001,
      storeCode: 'TOQ-15126',
      channelId: 'YourCompany',
    })
    const u = new URL(captured.url)
    assert.strictEqual(u.host, 'seller-api.blibli.com')
    assert.strictEqual(u.searchParams.get('requestId'), 'rid-1')
    assert.strictEqual(u.searchParams.get('storeId'), '10001')
    assert.strictEqual(captured.init.headers['Api-Seller-Key'], 'ASK')
    assert.strictEqual(captured.init.headers['Authorization'], 'Basic ' + Buffer.from('ck:cs').toString('base64'))
    assert.strictEqual(captured.init.headers['Content-Type'], 'application/json')
    assert.strictEqual(res.code, '200')
    console.log('✓ GET: production host, query params, auth headers ok')
  }

  // 3. Optional Signature header added when signatureKey configured.
  {
    let captured = null
    const client = new Blibli({
      credentials: { clientKey: 'ck', clientSecret: 'cs', apiSellerKey: 'ASK', signatureKey: 'sig' },
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } })
      },
    })
    await client.order.cancellationReasonV1({ requestId: 'r', username: 'u', storeId: 1, storeCode: 'c', channelId: 'ch' }, { timestamp: 1589278732000 })
    assert.ok(captured.init.headers['Signature'])
    assert.ok(captured.init.headers['Signature-Time'])
    assert.strictEqual(captured.init.headers['Signature-Time'], '1589278732000')
    console.log('✓ Signature + Signature-Time headers added when signatureKey set')
  }

  // 4. Path param substitution.
  {
    let captured = null
    const client = new Blibli({
      credentials: { clientKey: 'ck', clientSecret: 'cs', apiSellerKey: 'ASK' },
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } })
      },
    })
    await client.sellerPromoPurchaseDeals.upsertSellerPromoPurchaseDealDiscountedProductsV1({
      'promo-code': 'PROMO123',
      requestId: 'r',
      storeCode: 'c',
      username: 'u',
      storeId: 1,
    })
    assert.ok(captured.url.includes('/seller/v1/promos/purchase-deals/PROMO123/products/discounted'))
    console.log('✓ Path param: {promoCode} substituted using promo-code field')
  }

  // 5. POST with body.
  {
    let captured = null
    const client = new Blibli({
      credentials: { clientKey: 'ck', clientSecret: 'cs', apiSellerKey: 'ASK' },
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } })
      },
    })
    await client.product.addImageActiveProductV1(
      { requestId: 'r', storeId: 1, storeCode: 'c', username: 'u', channelId: 'ch' },
      { data: 'https://img/x.png', variants: [{ blibliSku: 'SKU-1', mainImage: true }], allVariants: { mainImage: true } },
    )
    assert.strictEqual(captured.init.method, 'POST' === 'POST' ? 'POST' : captured.init.method)
    const body = JSON.parse(captured.init.body)
    assert.strictEqual(body.variants[0].blibliSku, 'SKU-1')
    assert.strictEqual(body.allVariants.mainImage, true)
    console.log('✓ POST: JSON body sent')
  }

  console.log('\nAll smoke tests passed.')
}

main().catch((e) => {
  console.error('SMOKE TEST FAILED:', e)
  process.exit(1)
})
