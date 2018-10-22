### GET shop/moto


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/moto/{shopLogin}
```

> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/moto/{shopLogin}
```




Returns the MOTO setting for the `shopLogin`. 

Read more about [MOTO settings in Gestpay](<%=config[:doc_url]%>/gs/how-gestpay-works.html#moto--what-happens-after-a-transaction). 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

URL parameter: 

| Parameter | Description | 
| --------- | ----------- | 
| `shopLogin` | The shop identifier. | 

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
    "moto":[
      {
        "paymentType":"CREDITCARD",
        "capture":"separated",
        "automaticBehaviour":{
          "type":"capture",
          "days":"25"
        }
      },
      {
        "paymentType":"PAYPAL",
        "capture":"unified",
        "automaticBehaviour":{
          "type":"",
          "days":""
        }
      }
    ]
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

The response can contain zero or more items in the `moto` array. 

Response `payload.moto` details:


| Field          | Description 
| -------------- | -----------
| `paymentType` | the payment type for wich a MOTO property is set 
| `capture` | `separated` or `unified`
| `automaticBehaviour.type` |  `capture` or `delete`.
| `automaticBehaviour.days` | the number of days set.