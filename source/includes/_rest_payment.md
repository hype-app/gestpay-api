## Payment 

With the Payment REST API you can automate every aspect of the payment process. 

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

| Header | Value | Description | 
| ------ | ----- | ----------- |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


Input Body: 

| Field | Description | Example |
| ----- | ----------- | ------- | 
| `shopLogin` | Your shop login | `GESPAY12345` |
| `bankTransactionID` | The bank transaction ID   | `1111` |
| `shopTransactionID` | the shop transaction ID | `MyShop_001` |
| `paymentID`| The payment ID | `1638523579` | 
| `terminalID` | The terminal ID |  ????? 

#### Response 


