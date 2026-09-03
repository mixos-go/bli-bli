---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: orderListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/orderListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:42"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 546
reading_time: 2 min
---



# Order List V1

### Overview

API Version

GETCopy

This is a deprecated API, currently we are not supporting this API anymore. Please use **POST Order List V2** instead.

Expectation

1. Give you response a list of Order items. Each list contain 1 SKU which bought by 1 Customer
2. Date Range Filter Now order list can be filtered using date range of status FP updated date (based on the date when the order was verified and ready to be processed by Seller), by specifying date range params: `filterDateStart` and `filterDateEnd`
3. ORDER-BY and SORT-BY
4. You can filter the response according to the assigned value using field parameter filterOrderTypes. If you assigned a value to filterOrderType on parameter field, then you will get specific list of order based on the assigned value. If you did not assigned any value, then you will receive the response with all the existing order types.
5. This API can retrieve data that is up to one year old.

Limitation

100 requests in 30 minutes per Business Partner Code (Store code).

We have already provide the new POST Order List V2 API that will give you list of orders that gropued by the package level.

All the order that has successfully created can be accessed through **Order** menu or through the following link:
[Order List](https://seller.blibli.com/MTA/order/summary)
![image](https://www.static-src.com/siva/asset/03_2023/SI_OrderList_2023.png)
API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/orderList

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
| productTypeCode | number | 1 | No | OPTIONAL. 1: Regular / 2: Big Product / 3: BOPIS. Filter result by product handling type |  |
