---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Self Approval Service (Staging Environment Only)
api_name: BOPISSettlementCodeV1
url: "https://seller-api.blibli.com/docs/services/65/operations/BOPISSettlementCodeV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:49"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 275
reading_time: 1 min
---



# BOPIS Settlement Code Service V1

### Overview

API Version

Import API reference in this version

(You must have Postman application)

GETCopy

Requirement

1. The product type must be BOPIS.
2. The order item ID must be valid.

Expectation

This API will return a unique code to settle the BOPIS order for testing purposes.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic c2FzOm10YS1hcGktcVY0d3k3eVBMTnhHc29OZWpjbWJOeW5aVFhFTHpOSkc4OFo2eTFwbFhnUkI2Ym5uTDA= | Yes | Valid authorization value, use this value to authorize your API call. |  |
| Accept | string | application/json | Yes | Define message format which will be received by Blibli |  |
| Content-Type | string | application/json | Yes | Defines how the message format which sent on Request Body will be received by Server |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| requestId | string | 0e394d9a-62aa-4fa6-b20f-55d5b5180266 | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. Highly suggested to use unique request ID for each request API. |  |
| channelId | string | ABC-Company | Yes | MANDATORY, your company/instance name. If you are merchant aggregator fill with your company name instead of merchant/store name. |  |
| storeCode | string | TOQ-15130 | Yes | Store code. |  |
| orderItemId | string | 12116209660 | Yes | Order item ID that is expected to be processed. |  |
