---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Obsolete API
api_name: productSubmissionListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/productSubmissionListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:44"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 475
reading_time: 2 min
---



# Product Submission List V1

### Overview

API Version

POSTCopy

This API is expected to become obsolete by April 2023, so we recommend that you use POST Product List V3 for the subtitution. As a result, this API will no longer be available after April 2023.

Expectation

1. Give you product list according to the State value, whether it is ALL, IN_PROGRESS, or NEED_CORRECTION.
2. For Postlive product that has been activated, there is a possibility for the product to be temporarily inactive if the product state is changed into NEED_CORRECTION after it is reviewed by the Blibli internal team.

This API will help you to track the progress of the product you have just created until it is live on Blibli, please refer to Create Product Flow to see the complete flow.

Through site, all the Product submission list stored in In Process menu under Product:

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/product-submissions/filter

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
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
