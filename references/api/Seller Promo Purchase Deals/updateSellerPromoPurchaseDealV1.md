---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Promo Purchase Deals
api_name: updateSellerPromoPurchaseDealV1
url: "https://seller-api.blibli.com/docs/services/66/operations/updateSellerPromoPurchaseDealV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:38"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 467
reading_time: 2 min
---



# Update Purchase Deals Promo Info

### Overview

API Version

PUTCopy

Requirement

Requires a valid Purchase Deal Promo Code on the path parameter.

Expectation

1. Updates an existing purchase deal promotional campaign.
2. Allows modification of promo configuration, criteria, timing, and settings.
3. All fields from the original promo can be updated through this endpoint.

Validation

1. Promo code must exist and be accessible to the merchant.
2. Seller must have permissions to modify the specified promo.
3. Field validation applies when values are provided (dates, quantities, etc.).

Limitation

1. Changes are processed synchronously and take effect immediately.
2. Existing configured products remain unless explicitly changed via upsert endpoints.

**Next action:**

1. Use filter APIs to verify promo configuration and eligible products after updates.
2. Configure discounted products using Upsert Purchase Deals Discounted Products V1 API .

API raw string
PUT\n99914b932bd37a50b983c5e7c90ae93b\napplication/json\nMon May 11 15:40:00 WIB 2026\n/seller/v1/promos/purchase-deals/{promoCode}

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
