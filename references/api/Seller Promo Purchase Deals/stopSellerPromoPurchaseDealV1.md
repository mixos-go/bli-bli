---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Promo Purchase Deals
api_name: stopSellerPromoPurchaseDealV1
url: "https://seller-api.blibli.com/docs/services/66/operations/stopSellerPromoPurchaseDealV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:38"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 401
reading_time: 2 min
---



# Stop Purchase Deals Promo V1

### Overview

API Version

PUTCopy

Requirement

1. Requires a valid purchase deal promo code on the path parameter.
2. Requires a purchase deal promo with status ACTIVE or PENDING.

Expectation

1. Stop the specified purchase deal promo.

Validation

1. This API can only be accessed by active Seller.
2. If the status on inputted promo code is EXPIRED, then system will return you an error.

API raw string

PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/purchase-deals/PCD-10000000001/stop

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
