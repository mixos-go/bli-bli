---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: orderDetailV1
url: "https://seller-api.blibli.com/docs/services/66/operations/orderDetailV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:41"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 462
reading_time: 2 min
---



# Order Detail V1

### Overview

API Version

GETCopy

This is a deprecated API. Any information in this API is considered outdated, and we are no longer supporting this API. Please use **GET Order Detail V2** to get the most updated services.

Expectation

1. Returning order item detail for 1 SKU and 1 customer
2. If the main product has paired combo products, then the items that are listed under the comboList are the combo items that are bought by the Customer.
3. BIG Product order detail will get a virtual phone number and a unique pin code that allows the Seller to contact the Customer. This pin code is to grant access for Seller and to make sure that the one who makes the call is the authorized Seller.
4. This API can retrieve data that is up to one year old.

Limitation

5 requests in 30 minutes per order item number.

Sample of order detail:![image](https://www.static-src.com/siva/asset/03_2023/SI_OrderDetail_2023.png)
API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/orderDetail

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
| orderNo | number | 25000092160 | Yes | Specified order number |  |
| orderItemNo | number | 25000109944 | Yes | Specified order item number |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
