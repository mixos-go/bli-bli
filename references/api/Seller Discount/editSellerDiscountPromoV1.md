---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Discount
api_name: editSellerDiscountPromoV1
url: "https://seller-api.blibli.com/docs/services/66/operations/editSellerDiscountPromoV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:36"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 669
reading_time: 3 min
---



# Edit Seller Discount Promo V1

### Overview

API Version

PUTCopy

Expectation

1. If the current quota type is PRODUCT_STOCK, and the Seller wants to edit it to PROMO_STOCK, then all the previous registered products will be rejected and the newly added products (that come along with this request) will be added to the Seller Discount.
2. Allow Sellers to edit several fields, which means not mandatory to send all fields on the request body.
3. Allow Sellers to add more products to the seller discount promo that has just been successfully created. Instead of creating a new one with the same rule.

Validation

1. This API can only be accessed by active Seller.
2. If there is already an order in progress before Sellers edit the Seller Discount type, then the related order will follow the applied Seller Discount type.
3. This API can use to edit only PENDING Seller Discount.
4. Sellers are able to STOP the Seller Discount in all status.
5. This API is not able to stop the Seller Discount with status EXPIRED .
6. If the current Seller Discount is not having any products, then the Seller will not able to edit anything until the specified Seller Discount contained at least a product.
7. Seller should update the start date if the current date exceeds the existing start date before the Seller begin to edit the Seller Discount information or add the product (which previously was empty).
8. If the product has only one pickup point, then the pickup point code will not be mandatory.
9. If the product has more than one pickup point, then you must send the pickup point code. Otherwise, the update will be failed.

Limitation

20 requests per minute per promo code.

Further information about the Seller Discount Promo can be learned here .

API raw string
PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/discounts/MV-123456

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
| promo-code | string | CAMP-07486 | Yes | This is path parameter for Promo code value. Promo Code value can be obtained by hitting GET Blibli Promo List V1 API. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |

### Request Body

```
{
  "quotaType": "PRODUCT_STOCK",
  "period": {
    "end": 1616668572000,
    "start": 1616668572000
  },
  "stop": true,
  "name": "Store Anniversary Promo",
  "products": [
    {
      "blibliSku": "TOQ-15126-00293-00001",
      "discountPercentage": 20,
      "discountPrice": 50000,
      "pickupPointCode": "PP-3000175",
      "quota": 15
    }
  ]
}
```

Click to expand
