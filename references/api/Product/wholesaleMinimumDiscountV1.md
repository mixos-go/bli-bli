---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: wholesaleMinimumDiscountV1
url: "https://seller-api.blibli.com/docs/services/66/operations/wholesaleMinimumDiscountV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 457
reading_time: 2 min
---



# Wholesale Minimum Discount V1

### Overview

API Version

GETCopy

Requirement

1. Require the deepest level of `categoryCode`
2. This API need to be obtained before Create , Revise , or Update a product. Make sure the wholesale value applied correctly based on the existing threshold, otherwise system will return a warning message.

Expectation

There are 2 possible responses when requesting this API. User will get the current minimum discount by quantity OR minimum discount by sale price, depends on the sent category code that used on field parameter.

Validation

There are 3 important variables such as Quantity, Price, and Discount that should be considered.

1. If the valid threshold for Discount by Quantity:
2. If the valid threshold for Discount by Sale Price:

Limitation

Limited to 10 requests per day per Category Code

This API will help you to create product, please refer to [Create Product Flow](https://blib.li/api-flow-create-product) to see the complete flow.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/wholesale/PH-00003/minimum-discounts

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
| category-code | string | PH-00003 | Yes | Category Code |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
