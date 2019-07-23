### POST shop/moto

> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/moto
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/moto
```


> Request Body: 

```json
{
  "shopLogin":"",
  "paymentType":"",
  "capture":"{separated/unified}",
  "automaticBehaviour":{
    "type":"{capture/delete}",
    "days":""
  }
}
```

Modifies the MOTO setting. 

Read more about [MOTO settings in Axerve E-commerce Solutions](<%=config[:doc_url]%>/gs/how-gestpay-works.html#moto--what-happens-after-a-transaction). 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

Request Body: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop login code.
| `paymentType` | One of the enabled payment types for your shop. A list of all payment types is [available here](#payment-type-codes). 
| `capture` | `separated` if you want to only authorize a transaction and later capture; `unified` if you want to authorize and capture at the same time. 
| `automaticBehaviour.type` | If the `capture` is set to `separated`, this field defines what happens after _X_ days:   `capture` the amount or `delete` the transaction.
| `automaticBehaviour.days` | the days after whom the transaction will be _captured_ or _deleted_, based on the previous setting. 

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
    "result":"OK",
    {
      "paymentType":"CREDITCARD",
      "capture":"unified",
      "automaticBehaviour":{
        "type":"",
        "days":""
      }
    }
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result` | `OK` ok `KO`
| `paymentType` | the payment type updated 
| `capture` | `separated` or `unified`

if `capture` is set to `separated`: 

| Field          | Description 
| -------------- | -----------
| `automaticBehaviour.type` |  `capture` or `delete`.
| `automaticBehaviour.days` | the number of days set.