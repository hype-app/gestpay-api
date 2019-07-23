### GET payment/methods/detail


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/methods/detail/{paymentID}/{paymentType}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/methods/detail/{paymentID}/{paymentType}
```


Some payment methods need additional iformation to complete the payment process. For example, they might require to   redirect the user to a specific page. With this method you can find the additional informations required.  
 
Before calling this method, you MUST have already called [POST payment/create](#post-payment-create). 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| [`paymentToken`](#payment-token) | `{paymentToken}` | The payment token. |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`paymentID`** | The payment identifier | 
| **`paymentType`** | The payment type | 

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
    "paymentTypeDetail":{  
      "bank":[  
        {  
          "bankCode":"001",
          "bankName":"E-Corp",
          "userRedirect":{  
            "href":"https://ecomm.sella.it/pagam/pagam.aspx?a=yourshoplogin&b=somePaymentToken&paymentType=thePaymentType&payment"
          }
        },
        {  
          "bankCode":"002",
          "bankName":"F-Corp",
          "userRedirect":{  
            "href":"https://ecomm.sella.it/pagam/pagam.aspx?a=yourshoplogin&b=somePaymentToken&paymentType=thePaymentType&payment"
          }
        }
      ]
    },
    "paymentID":"11232131242314"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `paymentTypeDetail.bank` | An array containing informations about specific banks for this payment method. See next table
| `paymentTypeDetail.paymentID` | the payment ID 

Details for `bank` array: 

| Field          | Description 
| -------------- | -----------
| `bankCode` | A code that identifies the bank
| `bankName` | The bank Name, useful to show the bank name to the user
| `userRedirect.href` | The url to redirect the user to pay with the chosen bank  