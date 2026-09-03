---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Self Approval Service (Staging Environment Only)
api_name: sasChangeShippingV1
url: "https://seller-api.blibli.com/docs/services/65/operations/sasChangeShippingV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:49"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 206
reading_time: 1 min
---



# Change Shipping V1

### Overview

API Version

Import API reference in this version

(You must have Postman application)

PUTCopy

Requirement

1. Order must be FP / PU / CX.
2. The order item ID in the parameter must be valid and already have a valid Package ID.

Expectation

This API will change the current logistic service to be JNE Regular.

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
