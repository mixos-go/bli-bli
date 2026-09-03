---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: reviseProductSubmissionV1
url: "https://seller-api.blibli.com/docs/services/66/operations/reviseProductSubmissionV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 1244
reading_time: 6 min
---



# Revise Product Submission V1

### Overview

API Version

POSTCopy

As per 14 Feb 2023 this API is deprecated and will become obsolete in the near future. For the substitution, we currently have **POST Revise Product Submission V2**.

Requirement

1. Require `product code`
2. Get the product code using POST Product Submission List
3. Require product with status NEED_CORRECTION
4. Require complete product information as on request body sample that you can obtain using API Get Product Submission Detail response
5. If Seller revise the video URL with invalid value, then its value will become a blank string after submit. The blank string value of video URL will appeared when trying to get Product Detail or Product Submission.
6. imageMap requirement If you are going to send new image, then you need to assign name and data only, assign data with your base64 image or url. If you are going to use the existing image, then you need to assign name and path only, assign path by using the image path that you got from API Get Product Submission Detail response. Allowed formats are jpeg/jpg/png/webp.
7. The maximum character for Unique Selling Point is 400 characters.
8. The maximum character for product description is 5000 characters.
9. Here is the requirement to use the attribute that is obtained from the GET Category Attributes V2 to revise the product: If mandatory field from the GET Category Attributes V2 is true and it is variantCreating or specialAttribute, then put the value under the productItems. Otherwise, if it is not variantCreating or specialAttribute, then put the value under the nonDefiningAttributes or definingAttributes of this API. If mandatory field from the GET Category Attributes V2 is false and you decide to include the attribute to the request body of this API then the value cannot be null. If the type from the GET Category Attributes V2 is DESCRIPTIVE_ATTRIBUTE, then the option value will always be empty, it means the value can be input with free text and put it in the nonDefiningAttributes field. If the type from the GET Category Attributes V2 is PREDEFINED_ATTRIBUTE, then choose the value from options field then put it in the defining_attributes field.

Expectation

1. Asynchronous API. You can hit this API with high throughput. Not compatible to perform bulk data request.
2. Allow you to revise several fields
3. There is a flag for attribute named variantCreation. These are the facts about variantCreation attribute: a. The purpose is to create one unique variant for each product items (It has the same behavior with defining attributes) b. The flag of variantCreation can be known by hitting the Get Category Attribute List API c. variantCreation attribute values are allowed to be inputted with free text d. variantCreation attribute values should be included in productDefiningAttribute e. Currently it can only be found for color attribute (Color attribute type is now descriptive attribute)
4. This API is also used to revise a product with a blurred image, an image with text, or a watermarked image.

Validation

1. `stock` field value should be greater or equal to 0
2. `minimumStock` field value should be minimum 1
3. `price` field value should be minimum 1
4. `salePrice` field value should be less than or equal to `price` value
5. `productType` field should be inputted with a correct value, either it is 1/2/3. If the seller input other than those number, then the system will set the productType as `1`.
6. The image can be embedded using Base64 or URL Path. Make sure the link is available for public to access, and should use "https://" (see request body sample)
7. The Image format must be .jpg, .jpeg, .png, .webp.
8. For the image value, remove the Base64 prefix for “data:image/jpeg;base64,”
9. Max 8 images per variant. Larger than that will cause the API to return an error.
10. Image guidelines: Allowed to use white or other colors/thematic backgrounds, but still focus on products. Maximum image size is 4 MB with a minimum dimension of 600x600 pixels (we recommend 1200x1200 pixels) and at least 72 dpi resolution. We recommend the use of 1:1 ratio image for the best result. Image are allowed to use watermarks according to the regulation applied: Store name Product attributes USP Bonus Background Multiple images Does not contain: Phone number Personal email Personal address Social media account COD sign
11. The product displayable status will always follow the status value of buyable field.
12. To make sure the value of base64 is correct, you can validate the base64 value by using Code Beautify.

Preorder Validation

1. Only send the preOrder field if want to set the product as a preorder product. If you do not wish to set the product as preorder, then do not include this field at all.
2. It is allowed to select weekend date for preorder product
3. If the product is still not available until the committed date, then all the orders that have been made under the product will get canceled.
4. User should send the Preorder fields when revising a product that was previously created as a Preorder product, otherwise the product will become a Non-Preorder product
5. When sending Preorder fields, User should send the Preorder type with the following validations:

Limitation

25 requests per minute per store code.

This API will help you to revise the product that you have just created, learn more about create product flow through Create Product Flow page.

Next action: Allow to check the revised product using POST Product Submission List .

Select the product under Need Revision menu, then revise the content based on the given note:

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/product-submissions/MTA-0309773

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
| product-code | string | MTA-0309773 | Yes | Product code |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
