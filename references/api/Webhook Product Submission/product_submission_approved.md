---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Product Submission
api_name: product_submission_approved
url: "https://seller-api.blibli.com/docs/services/79/operations/product_submission_approved"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 207
reading_time: 1 min
---



# Product Submission Approved

### Overview

API Version

POSTCopy

Trigger

Once the newly created product has been successfully Approved and ready to be displayed in blibli.com.

Postlive status will be activated once the Seller information is successfully reviewed and approved by Blibli Internal Team, further information about postlive can also be accessed through the Create Product Flow page .

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
