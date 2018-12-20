### POST shop/paymentMethods


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/paymentMethods/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/paymentMethods/
```


> Request body: 

```json
{  
  "shopLogin":"",
  "paymentType":"{paymentType}",
  "paymentPage":"{visible/hidden}"
}
```

 Allows to show/hide the payment method on payment page.


#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

request body details: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| `paymentType` | One of the [payment types](#payment-type-codes) supported by Gestpay. 
| `paymentPage` | set to `visible` to show the payment type on the payment page; `hidden` to hide.

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
    "result":"OK",
    "paymentType":"CREDITCARD",
    "paymentPage":"visible"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

The response contains the language set for Gestpay. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result`       | The outcome of the operation: `OK` of `KO`
| `paymentType`  | The payment type selected
| `paymentPage`  | The value set for the payment page: `visible` or `hidden`