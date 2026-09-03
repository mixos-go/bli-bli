---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Queue
api_name: queueListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/queueListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 587
reading_time: 2 min
---



# Queue List V1

### Overview

API Version

GETCopy

Expectation

1. If you have just done updating or creating a product that use an asynchronous processing method, then the operation will be put into the queue first before finally being processed.
2. This API will provide you the queue status information from the product that has just been created or updated.
3. The APIs that are using an asynchronous process are the APIs that provide you queueFeedId or queueId on the response. The value of that can be used as the parameter on this API.
4. Those APIs are: POST Create Product V2 POST Create Product V3 POST Revise Product Submission V1 POST Update Bulk Product V1 POST Update Product Item Detail V1 POST Archive Product V1 POST Unarchive Product V1
5. The queue feed data will be provided by the system within the last 2 months. Which means, you will not be able to obtain the queue feed data older than 2 months.

Limitation

360 requests per day per store code.

This API will help you to check whether the queue process of product creation has been finished or not, please refer to [Create Product Flow](https://blib.li/api-flow-create-product) to see the complete flow.

Other than that, this API will also help you to check the queue process of bulk product update or product detail updates, please refer to the page Update Bulk Product Flow and Update Product Detail Flow to learn more.

**Next Action:**
Hit [GET Queue Detail V1](https://blib.li/sl-api-queue-det-v1) to see the changes or detail information of the related action performed.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/feed/list

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
| queueDate | string | 2018-09-17 | Yes | Filter queue feed by exact date |  |
| queueAction | string | updateDetailProduct | No | Filter queue feed by queue feed action for following actions: createProduct, createProductV2, updateProduct, updateDetailProduct. |  |
| status | string | FINISHED | No | Field parameter to filter the status of queue. IN_PROGRESS means the queue ID of the related action is still waiting in the queue. FINISHED means the action is already eligible to be reviewed by the Blibli Internal Team. |  |
