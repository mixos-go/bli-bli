---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: CategoryAttributesV2
url: "https://seller-api.blibli.com/docs/services/66/operations/CategoryAttributesV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 453
reading_time: 2 min
---



# Category Attributes V2

### Overview

API Version

GETCopy

Requirement

Require the deepest level of Category Code and put it on the path parameter. This code can be obtained by using [GET Category Tree V1](https://blib.li/sl-api-cat-v1).

Expectation

1. Give you a list of attribute details according to the category code on the path parameter.
2. Helps you to create a product using POST Create Product V3 by the following instruction:

Limitation

Limited to 5 requests per category code per day

This API will help you to create product using [POST Create Product V3](https://seller-api.blibli.com/docs/services/66/operations/createProductV3), please refer to [Create Product Flow](https://blib.li/api-flow-create-product) to see the complete flow.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/categories/WA-M036969/attributes

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | No | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| category-code | string | WA-M036969 | Yes | This is path parameter . The value of this category code can be obtained by requesting the GET Category Tree V1 and select the lowest level of category code. By requesting this category code then you will get the detail of this category code on the response body. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
