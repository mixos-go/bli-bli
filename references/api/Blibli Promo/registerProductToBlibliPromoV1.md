---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Blibli Promo
api_name: registerProductToBlibliPromoV1
url: "https://seller-api.blibli.com/docs/services/66/operations/registerProductToBlibliPromoV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:35"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 670
reading_time: 3 min
---



# Register Product to Blibli Promo V1

### Overview

API Version

POSTCopy

Requirement

1. Requires the correct blibliSku to put on the request body, for example: TOQ-15131-00007-00001.
2. Requires Promo Code on the path parameter.
3. In order to get the Promo Code, User is required to hit the GET Blibli Promo List V1 API.
4. Requires to hit the GET Blibli Promo Detail V1 API and consider to the following fields:

Expectation

This API will set your requested blibliSku to be included in particular Blibli Promo based on the promo code on the path parameter.

Validation

1. This API can only be accessed by active Seller.
2. The quota of each item will be validated by the minimum quota of the campaign/promo. The value can be obtained from minQuota field on the response of Blibli Promo Detail API.
3. Sellers are only allowed to register their products into Blibli Promos with Promo Status equal to REGISTERED.
4. For Promo Type REGULAR, the Sellers are also able to register the product if the Blibli Promo Status is LIVE. Otherwise, the FLASH SALE type of promo only allowed to be registered when the status is REGISTERED.
5. The Product should not be archived when register into a Blibli Promo.
6. Once the final price has set, then the value will be not able to be updated during the Blibli Promo is active.
7. During the Blibli Promo is on going, the Seller can only update the regular price (using Update Product APIs). Once the Seller update the regular price, then the discount amount will be automatically adjusted and the final price will not be changed from the previous one when the product is registered.
8. If the product has only one pickup point, then the pickup point code will not be mandatory.
9. If the product has more than one pickup point, then you must send the pickup point code. Otherwise, the product will not be registered.

Limitation

1. 2 requests per Store Code per minute.
2. Maximum items that sent on each request are 25 items.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/blibli/CAMP-07846/products

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
