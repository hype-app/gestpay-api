### GET payment/detail


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/detail/{paymentID}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/detail/{paymentID}
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
    "transactionResult":"",
    "transactionState":"",
    "transactionErrorCode":"",
    "transactionErrorDescription":"",
    "bankTransactionID":"",
    "shopTransactionID":"",
    "authorizationCode":"",
    "paymentID":"",
    "currency":"",
    "country":"",
    "company":"",
    "tdLevel":"",
    "events":[
      {
        "event":{
          "eventtype":"",
          "eventamount":"",
          "eventdate":""
        }
      }
    ],
    "buyer":{
      "name":"",
      "email":""
    },
    "risk":{
      "riskResponseCode":"",
      "riskResponseDescription":""
    },
    "customInfo":{
      "{myCustomInfo1}":"{myCustomInfoValue1}",
      "{myCustomInfo2}":"{myCustomInfoValue2}"
    },
    "alertCode":"",
    "alertDescription":"",
    "cvvPresent":"{TRUE/FALSE}",
    "dcc":{
      "eligible":"{TRUE/FALSE}",
      "currency":""
    },
    "maskedPAN":"",
    "paymentMethod":"",
    "productType":"",
    "token":"",
    "tokenExpiryMonth":"",
    "tokenExpiryYear":"",
    "vbv":{
      "flag":"",
      "buyer":""
    },
    "payPalFee":"",
    "fraudPrevention":{
      "check":"{TRUE/FALSE}",
      "state":"",
      "description":"",
      "order":""
    },
    "automaticOperation":{
      "type":"",
      "date":"",
      "amount":""
    },
    "shield":{

    },
    "fraudAlert":{

    }
  }
}
```


See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.


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