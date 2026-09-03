---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order Return
api_name: returnedOrderDetailV1
url: "https://seller-api.blibli.com/docs/services/66/operations/returnedOrderDetailV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:35"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 328
reading_time: 1 min
---



# Returned Order Detail V1

### Overview

API Version

GETCopy

Expectation

1. Give you returned Order Item Detail
2. Following roles are expected to be the one who will be responsible for the returned order cost:

Limitation

5 requests in an hour per rmaId.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/getReturnedOrderDetail

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
| rmaId | number | 5b5b0149638c4f102c53c271 | Yes | Input of returnId from Returned Order List API |  |
| orderNo | number | 25000092160 | Yes | Specified order number |  |
| orderItemNo | number | 25000109944 | Yes | Specified order item number |  |
