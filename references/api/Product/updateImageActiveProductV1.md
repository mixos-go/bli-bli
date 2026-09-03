---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: updateImageActiveProductV1
url: "https://seller-api.blibli.com/docs/services/66/operations/updateImageActiveProductV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:32"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 627
reading_time: 3 min
---



# Update Image for Active Product V1

### Overview

API Version

PUTCopy

Requirement

1. Require a valid `Product SKU` code on the path parameter.
2. Require an existing image link that you can get from the POST Product List V2 and GET Product Detail V1 .

Expectation

1. This API able to update the existing image to be main image, for all variant or for specific variant of a valid product SKU in the path parameter.
2. The updates will only be executed if there is new true flag set up.
3. If you send the copy field with true value, then the path image will be added to the mentioned variant, either it is allVariants or specific variants.
4. If you want to change the current main image then you can simply set the other image as main image. No need to set false value to the current main image.

These are the several behaviors of the mainImage field:

- allVariants.mainImage: true variants.mainImage: false (of one specific blibliSku) Result: The image will be applied as product thumbnail to all variants except the specified blibliSku
- allVariants.mainImage: true variants.mainImage: true (of one specific blibliSku) Result: The image will be applied as thumbnail to all variants
- allVariants.mainImage: false variants.mainImage: true (of one specific blibliSku) Result: The image will only be applied as product thumbnail to the specified variant.
- allVariants.mainImage: false variants.mainImage: false (of one specific blibliSku) Result: Nothing changed.

Validation

1. Not allowed to copy the image on path field to the existing variant itself as target, unless you want to set it as main image.
2. Not allowed to set the image as main image, if the current position is already main image, unless you want to copy for other variant and put it on the path field.

Limitation

10 requests per minute per Product SKU

API raw string
PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOK-60526-00061/images

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
