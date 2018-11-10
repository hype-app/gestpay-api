### GET shop/paymentMethods


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/paymentMethods/{shopLogin}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/paymentMethods/{shopLogin}
```


Retrieves a list of payment methods enabled indicating name, payment type, related logo (URL), related mobile logo (URL), if the method is visible/hidden in the payment page.

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload":{  
    "paymentMethod":[  
      {  
        "name":"VISA VBV",
        "logo":{  
          "large":"https://{domain}/logos/VisaVBV_Large.png",
          "mobile":"https://{domain}/logos/VisaVBV_mobile.png",
          "vector":"https://{domain}/logos/VisaVBV.svg"
        },
        "paymentType":"CREDITCARD",
        "paymentPage":"visible"
      },
      {  
        "name":"MASTERCARD SECURECODE",
        "logo":{  
          "large":"https://{domain}/logos/MastercardSecurecode_Large.png",
          "mobile":"https://{domain}/logos/MastercardSecurecode_mobile.png",
          "vector":"https://{domain}/logos/MastercardSecurecode.svg"
        },
        "paymentType":"CREDITCARD",
        "paymentPage":"visible"
      },
      {  
        "name":"PayPal",
        "logo":{  
          "large":"https://{domain}/logos/PayPal_Large.png",
          "mobile":"https://{domain}/logos/PayPal_mobile.png",
          "vector":"https://{domain}/logos/PayPal.svg"
        },
        "paymentType":"PAYPAL",
        "paymentPage":"visible"
      }
    ]
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

The response contains the language set for Gestpay. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `paymentMethod` | An array of payment methods 
| `paymentMethod.name` | The name of the payment method 
| `paymentMethod.logo` | Contains URLs for the payment method's logo in three formats: large, mobile, vector
| `paymentMethod.paymentType` | The [payment method code](#payment-type-codes).
| `paymentMethod.paymentPage` | returns `visibile` if the paymentType is shown on the payment page; `hidden` otherwise.

