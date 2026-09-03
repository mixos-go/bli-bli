---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: rejectedProductListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/rejectedProductListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:42"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 426
reading_time: 2 min
---



# Rejected Product List V1

### Overview

API Version

GETCopy

Since this API is deprecated, please use the **Product List V3** API to get the rejected product list by using the filter in the request body.

Expectation

Give you list of rejected products with its detail information such as Rejected Reason and Date, and other information too.

Limitation

10 requests per day per store code

This API will give you a list of rejected product that have just been created, please refer to Create Product Flow to see the complete flow.

Rejected product list can be accessed through the Rejected Product link:

![image](https://www.static-src.com/siva/asset//09_2022/SI-RejectedProd.png)

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/rejectedProduct

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
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
| page | number | 0 | No | Filter for response page number, not mandatory with default value = 0 |  |
| size | number | 10 | No | Filter for response size, not mandatory with default value = 10. Max size value is 100. |  |
