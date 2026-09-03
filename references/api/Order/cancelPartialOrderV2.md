---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: cancelPartialOrderV2
url: "https://seller-api.blibli.com/docs/services/66/operations/cancelPartialOrderV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:34"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 508
reading_time: 2 min
---



# Cancel and Partial Cancel  Order V2

### Overview

API Version

POSTCopy

Requirement

- Fetch the reason list by using the GET Order Cancellation Reason V1 API .
- In order to cancel the order partially, the sellers can use other reason than the reasons listed from GET Order Cancellation Reason V1 API in the reason field and input the quantity that is expected to be cancelled. Then the sellers should fulfill the rest of quantity that need to be fulfilled.

Expectation

- Cancel the specific order item ID. Any requests that are sent with a reason from the GET Order Cancellation Reason V1 API will fully cancel the order item.
- Cancel order partially by inputting the cancellation quantity of the order item that is wished to be cancelled.

Validation

- If the reason used is present in reasons that are returned from the GET Order Cancellation Reason V1 API , then the cancellationQuantity value will be ignored and the order will be cancelled.
- The reason used is case sensitive. If the reason is not inputted as it as on the response body of GET Order Cancellation Reason V1 API , then the system will treat it as `other` reason.

API raw string:
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/items/25000025943/cancellations

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
| order-item-id | string | 25000025999 | Yes | Order item number (ID) |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
