### GET payment/methods


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/methods/{paymentID}/{languageID}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/methods/{paymentID}/{languageID}
```


Retrieves the list of the enabled and visible payment methods. For each method provides: 
- Method name
- Logo url (.svg +.png) for Desktop and Mobile version
- PaymentType 
- PaymentTypeDetail required (`TRUE` / `FALSE`)

Before calling this method, you MUST have already called [POST payment/create](#post-payment-create). 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `paymentToken` | `paymentToken: "{paymentToken}"` | The payment token returned by [payment/create](##post-payment-create-beta) |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`paymentID`** | The payment identifier. | 
| **`languageID`** | The chosen language for this payment. See the [language codes](#language-codes) table.

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload": {  
    "paymentMethod":[  
      {  
        "name":"PayPal",
        "logo":{  
          "large":"https://{domain}/logos/PayPal_Large.png",
          "mobile":"https://{domain}/logos/PayPal_mobile.png",
          "vector":"https://{domain}/logos/PayPal.svg"
        },
        "paymentType":"PAYPAL",
        "paymentTypeDetail":{  
          "href":""
        },
        "userRedirect":{  
          "href":"https://ecomm.sella.it/pagam/pagam.aspx?a=yourshoplogin&b=somePaymentToken&paymentType=PAYPAL"
        }
      },
      {  
        "name":"VisaVbv",
        "logo":{  
          "large":"https://{domain}/logos/VisaVbv_Large.png",
          "mobile":"https://{domain}/logos/VisaVbv_mobile.png",
          "vector":"https://{domain}/logos/VisaVbv.svg"
        },
        "paymentType":"CreditCard",
        "paymentTypeDetail":{  
          "href":""
        },
        "userRedirect":{  
          "href":""
        }
      },
      {  
        "name":"MyBank",
        "logo":{  
          "large":"https://{domain}/logos/MyBank_Large.png",
          "mobile":"https://{domain}/logos/MyBank_mobile.png",
          "vector":"https://{domain}/logos/MyBank.svg"
        },
        "paymentType":"MyBank",
        "paymentTypeDetail":{  
          "href":"/payment/method/detail/MyBank/{shopLogin}"
        },
        "userRedirect":{  
          "href":""
        }
      }
    ],
    "paymentID":"111214124"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `paymentMethod` | an array of payment methods. See next table.
| `paymentID` | The payment ID.


Children of `paymentMethod`: 

| Field          | Description 
| -------------- | -----------
| `name` | The payment method 
| `logo` | Logos for the payment method: desktop, mobile, vectorial are available.
| `paymentType` | The corresponding payment type for this payment method 
| `paymentTypeDetail.href` | An url that points to more details for the current payment method. Empty if not applicable.
| `userRedirect.href` | The URL to redirect the user to pay with this payment method. Empty if not applicable.
