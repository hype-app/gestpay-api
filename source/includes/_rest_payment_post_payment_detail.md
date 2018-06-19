### POST payment/detail

> Complete URL:

```
POST /api/{version}/payment/detail/
```

> Example request: 

```json
{
  "shopLogin" : "",
  "bankTransactionID": "",
  "shopTransactionID" : "",
  "paymentID":"",
  "terminalID":""
}
```

Retrieves the details of a payment. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |  |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


Input Body: 

| Field | Description | Example |
| ----- | ----------- | ------- | undefined |undefined |undefined |undefined |undefined |undefined ||
| `shopLogin`         | Your shop login         | `GESPAY12345` |
| `bankTransactionID` | The bank transaction ID | `1111`        |
| `shopTransactionID` | the shop transaction ID | `MyShop_001`  |
| `paymentID`         | The payment ID          | `1638523579`  |  |
| `terminalID`        | The terminal ID         | ?????         |

#### Response 

> Response for the success case:

```json
{  
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload":{  
      "transactionType":"detail",
      "transactionREsult":"OK",
      "transactionState":"MOV",
      "bankTransactionID":"11111",
      "shopTransactionID":"myShopTransactionID",
      "authorizationCode":"0010202",
      "paymentID":"00000000001",
      "currency":"EUR",
      "country":"ITALIA",
      "company":"MASTERCARD SECURECODE",
      "tdLevel":"FULL",
      "events":[  
         {  
            "eventtype":"AUT",
            "eventamount":"0.10",
            "eventdate":"19/08/16 16:13:14",
            "environment":"ONL",
            "operator":""
         },
         {  
            "eventtype":"MOV",
            "eventamount":"0.10",
            "eventdate":"20/08/16 00:13:57",
            "environment":"BOF",
            "operator":"Sellanet"
         }
      ],
      "buyer":{  
         "name":"",
         "email":""
      },
      "risk":{  
         "riskResponseCode":"approved",
         "riskResponseDescription":""
      },
      "alertCode":"",
      "alertDescription":""
   }
}
```