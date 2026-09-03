---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Promo Purchase Deals
api_name: sellerPromoPurchaseDealDiscountedProductListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/sellerPromoPurchaseDealDiscountedProductListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:38"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 434
reading_time: 2 min
---



# Purchase Deals Discounted Product List V1

### Overview

API Version

GETCopy

Requirement

Requires a valid Purchase Deal Promo Code on the path parameter.

Expectation

1. Returns discounted special-price products at L3 (product level) for a purchase deal promo.
2. Provides promotional pricing context (specialPrice, salePrice range) for setup and review.
3. Returns the full list in one response without pagination.

Validation

1. Valid promo code must be provided.
2. SKU status must be valid enum value if provided.

Limitation

1. No server-side pagination; clients receive the full list in content.
2. Results depend on integrated promo services for the given promo and store.

API raw string
GET\n99914b932bd37a50b983c5e7c90ae93b\napplication/json\nWed Apr 29 15:37:00 WIB 2026\n/seller/v1/promos/purchase-deals/{promoCode}/products/discounted/filter

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
