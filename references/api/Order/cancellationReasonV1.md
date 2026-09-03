---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: cancellationReasonV1
url: "https://seller-api.blibli.com/docs/services/66/operations/cancellationReasonV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:34"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 434
reading_time: 2 min
---



# Order Cancellation Reason V1

### Overview

API Version

GETCopy

Expectation

1. Give you the list of reasons for the seller to cancel their order by using POST Cancel and Partially Cancel Order V2 API .
2. When the seller selects one of the listed reason, then the related order item quantity will be cancelled.
3. The seller is also allowed to select or input any reason other than the reasons returned from this API.
4. If the seller select one of these reasons: Out of stock, Wrong price, Wrong shipping type, Wrong weight/shipping, then the related product`s stock will be automatically turned into `0` .

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/items/cancellations/reasons

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
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
