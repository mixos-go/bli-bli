---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: createProductV2
url: "https://seller-api.blibli.com/docs/services/66/operations/createProductV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 938
reading_time: 4 min
---



# Create Product V2

### Overview

API Version

POSTCopy

This API is deprecated, so it will no longer supported. Please use **Create Product V3** instead.

Requirement

1. Send correct attributes with selected Product Category, since every category has different attributes
2. Image requirement:
3. Color attribute values should be mapped with correct family color on each product items
4. Family color values should be included in productDefiningAttributes
5. The maximum character for Unique Selling Point is 400 characters.
6. The maximum character for product description is 5000 characters.

Expectation

1. Able to create a product, along with its image and detail information.
2. variantCreation field information. There is a flag for attribute named variantCreation . The purpose is to create one unique variant for each product items (It has the same behavior with defining attributes). The flag of variantCreation can be known by hitting the GET Category Attribute List V1 a. variantCreation attribute values are allowed to be inputted with free text. variantCreation attribute values must be included in productDefiningAttribute Currently it can only be found for color attribute (Color attribute type is now descriptive attribute)
3. The product displayable status will always follow the status value of buyable field.
4. If there is found any blurred image, image with text, or watermarked image then the system will directly set the product to be reviewed by Blibli internal team and the status will be changed to be `Need Correction`. You can check the revision note of the related product by using POST Product Submission List V1 and GET Product Submission Detail V1 . The product status updates will always notify your system if you have already subscribed to Product Submission - Need Correction webhook event.

Validation

1. Seller should input the productType with correct value, either it is 1/2/3. If the seller input other than those number, then the system will set the productType as `1`.
2. The image can be embedded using Base64 or URL Path. Make sure the link is available for public to access, and should use "https://" (see request body sample)
3. The Image format must be .jpg, .jpeg, .png, .webp.
4. For the image value, remove the Base64 prefix for “data:image/jpeg;base64,”
5. Max 8 images per variant. Larger than that will cause the API to return an error.
6. Image guidelines: Image is allowed to use white or other colors/thematic backgrounds, but still focus on products. Maximum image size is 4 MB with a minimum dimension of 600x600 pixels (we recommend 1200x1200 pixels) and at least 72 dpi resolution. We recommend the use of 1:1 ratio image for the best result. Image are allowed to use watermarks according to the regulation applied: Store name Product attributes USP Bonus Background Multiple images Does not contain: Phone number Personal email Personal address Social media account COD sign

Limitation

25 requests per minute per store code.

**Next action:**

1. Check the newly created product queue progress using GET Queue List V1 API to see the status. If the status is FINISHED, then it means your newly created product has been passed the queue. If the status is IN-PROGRESS, then it means your newly created product still waiting to get into the queue (isSuccess = false).
2. Check the product queue progress using GET Queue Detail V1 API to see the progress of your newly created product.
3. After the product has passed the queue, you will need to check using Product Submission List V1 API to see whether the product has been Approved/Need correction/Rejected .
4. Then hit the Product Submission Detail V1 API if you want to see the submission status of one specified product.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v2/product/createProduct

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
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
