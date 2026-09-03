import { Blibli } from './index'

const blibli = new Blibli({
  credentials: {
    clientKey: 'YOUR_CLIENT_KEY',
    clientSecret: 'YOUR_CLIENT_SECRET',
    apiSellerKey: 'YOUR_API_SELLER_KEY',
    signatureKey: 'YOUR_SIGNATURE_KEY', // opsional
  },
  environment: 'production',
})

async function main() {
  // GET-style API (params -> query string)
  const reasons = await blibli.order.cancellationReasonV1({
    requestId: 'myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed',
    username: 'seller@mail.com',
    storeId: 10001,
    storeCode: 'TOQ-15126',
    channelId: 'YourCompany',
  })
  console.log('cancellation reasons:', reasons)

  // Path param (promo-code substituted into {promoCode})
  await blibli.sellerPromoPurchaseDeals.upsertSellerPromoPurchaseDealDiscountedProductsV1({
    'promo-code': 'PROMO2025',
    requestId: 'uuid',
    storeCode: 'TOQ-15126',
    username: 'seller@mail.com',
    storeId: 10001,
  })

  // API dengan Request Body
  await blibli.product.addImageActiveProductV1(
    { requestId: 'uuid', storeId: 10001, storeCode: 'TOQ-15126', username: 'seller@mail.com', channelId: 'YourCompany' },
    { data: 'https://img/example.jpg', allVariants: { mainImage: true } },
  )
}

main().catch(console.error)
