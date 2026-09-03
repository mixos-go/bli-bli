---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: addImageActiveProductV1
url: "https://seller-api.blibli.com/docs/services/66/operations/addImageActiveProductV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:31"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 645
reading_time: 3 min
---



# Add Image to Active Product V1

### Overview

API Version

POSTCopy

Requirement

1. Require a valid `Product SKU` code on the path parameter.
2. Max 8 images per variant.
3. Allowed to use white or other colors/thematic backgrounds, but still focus on products.
4. Max size 4MB with minimum 600x600 pixels dimensions (recommendations 1200x1200 pixels) and 72 dpi resolution.
5. Image are allowed to use watermarks according to the regulation applied.
6. We recommend uploading a 1:1 ratio image for the best result.
7. If any image is uploaded in a variant, it will not be copied again.
8. Should be using an image link (using https) or base64 format.
9. Allowed image types are .jpg, .jpeg, .png, .webp.
10. Learn more about the image guideline .

Expectation

Common image: The image that added to all variants Main image: Product thumbnail

These are several expectation based on the following cases:

1. If you send data and variants, then the image will be added to the specified blibliSku.
2. If you send data and allVariants, then the image will be added and applied as a common image.

These are the several behaviors of the mainImage field:

- allVariants.mainImage: true variants.mainImage: false (of one specific blibliSku) Result: The image will be applied as product thumbnail to all variants except the specified blibliSku
- allVariants.mainImage: true variants.mainImage: true (of one specific blibliSku) Result: The image will be applied as thumbnail to all variants
- allVariants.mainImage: false variants.mainImage: true (of one specific blibliSku) Result: The image will only be applied as product thumbnail to the specified variant.
- allVariants.mainImage: false variants.mainImage: false (of one specific blibliSku) Result: The image will be added to all variants (common image) but not as a main image (product thumbnail).

Limitation

10 requests per minute per Product SKU.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOK-60526-00061/images

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
  "data": "https://images.samsung.com/is/image/samsung/au-protective-standing-cover-for-galaxy-s9-ef-rg960cbegww-frontblack-93145715?$PD_GALLERY_L_JPG.png",
  "variants": [
    {
      "blibliSku": "TOQ-15130-00001-00001",
      "mainImage": true
    }
  ],
  "allVariants": {
    "mainImage": true
  }
}
```

Click to expand
