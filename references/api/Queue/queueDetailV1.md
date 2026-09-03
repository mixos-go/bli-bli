---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Queue
api_name: queueDetailV1
url: "https://seller-api.blibli.com/docs/services/66/operations/queueDetailV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 636
reading_time: 3 min
---



# Queue Detail V1

### Overview

API Version

GETCopy

Expectation

1. Give you the queue detail of the performed action such as create product, update product, archive/unarchive product, etc. Which under a specific store or business partner code.
2. The queue feed data will be provided by the system within the last 2 months. Which means, you will not be able to obtain the queue feed data older than 2 months.

Limitation

- 5 requests per 15 minutes per requestId.
- All the optional (not mandatory) parameter fields will be only used to retrieve the queue histories for queue that contains 26 characters of the queue ID .

This API will help you to check whether the queue process of product creation has been finished or not, please refer to Create Product Flow to see the complete flow.

Other than that, this API will also help you to check the queue process of bulk product update or product detail updates, please refer to the page [Update Bulk Product Flow](https://blib.li/api-flow-update-bulk-product) and [Update Product Detail Flow](https://blib.li/api-flow-product-detail) to learn more.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/feed/detail

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
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing queue ID that can be obtained by using Queue List API or by using value of requestId from the response body after performing Create Product, Update Product, Revise Product, Archive and Unarchive Product. Sample of 26 char queueId: 01HQHSC752CZSM5Q2AS3DDGXBZ |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
| page | number | 0 | No | This field parameter will be only used to retrieve the queue histories for queue that contains 26 characters of queue ID . Field parameter to set the response page number in queue history. This field is not mandatory. If the value is null, then the default value is 0. |  |
| size | number | 10 | No | Field parameter to set the queue histories response size. This field parameter will be only used to retrieve the queue histories for queue that contains 26 characters of queue ID . If the value is null, the system will return all the queue histories. If the value is 0, the system will return the response body without queueHistory. We recommend you to use this if you do not need the queueHistory. This will make the system send the response faster. Max size value is 100. |  |
