---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Blibli Promo
api_name: productListBlibliPromoV1
url: "https://seller-api.blibli.com/docs/services/66/operations/productListBlibliPromoV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:35"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 467
reading_time: 2 min
---



# Product List of Blibli Promo V1

### Overview

API Version

POSTCopy

Requirement

1. Requires Promo Code on the path parameter.
2. In order to get the Promo Code, User is required to hit the GET Blibli Promo List V1 API.

Expectation

This API will give you list of one specific product or all registered products in one Blibli Promo.

Validation

- This API can only be accessed by active Seller.
- If you send a valid pickupPointCodes field, then the response will give you the specific product that assigned to the mentioned pickup point code.
- If you did not send the pickupPointCodes field, then the response will give you the product list of all pickup points.
- If you send an invalid pickupPointCodes field, then the response will give you an empty list.

Limitation

5 requests per Store Code per minute.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/blibli/CAMP-07846/products/filter

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
| promo-code | string | CAMP-07486 | Yes | This is path parameter for Promo code value. Promo Code value can be obtained by hitting GET Blibli Promo List V1 API. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
