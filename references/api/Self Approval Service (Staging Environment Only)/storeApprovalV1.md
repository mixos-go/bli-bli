---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Self Approval Service (Staging Environment Only)
api_name: storeApprovalV1
url: "https://seller-api.blibli.com/docs/services/65/operations/storeApprovalV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:49"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 299
reading_time: 1 min
---



# Store Creation Service V1

### Overview

API Version

Import API reference in this version

(You must have Postman application)

POSTCopy

Expectation

- Create and auto-approve a store in staging environment.
- The store that will be created will automatically bound to the API Client ID that being used in the authorization setup.

Validation

- The system will only allow maximum 5 stores to be bound with the related API Client ID. Otherwise, the request to create the store will return an error.
- The store name should be unique, otherwise it will return an error.
- The email store should be unique and has never been used in any store.

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
