---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Discount
api_name: sellerDiscountPromolistV1
url: "https://seller-api.blibli.com/docs/services/66/operations/sellerDiscountPromolistV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:36"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 446
reading_time: 2 min
---



# Seller Discount Promo List V1

### Overview

API Version

POSTCopy

Expectation

1. Give you a list of existing Seller Discount Promo that has been made by Seller.
2. The response will be adjusted according to the inputted value on filter fields.

Validation

1. This API can only be accessed by active Seller.
2. The maximum number of paging size is 25.

Limitation

40 requests per hour per store code.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/discounts/filter

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
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |

### Request Body

```
{
  "filter": {
    "blibliSkus": [
      "TOT-60526-00007-00001",
      "TOT-60526-00007-00002",
      "TOT-60526-00007-00003"
    ],
    "code": "CAMP-07486",
    "name": "Store Anniversary Promo",
    "period": {
      "end": 1616668572000,
      "start": 1616668572000
    },
    "status": "ACTIVE"
  },
  "sorting": {
    "by": "createdDate",
    "direction": "ASC"
  },
  "paging": {
    "page": 0,
    "size": 10
  }
}
```

Click to expand
