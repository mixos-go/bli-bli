---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: deleteImageActiveProductV1
url: "https://seller-api.blibli.com/docs/services/66/operations/deleteImageActiveProductV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 441
reading_time: 2 min
---



# Delete Image from Active Product V1

### Overview

API Version

DELETECopy

Requirement

1. Require a valid `Product SKU` codes on the path parameter.
2. Require an exist image link that you can get from the POST Product List V2 and GET Product Detail V1 .

Expectation

- This API is able to delete an image that applied on all variants or from the specific variant (Blibli SKU) based on user request in the path parameter.
- If there is a common image deleted from a specific variant, then the image will become an image variant.

Limitation

10 requests per minute per Product SKU

API raw string
DELETE\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOK-60526-00061/images

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
| product-sku | string | TOK-60526-00061 | Yes | Path variable of Product SKU. A unique code that used to identify a Blibli product level 3. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |

### Request Body

```
{
  "path": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-12053602/xiaomi_xiaomi_full03.jpg",
  "blibliSkus": [
    "TOQ-15130-00001-00001"
  ],
  "allVariants": true
}
```

Click to expand
