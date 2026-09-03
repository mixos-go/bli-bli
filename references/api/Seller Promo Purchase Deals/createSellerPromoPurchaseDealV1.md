---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Promo Purchase Deals
api_name: createSellerPromoPurchaseDealV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createSellerPromoPurchaseDealV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:38"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 454
reading_time: 2 min
---



# Create Purchase Deals Promo V1

### Overview

API Version

POSTCopy

Expectation

1. Create a Purchase Deal Promo.
2. Main products and discounted products can be added after promo is created.

Validation

1. Maximum of 20 discounted products can be added.
2. Start time must be at least 5 minutes after current time.
3. End time must be at least 1 hour after start time.
4. Products added to the promotion can't clash with other promotion with the same period.

Limitation

10 requests per hour per store code.

**Next action:**

1. If allMainProducts is set to false, need to add main products using Upsert Seller Promo Purchase Deal Main Products V1 API .
2. Add discounted products using Upsert Purchase Deals Discounted Products V1 API .

API raw string
POST\n99914b932bd37a50b983c5e7c90ae93b\napplication/json\nFri Apr 24 15:08:22 WIB 2026\n/seller/v1/promos/purchase-deals

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
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
