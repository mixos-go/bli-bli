---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: rejectedProductListByMerchantSkuV2
url: "https://seller-api.blibli.com/docs/services/66/operations/rejectedProductListByMerchantSkuV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:42"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 439
reading_time: 2 min
---



# Rejected Product List by merchantSku V2

### Overview

API Version

GETCopy

This API is expected to become obsolete by April 2023, so we recommend that you use **GET Product Detail V2** for the subtitution. As a result, this API will no longer be available after April 2023.

Requirement

Require `merchantSku` as parameter field to produce the response.

Expectation

Give you detail information about rejected product for specific `merchantSku`

Limitation

5 requests per hour per Seller SKU. The identifier is using merchantSku field on the parameter.

This API will give you a list of rejected product by merchantSku that have just been created, please refer to Create Product Flow to see the complete flow.

Rejected product list can be accessed through the Rejected Product link:

![image](https://www.static-src.com/siva/asset//09_2022/SI-RejectedProd.png)

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v2/product/rejectedProductByMerchantSku

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
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| merchantSku | string | Phone-AA-RA-789-1-2 | Yes | Parameter field that contains a unique value of merchantSku |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
