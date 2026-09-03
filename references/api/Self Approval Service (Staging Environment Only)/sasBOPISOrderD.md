---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Self Approval Service (Staging Environment Only)
api_name: sasBOPISOrderD
url: "https://seller-api.blibli.com/docs/services/65/operations/sasBOPISOrderD"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:48"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 208
reading_time: 1 min
---



# BOPIS Order to D

### Overview

API Version

Import API reference in this version

(You must have Postman application)

PUTCopy

Requirement

- Order number which will be configured to D (Delivered) status.
- Order should have airway bill number.

Expectation

This SAS API is to update BOPIS order status to D (Delivered) for testing purposes.

Validation

1. Order status must be PU/CX.

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
