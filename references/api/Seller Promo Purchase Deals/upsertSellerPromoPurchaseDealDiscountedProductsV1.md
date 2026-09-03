---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Promo Purchase Deals
api_name: upsertSellerPromoPurchaseDealDiscountedProductsV1
url: "https://seller-api.blibli.com/docs/services/66/operations/upsertSellerPromoPurchaseDealDiscountedProductsV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:39"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 522
reading_time: 2 min
---



# Upsert Purchase Deals Discounted Product

### Overview

API Version

PUTCopy

Requirement

1. Require a valid purchase deal promo code on the path parameter.
2. Require at least one product in the products array.
3. For L3 products (product-level pricing): discountedPrice is required when exclude is false.
4. For L5 products (item-level pricing): items array must contain valid blibliSku, pickupPointCode, and discountedPrice when exclude is false.

Expectation

1. Configure discounted prices for products and their variants in a promo.
2. Support both L3 (product-level) and L5 (item-level) pricing strategies.
3. Include or exclude specific products/items from promotional pricing.
4. Batch update multiple products and their items in a single request.
5. Changes are processed asynchronously in the integrated promo system.

Validation

1. This API can only be accessed by active Seller.
2. Products list cannot be empty.
3. Each product SKU cannot be blank.
4. When exclude is false for L3 products: discountedPrice is required and must be greater than 0.
5. When exclude is false for L5 items: blibliSku, pickupPointCode, and discountedPrice are required.
6. Mixed inclusion/exclusion is supported within the same request.

Limitation

Standard rate limits apply per promo code.

API raw string
PUT\n99914b932bd37a50b983c5e7c90ae93b\napplication/json\nWed May 06 17:15:00 WIB 2026\n/seller/v1/promos/purchase-deals/{promoCode}/products/discounted

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| promo-code | string | PCD-10000000326 | Yes | This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
