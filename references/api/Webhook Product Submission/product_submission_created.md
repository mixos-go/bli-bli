---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Product Submission
api_name: product_submission_created
url: "https://seller-api.blibli.com/docs/services/79/operations/product_submission_created"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 282
reading_time: 1 min
---



# Product Submission Created

### Overview

API Version

POSTCopy

Trigger

Once the product and all of its items have been successfully created, passed the queue process, and are being reviewed by the internal team.

If the newly created product is live on blibli.com straight away, it means the product is a postlive product (postlive flag true) and the seller can continue to sell the product right after the product has been created. Further information about postlive can also be accessed through the Create Product Flow link.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |

### Request Body

```
{
  "product": {
    "brand": "Samsung",
    "productCode": "MTA-0309773",
    "productItems": [
      {
        "blibliSku": "TOQ-15126-00298-00001",
        "generatedItemName": "Samsung S20 Black",
        "productItemCode": "MTA-0312859-00001",
        "sellerSku": "SAMS-SKU-01",
        "upcCode": 1180821185559617
      }
    ],
    "productName": "Samsung S20",
    "productSku": "TOQ-15126-00411"
  },
  "flags": {
    "postLive": false
  },
  "timestamp": 1537149303013,
  "storeCode": "TOQ-15126"
}
```

Click to expand
