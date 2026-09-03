---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: updateProductVariantV1
url: "https://seller-api.blibli.com/docs/services/66/operations/updateProductVariantV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:31"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 550
reading_time: 2 min
---



# Update Product Variant V1

### Overview

API Version

POSTCopy

Requirement

1. In order to apply the product variant into multiple pickup points, you will need to check whether the store is eligible to do so or not by using the Store Information Detail V1 API.
2. When updating product variant, user need to send all the existing product variant combination along with the updated one. This API will replace all the existing record with the list that sent in the request body.

Expectation

This API is not intended for price or stock updates. For routine price or stock adjustments, please refer to Update Bulk Product flow to update those fields. Sending price and stock field in the request body will be ignored by the system, unless the user wants to add a new product variant.

1. Add product variant - new attribute
2. Add product variant - new attribute value
3. Add image to product variant
4. Add product variant specific Pickup Point
5. Delete a specific product variant Pickup Point

Click here to learn more about the expectation of this API.

Validation

The wholesale value must be inputted by the seller if they wish to add another product variant ( attribute or attribute value ), or add another pickup point and anticipate applying the wholesale price (wholesalePriceActivated: true) to it.

Limitation

10 requests in 30 minutes per Product SKU.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOQ-15126-00411/variants

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
