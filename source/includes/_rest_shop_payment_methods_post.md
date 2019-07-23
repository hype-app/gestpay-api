### POST shop/paymentMethods


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/methods/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/methods/
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
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

request body details: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| `paymentType` | One of the [payment types](#payment-type-codes) supported by Axerve E-commerce Solutions. 
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

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

The response contains the language set for Axerve E-commerce Solutions. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result`       | The outcome of the operation: `OK` of `KO`
| `paymentType`  | The payment type selected
| `paymentPage`  | The value set for the payment page: `visible` or `hidden`
