---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: reviseProductSubmissionV2
url: "https://seller-api.blibli.com/docs/services/66/operations/reviseProductSubmissionV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:31"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 957
reading_time: 4 min
---



# Revise Product Submission V2

### Overview

API Version

POSTCopy

Requirement

1. Require a valid `product SKU` in the path parameter
2. Get the product code using POST Product List V3 .
3. Require product with status NEED_CORRECTION
4. If Seller revise the video URL with invalid value, then its value will become a blank string after submit. The blank string value of video URL will appeared when trying to get GET Product Detail V2 .
5. imageMap requirement If you are going to send new image, then you need to assign name and data . Please note to assign the data with your base64 image or url. If you are going to use the existing image, then you need to assign name and path only, assign path by using the image path that you got from GET Product Submission Detail V1 response. This API can be used to replace the previous images and also adding more images by sending the current images and a new one in one request. Allowed formats are jpeg/jpg/png/webp.
6. The maximum character for Unique Selling Point is 400 characters.
7. The maximum character for product description is 5000 characters.

Expectation

1. Asynchronous API. You can hit this API with high throughput. Not compatible to perform bulk data request.
2. Allow you to revise several fields
3. This API is also used to revise a product with a blurred image, an image with text, or a watermarked image.
4. If you want to save it as draft then send the submit with `false` value.
5. If you want to submit the draft revision, then get the latest data by using GET Product Submission Detail and send the submit with `true` value.
6. If you want to submit the product without editing the existing draft, you can just send the submit field with `true` value. No need to include the other product`s info.
7. If you want to revise the product and submit the product to be reviewed right away, you can send the edited field and the submit field with `true` value.
8. You can only revise attribute with variantCreation=false, specialAttribute=false and attribute type other than DEFINING_ATTRIBUTE.

Validation

1. `stock` field value should be greater or equal to 0
2. The minimum value of `minimumStock` is 1
3. The minimum value of `price` is 1
4. `salePrice` field value should be less than or equal to `price` value
5. `productType` field should be inputted with a correct value, which are 1, 2, or 3.
6. The product displayable status will always follow the status value of buyable field.
7. To make sure the value of base64 is correct, you can validate the base64 value by using Code Beautify.
8. Some sellers are not eligible to revise their BOPIS or Shipping by Seller (also known as Big Product) product.

Preorder Validation

1. It is allowed to select weekend date for preorder product
2. If the product is still not available until the committed date, then all the orders that have been made under the product will get canceled.
3. User should send the Preorder fields when revising a product that was previously created as a Preorder product, otherwise the product will become a Non-Preorder product
4. When sending Preorder fields, User should send the Preorder type with the following validations:

Limitation

- Allowed to revise up to 50 product variants
- Allowed to revise up to 50 pickup point code for each product variant
- 25 requests per minute per store code

This API will help you to revise the product that you have just created, learn more about create product flow through [Create Product Flow](https://blib.li/api-flow-create-product) page.

Next action:

Check the revised product using POST Product List V3 .

Select the product under Need Revision menu, then revise the content based on the given note:![image](https://www.static-src.com/siva/asset//09_2022/SI-ReviseProdSub.png)API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/TOK-60526-00061/revision

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
