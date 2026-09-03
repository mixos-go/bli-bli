---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Bliklan
api_name: filterSellerBliklanCampaignProductV1
url: "https://seller-api.blibli.com/docs/services/66/operations/filterSellerBliklanCampaignProductV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:36"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 374
reading_time: 1 min
---



# List of Product Performance Details

### Overview

API Version

POSTCopy

Expectation

1. Give you list of product performance details within the Bliklan campaign, based on the filter in the request body.

Validation

1. All filter fields are nullable.
2. keyword can be used to search the product by SKU or product name.

Limitation

5 requests per 30 minutes per store code.

API raw string
POST\nd41d8cd98f00b204e9800998ecf8427e\napplication/json\nTue Jul 21 10:00:00 WIB 2026\n/seller/v1/bliklan/metrics/campaigns/CEB9266-TC05-1774956988931/products

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
| campaign-id | string | CEB9266-TC05-1774956988931 | Yes | Path variable of the unique identifier of the Bliklan campaign. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
