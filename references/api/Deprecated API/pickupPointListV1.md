---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: pickupPointListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/pickupPointListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:42"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 362
reading_time: 1 min
---



# Pickup Point List V1

### Overview

API Version

GETCopy

This API is deprecated, so it will no longer supported. Please use **Pickup Point List V2** instead.

Expectation

Give you list of existing Pickup Points

Limitation

10 requests per day per store code

This API will help you to create product, please refer to [Create Product Flow](https://blib.li/api-flow-create-product) to see the complete flow.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/getPickupPoint

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
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
| page | number | 0 | No | Filter for response page number, not mandatory with default value = 0 |  |
| size | number | 25 | No | Filter for response size, not mandatory with default value = 10. Max size value is 25. |  |
