---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: orderDetailV2
url: "https://seller-api.blibli.com/docs/services/66/operations/orderDetailV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 645
reading_time: 3 min
---



# Order Detail V2

### Overview

API Version

GETCopy

Requirement

- Required a valid order item number or ID on the path parameter.

Expectation

1. Give you order information with more detail than the first version.
2. In the response body of this API, we also provide the adjustment information of the order item that was input on the path parameter.
3. All the fields on the sample response body on this documentation may not be appeared. We only send you the fields that relates to the activity of the related order item ID on the path parameter.
4. content.amount.shipping.cost will always be `0` for all the Regular Pickup , Regular Dropship Cashless , and BOPIS type of order, since the shipping cost will be handled by Blibli
5. content.amount.shipping.cost will return a value other than `0` for all the Regular Dropship with cashlessHandover is `false` and Big Product type of order.
6. The order item quantity could be 0 either it is because the seller cancel this order item or there is a request from customer to cancel.
7. This API can retrieve data that is up to one year old.
8. When an order includes a product with a free gift and a voucher is applied, the price of the free gift becomes negative

This API also provide the finance settlement in the API response. The sellers are allowed to get the finance settlement that always available at the end of period and after the settlement process has been finished in Blibli’s system. There are two types of settlement period:

- Daily: This finance settlement will be available in every working day (Mon-Fri). This only applied for Indonesian seller
- Biweekly: This one will be available in every two weeks of working days. Only applied for International seller

![image](https://www.static-src.com/siva/asset/05_2025/Settlement_Timeline.png)

Validation

If there is any warning message appeared, please note the mentioned field on the warning message and report to Blibli Seller API support.

Limitation

5 requests in 30 minutes per order item number.

Order detail page reference:

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/items/25000134053

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
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
