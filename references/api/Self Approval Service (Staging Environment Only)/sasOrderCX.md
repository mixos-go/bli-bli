---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Self Approval Service (Staging Environment Only)
api_name: sasOrderCX
url: "https://seller-api.blibli.com/docs/services/65/operations/sasOrderCX"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:49"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 233
reading_time: 1 min
---



# Order to CX

### Overview

API Version

Import API reference in this version

(You must have Postman application)

PUTCopy

Requirement

- Order number which will be configured to CX (in delivery) status.
- The order logistic should be JNE Regular. You can set the order logistic to be JNE Regular by using the SAS - Change Shipping V1 API.

Expectation

The order status will updated to CX (in delivery) for testing purposes.

Validation

1. Order status must be PU.
2. The order should have an airway bill.

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
| orderItemId | string | 12116209660 | Yes | Order item ID that is expected to be processed. |  |
