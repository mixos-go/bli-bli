---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: updateProductDetailByProductSkuV2
url: "https://seller-api.blibli.com/docs/services/66/operations/updateProductDetailByProductSkuV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:31"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 420
reading_time: 2 min
---



# Update Product Detail by Product SKU V2

### Overview

API Version

PUTCopy

Requirement

Requires a valid Product SKU.

Expectation

1. This API allows users to update the product detail for a specific Product SKU which can be applied to the following fields:

Validation

1. Send only the fields that are expected to be updated.
2. Only for the BOPIS product type (3), the system will always ignore the dimension value information.
3. Some sellers are not eligible to update their BOPIS or Shipping by Seller (also known as Big Product) product.

Limitation

Limited to 60 requests per minute per store.

API raw string
PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/TOQ-15126-00411/detail

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
