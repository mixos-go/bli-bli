---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Settlement
api_name: downloadSettlementV1
url: "https://seller-api.blibli.com/docs/services/66/operations/downloadSettlementV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:40"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 387
reading_time: 1 min
---



# Download Settlement V1

### Overview

API Version

GETCopy

Requirement

Require settlementId that could be obtained from POST Settlement List V1 API.

Expectation

Encoded excel file that contains the settlement detail of the requested settlementId. The response will be in base64 format, which then need to be decoded to make it readable.

Limitation

5 requests per Settlement ID per day.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/download

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
| settlementId | string | da192ae9-c780-4856-b9ea-1d5161bfc160 | Yes | Unique settlement ID that's requested to be downloaded by putting it on path variable. This value can be obtained by using GET Settlement List API. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
