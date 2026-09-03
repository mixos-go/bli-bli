---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: downloadShippingLabelV1
url: "https://seller-api.blibli.com/docs/services/66/operations/downloadShippingLabelV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:41"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 420
reading_time: 2 min
---



# Download Shipping Label V1

### Overview

API Version

GETCopy

This API is deprecated, so it will no longer supported. Please use **Download Shipping Label V2** instead.

Requirement

**REGULAR PRODUCT**

- Seller Delivery Type is Pickup when Package Created (PC) is True, and Status = FP or PU
- Seller Delivery Type is Dropship when Package Created (PC) is True, and Status = FP or PU or CX

**BOPIS**

- For any Seller Delivery Type (Pickup/Dropship) and Status = FP or BP

**BIG PRODUCT**

- For any Seller Delivery Type (Pickup/Dropship) when Package Created (PC) is True, and Status = FP or BP

Expectation

Returning Base64 of Shipping Label PDF document for current order item data.

Limitation

5 requests in a day per order item ID/number.

Sample of shipping label:![image](https://www.static-src.com/siva/asset/03_2023/SI_ShippingLabel_2023.png)API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/downloadShippingLabel

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
| orderItemId | number | 25000127386x | Yes | Specified order item number |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
