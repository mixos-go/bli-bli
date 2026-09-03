---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: productListV3
url: "https://seller-api.blibli.com/docs/services/66/operations/productListV3"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:30"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 580
reading_time: 2 min
---



# Product List V3

### Overview

API Version

POSTCopy

Expectation

1. Give you list of product in level of main product, not by variant. If you want to see the product variant, you can use the GET Product Detail V2 .
2. If you send both productSku and productName in the request body as filter field, then only productSku is considered.
3. If you did not send the filter.state in the request body, then the system by default will return product count (paging.totalRecord) with the product which has state `ACTIVE` that are in stock , without OOS products.
4. If you send the filter.state with OOS in the request body, then the system will return ACTIVE product that out of stock .
5. So, please expect that the ACTIVE product count in Blibli Seller Center is the total product both in stock and out of stock (OOS).

Validation

1. Filter using product SKU can only be perform if the product SKU is in the state of: ACTIVE OOS ARCHIVED SUSPENDED
2. Filter using pickup point code can only be perform if the pickup point is in the state of: ACTIVE OOS ARCHIVED SUSPENDED
3. Filter using product name can only be perform if the product name is in the state of: ACTIVE OOS ARCHIVED SUSPENDED NEED_CORRECTION IN_PROGRESS
4. Filter using category code can only be perform if the category is in the state of: ACTIVE OOS ARCHIVED SUSPENDED NEED_CORRECTION IN_PROGRESS

Limitation

25 requests per minute per store code

Blibli Seller Center page reference

**API raw stringPOST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/filter**

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
