### POST payment/update


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/update
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/update
```


> Request Body: 

```json
{
  "shopLogin":"",
  "amount":"",
  "paymentID":"",
  "shippingDetails":{
    "shipToName":"",
    "shipToStreet":"",
    "shipToState":"",
    "shipToCountryCode":"",
    "shipToZip":"",
    "shipToStreet2":""
  },
  "orderDetails":{
    "fraudPrevention":{
      "submitForReview":"",
      "orderDateTime":"",
      "orderNote":"",
      "source":"",
      "submissionReason":"",
      "beaconSessionID":"",
      "vendorID":"",
      "vendorName":""
    },
    "customerDetail":{
      "profileID":"",
      "merchantCustomerID":"",
      "firstName":"",
      "middleName":"",
      "lastname":"",
      "primaryEmail":"",
      "secondaryEmail":"",
      "homePhone":"",
      "mobilePhone":"",
      "dateOfBirth":"",
      "gender":"",
      "socialSecurityNumber":"",
      "company":"",
      "createdAtDate":"",
      "verifiedEmail":"",
      "accountType":"",
      "social":{
        "network":"",
        "publicUsername":"",
        "communityScore":"",
        "profilePicture":"",
        "email":"",
        "bio":"",
        "accountUrl":"",
        "following":"",
        "followed":"",
        "posts":"",
        "id":"",
        "authToken":"",
        "socialData":""
      }
    },
    "shippingAddress":{
      "profileID":"",
      "firstName":"",
      "middleName":"",
      "lastname":"",
      "streetName":"",
      "streetname2":"",
      "houseNumber":"",
      "houseExtention":"",
      "city":"",
      "zipCode":"",
      "state":"",
      "countryCode":"",
      "email":"",
      "primaryPhone":"",
      "secondaryPhone":"",
      "company":"",
      "stateCode":""
    },
    "billingAddress":{
      "profileID":"",
      "firstName":"",
      "middleName":"",
      "lastname":"",
      "streetName":"",
      "streetname2":"",
      "houseNumber":"",
      "houseExtention":"",
      "city":"",
      "zipCode":"",
      "state":"",
      "countryCode":"",
      "email":"",
      "primaryPhone":"",
      "secondaryPhone":"",
      "company":"",
      "stateCode":""
    },
    "productDetails":[
      {
        "productCode":"",
        "SKU":"",
        "name":"",
        "description":"",
        "quantity":"",
        "price":"",
        "unitPrice":"",
        "type":"",
        "vat":"",
        "discount":"",
        "requiresShipping":"",
        "condition":"",
        "seller":"",
        "category":"",
        "subCategory":"",
        "brand":"",
        "deliveryAt":""
      }
    ],
    "discountCodes":[
      {
        "Amount":"",
        "Code":""
      }
    ],
    "shippingLines":[
      {
        "Price":"",
        "Title":"",
        "Code":""
      }
    ]
  }
}
```

Updates a payment with new information. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. | 


Request Body: 

| Field | Description 
| -------------- | -----------
| `shopLogin` | the merchant's code 
| `amount` | the updated amount
| `paymentID` | The payment ID to update 
| `shippingDetails` | if the payment method you're using spports [`shippingDetails`](#shippingdetails), you can pass updated fields. See [`shippingDetails`](#shippingdetails) for info.
| `orderDetails` | if the payment method you're using spports [`orderDetails`](#orderdetails), you can pass updated fields. See [`orderDetails`](#orderdetails) for info.

#### Response 

> Success Response:<br>
> `200 OK`

```json
{
  "error":{  
    "code":"0",
    "description":"request correctly processed"
  },
  "payload":{
    "transactionType":"update",
    "transactionResult":"OK",
    "paymentID":"1112312421"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `transactionType` | always `update` for this operation
| `transactionResult` | `OK` ok `KO`
| `paymentID`         | The payment ID 