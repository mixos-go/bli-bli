---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Product Submission
api_name: product_submission_rejected
url: "https://seller-api.blibli.com/docs/services/79/operations/product_submission_rejected"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 255
reading_time: 1 min
---



# Product Submission Rejected

### Overview

API Version

POSTCopy

Trigger

Once there is any product that got rejected along with the reason why does the product is rejected

Next action

If the product is rejected, it means Seller will need to create a new product and pay attention to the reason why the product got rejected so that Seller will not create the product with the same way as before. The reason your product is Rejected could be caused by improper information, or your postlive status is not activated yet.

To see more information about postlive product status, you can refer to the Create Product Flow page.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
