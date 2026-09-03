---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: settleOrderV1
url: "https://seller-api.blibli.com/docs/services/66/operations/settleOrderV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 416
reading_time: 2 min
---



# Settle Order V1

### Overview

API Version

POSTCopy

This is a deprecated API, currently we are not supporting this API anymore. Please use **POST Settle Big Product Order V2orPOST Settle BOPIS Order Order V2** instead.

Expectation

1. Synchronous API. This API is not intended to handle high throughput. Not compatible to perform bulk data request.
2. Seller are able to settle delivered order for Big Product (Handling by Seller) and BOPIS order.

Limitation

5 requests in a day per order item ID/number.

We have already provide the new POST Settle Big Product V2 API and POST Settle BOPIS Order V2 with a simpler request body and flow.

Possible request condition:

1. Settle Big Product
2. Settle BOPIS Order

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/settleOrder

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
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
