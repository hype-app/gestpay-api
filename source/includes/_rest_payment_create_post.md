### POST payment/create


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/create/
```

> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/create/
```


> Example request: 

```json
{  
  "shopLogin":"",
  "amount":"",
  "currency":"",
  "shopTransactionID":"",
  "buyerName":"",
  "buyerEmail":"",
  "languageId":"",
  "customInfo":{  
    "{myCustomInfo1}":"{myCustomInfoValue1}",
    "{myCustomInfo2}":"{myCustomInfoValue2}"
  },
  "paymentChannel":{
    "channelType":["(EMAIL/QRCODE)"]
  },
  "requestToken":"",
  "clientIP":"",
  "itemType":"",
  "recurrent":"",
  "paymentType":[],
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
      "submissionReason":"",
      "beaconSessionID":"",
      "vendorID":"",
      "vendorName":"",
      "source":""
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
      "verifiedEmail":"false",
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
    "productDetails":[{  
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
    }],
    "discountCodes":[{  
      "Amount":"",
      "Code":""
    }],
    "shippingLines":[{  
      "Price":"",
      "Title":"",
      "Code":""
    }]
  }
}
```

Settle fully or partially an authorized transaction.

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Input Body: 

| Field               | Description             
| ------------------- | ----------------------- 
| `shopLogin`         | Your shop login         
| `amount`            | The amount to capture
| `currency`          | [ISO currency code](#currency-codes)
| `shopTransactionID` | the shop transaction ID 
| `buyerName`       | buyer’s name 
| `buyerEmail`      |  buyer’s e-mail address. 
| `customInfo`      | An object containing optional customised parameters. Use the `customInfo` parameter name as the key. 
| `paymentChannel`  | The payment channel for this payment. Can be `EMAIL` or `QRCODE`.
| `requestToken`    | `MASKEDPAN` for a Standard Token; any other value for Custom Token.
| `languageId`      | language to use for e-mails to the buyer 
| `clientIP`        | For PayPal Billing Agreements it is required only in "one click" mode transaction. <br> For AMEX transaction not in Euro, in this field the merchant could provide the client IP address to activate the Enhanced Authorization AAV.<br>**Mandatory if you use Gestpay Guaranteed Payment with S2S.** 
| `itemType`     | Item Category: `digital`/`physical` (If `physical` the `ShippingDetails` have to be filled)  
| `recurrent` | `True` if it's a recurrent payment, `False` if not.
| `shippingDetails` | contains the shipping address. Used for [paypal seller protection](<%= config[:doc_url] %>/oth/paypal.html).
| [`OrderDetails`](#orderdetails) | contains every other info needed to handle the payment. It is used by  Gestpay Guaranteed Payment. 

- children of `ShippingDetails` :

|               |           |          |       | 
| ------------- | --------- | -------- |------ |
| `shipToName` | shipping name 
| `shipToStreet` | shipping address 
| `shipToState` | shipping state (see [Paypal State Codes](#paypal-state-amp-province-codes) table) 
| `shipToCountryCode` | shipping country code (see [Paypal Country Codes](#paypal-country-codes) table) 
| `shipToZip` | the shipping Zip 
| `shipToStreet2` | an additional field for the shipping  address 

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
    "paymentToken":"Asjdlfad5543AA33a",
    "paymentID":"0000000001",
    "userRedirect": {
      "href": ""
    }
  }
}
```


See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.


`payload` details:

| Field | Description | 
| ----- | ----------- | 
| `paymentToken`   | A token related to this transaction. 
| `paymentID` | The ID of this transaction, assigned by Gestpay. 
| `userRedirect.href` | The address to whom redirect the user.