### POST payment/detail


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/detail
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/detail
```


> Example request: 

```json
{
  "shopLogin" : "",
  "bankTransactionID": "",
  "shopTransactionID" : "",
  "paymentID":"",
  "terminalID": ""
}
```

Retrieves the details of a payment.  

#### Request 

To authetnicate, use one of the following headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |
| `paymentToken` | `paymentToken: "{paymentToken}"` | A payment token received during the payment process |

URL parameter: 

| Parameter | Description | 
| --------- | ----------- | 
| `paymentID` | The payment identifier. | 

Input Body: 

| Field               | Description             | Example       |
| ------------------- | ----------------------- | ------------- |
| `shopLogin`         | Your shop login         | `GESPAY12345` |
| `bankTransactionID` | The bank transaction ID | `1111`        |
| `shopTransactionID` | the shop transaction ID | `MyShop_001`  |
| `paymentID`         | The payment ID          | `1638523579`  |
| `terminalID`         | The terminal ID        | `12340005`    |


#### Response 

> Success Response<br>
> `200 OK`

```json
{
  "error":{  
    "code":"0",
    "description":"request correctly processed"
  },
  "payload":{  
    "transactionType":"detail",
    "transactionResult":"OK",
    "transactionState":"MOV",
    "bankTransactionID":"11111",
    "shopTransactionID":"myShopTransactionID",
    "authorizationCode":"0010202",
    "paymentID":"00000000001",
    "currency":"EUR",
    "country":"ITALIA",
    "company":"MASTERCARD SECURECODE",
    "tdLevel":"FULL",
    "events":[{  
      "eventtype":"AUT",
      "eventamount":"0.10",
      "eventdate":"19/08/16 16:13:14",
      "environment":"ONL",
      "operator":""
    }, {  
      "eventtype":"MOV",
      "eventamount":"0.10",
      "eventdate":"20/08/16 00:13:57",
      "environment":"BOF",
      "operator":"Sellanet"
    }],
    "buyer":{  
        "name":"",
        "email":""
    },
    "risk":{  
        "riskResponseCode":"approved",
        "riskResponseDescription":""
    },
    "alertCode":"",
    "alertDescription":"",
    "cvvPresent":"{TRUE/FALSE}",
    "dcc":{
        "eligible":"{TRUE/FALSE}",
        "currency":""
    },
    "maskedPAN":""
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

`error` details: 

| Field               | Description                                                                                                  | 
| ------------------- | ------------------------------------------------------------------------------------------------------------ | 
| `error.code`        | `0` means no error, otherwise check the [error codes](#errors) and `error.description` to debug the problem. |
| `error.description` | If `error.code != 0` will contain a description of the error.                                                |

`payload` details:

| Field               | Description                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `transactionType`   | `detail`                                                                                          |
| `TransactionResult` | `OK` ok `KO`                                                                                      |
| `transactionState`  | The last state of the transaction, as one of the states contained in [event types](#event-types).|
| `bankTransactionID` | A transaction ID assigned by the bank.                                                            |
| `shopTransactionID` | An ID assigned by the shop.                                                                       |
| `authorizationCode` | A code released by the payment circuit.                                                           |
| `paymentID`        | Assigned by Gestpay, identifies the payment |
| `currency`  | One of the [ISO currencies](#currency-codes). 
| `country` | The country originating the transaction | 
| `company` | The credit card / payment circuit | 
| `tdLevel` | can be: `NULL`, `FULL` if the transaction is fully 3D-Secure protected, `HALF`. |
| `alertCode` | Alert code. See [Better Risk Management](<%= config[:doc_url] %>/sec/better-risk-management-reacting-to-suspicious-activity.html) for an accurate description. 
| `AlertDescription` | Alert description in chosen language. See [Better Risk Management](<%= config[:doc_url] %>/sec/better-risk-management-reacting-to-suspicious-activity.html) for an accurate description.  |
| `buyer` | Contains informations about the buyer name, if available. See the able below. 
| `risk` | Contains informations about the risk score, assigned by Gestpay Guaranteed Payment. See below. 
| `events` | Contains informations about this payment history. See below.
| `cvvPresent` | `TRUE` if the payment has been executed by using a CVV security code. 
| `dcc` | Stands for Dynamic Currency Conversion. See the table below. 
| `maskedPAN` | Masked PAN string 
| `transactionErrorCode` | The error code for the transaction. See [error codes](#errors) page for details.
| `transactionErrorDescription` | The error code description in common language.  

`events` details: 

| Field  | Description 
| ------ | ----------- |
| `eventtype` | One of the [event types](#event-types) 
| `eventamount` | the amount involved in this event 
| `eventdate`   | The date of the event 
| `environment` | The environment that has generated the event: `ONL` (Online), `BOF` (Back Office), `BAT` (Batch)
| `operator` | The user code that has performed the operation

`buyer`details: 

| Field | Description 
| ----- | ----------- 
| `name` | The buyer's name
| `email` | The buyer's email

`riks` details: 

| Field | Description 
| ----- | ----------- 
| `RiskResponseCode` | Risk Fraud Score of the transaction, given by Gestpay Guaranteed Payment. [See here](#risk-response-codes) for a list of possible values. |
| `RiskResponseDescription` | Risk Description for the RiskResponseCode value |

`dcc` details: 

| Field | Description 
| ----- | ----------- 
| `eligible` | `TRUE` if the payment is DCC eligible and is therefore converted at payment time; `FALSE` otherwise.  |
| `currency` | The exchange rate. |
