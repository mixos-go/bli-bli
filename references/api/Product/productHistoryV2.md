---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: productHistoryV2
url: "https://seller-api.blibli.com/docs/services/66/operations/productHistoryV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 452
reading_time: 2 min
---



# Product History V2

### Overview

API Version

POSTCopy

Requirement

Require a valid Product SKU.

Expectation

This API gives you historical details about every update that has been made to the product with various available filter parameter.

1. If the `moreThanOneMonthAgo` is false , then you will get all the update history in the last 30 days.
2. If the `moreThanOneMonthAgo` is true , then you will get all the update history for all the variant of the specified product in the last one year, either you send the blibliSku or not.
3. If the `moreThanOneMonthAgo` is true , but you input the date.start and date.end less than one month before the current date, then the system will return an error.

Limitation

25 requests per product SKU per minute

Sample of product history:![image](https://www.static-src.com/siva/asset/03_2023/SI_ProductHistory_2023.png)
API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOQ-15126-00411/histories/filter

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
| product-sku | string | TOK-60526-00061 | Yes | Path variable of Product SKU. A unique code that used to identify a Blibli product level 3. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
