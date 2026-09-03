---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Queue
api_name: queue_feed_promo_discount_creation
url: "https://seller-api.blibli.com/docs/services/79/operations/queue_feed_promo_discount_creation"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 350
reading_time: 1 min
---



# Create Seller Discount Queue Status Changes

### Overview

API Version

POSTCopy

Trigger

This webhook will notify the user with the result after the seller discount promo queue has been processed by using Create Seller Discount Promo V1 API . The result can be either it is successfully created or it has failed with some cause of failure information.

Next action

Once this webhook is sent to your system with success result, the sellers can add more products to the promo by using Edit Seller Discount Promo V1 API .

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
  "queueId": "772045e1-38a3-42b3-a72e-15b48532fa46",
  "detail": {
    "errorCode": "ERR-PA123456",
    "errorMessage": "Unspecified Error",
    "resultFailed": {
      "name": "Discount Tahun Baru",
      "period": {
        "end": 1723934300000,
        "start": 1723932000000
      },
      "products": [
        {
          "blibliSku": "TOQ-15126-00298-00001",
          "discountPercentage": 10,
          "discountPrice": 0,
          "pickupPointCode": "PP-3003332",
          "quota": 50
        }
      ],
      "quotaType": "PRODUCT_STOCK"
    },
    "resultSuccess": {
      "code": "PROMO-127121",
      "name": "Discount Tahun Baru",
      "period": {
        "end": 1723934300000,
        "start": 1723932000000
      },
      "products": [
        {
          "blibliSku": "TOQ-15126-00298-00001",
          "discountPercentage": 10,
          "discountPrice": 0,
          "pickupPointCode": "PP-3003332",
          "quota": 50
        }
      ],
      "quotaType": "PRODUCT_STOCK"
    },
    "success": true,
    "warningMessages": [
      {
        "currentValue": "[TOT-70393-12345-12345, PP-1234567]",
        "message": "PBP outbound error, return success false but http status 200",
        "relatedField": "[products.blibliSku, products.pickupPointCode]"
      }
    ]
  },
  "timestamp": 1537149303013,
  "storeCode": "TOQ-15126"
}
```

Click to expand
