### POST dashboard/search/execute


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/dashboard/search
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/dashboard/search
```


> Example search: 

```json
{
    "shopLogin":"",
    "search":{
        "name":"",
        "searchID":""
    },
    "dateFrom":"",
    "dateTo":"",
    "authorizedAmount" : {
        "from":"",
        "to":""
    },
    "capturedAmount":{
        "from":"",
        "to":""
    },
    "lastNDays":"",
    "invoiceID": "",
    "currency" : [],
    "bankTransactionID":"",
    "shopTransactionID" :"",
    "authorizationCode":"",
    "transactonErrorCode": "",
    "paymentID":"",
    "authorizationResult":[],
    "tdLevel":"",
    "event":{
        "type":"",
        "from":"",
        "to":"",
        "lastNDays":"",
        "includeToday":""
    },
    "transactionState":[],
    "paymentMethod":[{
        "paymentType":"",
        "name":[""]
    }],
    "riskAlert":"",
    "customFields":[{
        "customName":"customvalue"
    }],
    "rangeResults":""
}
```

Queries Gestpay for transactions of the past, filtering by many fields. 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Body data: 

| Field                       | Description  | Example  |
| --------------------------- | ----------------------- | ------------------------------------------ | 
| `shopLogin`                 | Your shop login  | `GESPAY12345`  |
| `search.name`               | The name of a saved search. | `today_transactions` |
| `search.searchID`           | The searchID of a saved search. | `00001` |
| `dateFrom`                  | Search start date  | `01/01/2017` |
| `dateTo`                    | Search end date  | `31/12/2017`                               |
| `authorizedAmount.from`     | Search for transactions that have an authorized amount greater than `authorizedAmount.from`. | `100.01` |
| `authorizedAmount.to`       | Search for transactions that have an authorized amount lower than `authorizedAmount.to`. | `300.00`  |
| `capturedAmount.from`       | Search for transactions that have a captured amount greater than `capturedAmount.from`. |  `15.67`  |
| `capturedAmount.to`         | Search for transactions that have a captured amount lower than `capturedAmount.to`. | `100`  |  
| `lastNDays`                 | retrieve transactions for the last `N` days | `3`                                        |
| `invoiceID`                 | an invoice ID to search | `00000353` | 
| `currency`                  | an array containing the values to be checked against the transaction. They must be a valid [ISO code](#currency-codes). |  `[EUR, USD]` |
| `bankTransactionID`         | An ID assigned by the bank.  | `33`   | 
| `shopTransactionID`         | The `shopTransactionID` is the ID assigned by the shop.| `my_shop_id_42`  | 
| `authorizationCode`         | The authorization code is a code released by the payment circuit.  | `1123454` |
| `transactionErrorCode`      | The transaction error code | `74` | 
| ` paymentID`                | Assigned by Gestpay, identifies the payment | `12365344752` | 
| `authorizationResult`       | select transactions whose authorizationResult is contained in the array. | `UNSUBMITTED`, `WAITING`, `PENDING` (or `XX`), `APPROVED` (or `OK`), `DECLINED` (or `KO`) |
| `tdLevel`                   | 3dSecure level | `HALF`, `FULL` |
| `event.type`                | One of the [event types](#event-types) | `MOV` |
| `event.from`                | Search for events occurred after this date | `01/01/2018` |
| `event.to`                  | Search for events occurred before this date | `31/12/2018` |
| `event.lastNDays`           | Search the last *N* days | `7` |
| `event.includeToday`        | True or false | `true` |
| `transactionState`          | the last state of the transaction. See [event types](#event-types) for details  | `MOV` |
| `paymentMethod.paymentType` | the [paymentType](#payment-type-codes) for this transaction | e.g. `CREDITCARD`, `PAYPAL`... |
| `paymentMethod.name`        | The common name of the payment method  | `VISA BVB` |
| `riskAlert`                 | use `true` to select transactions associated with a high risk | `true` or `false` |
| `customFields.customName`   | You can even search by a custom parameter and its value. Just put the `customName` set as the key and use the value as the search field. | `{ "MY_CUSTOM_PARAM" : "customValue123" }` |
| `rangeResults`              | Specify which records you want to read. The first number is the starting point, the last number is the last element.  | `11/20`  |


#### Response 

> Success response:<br>
> `200 OK`

```json
{
  "error": {
    "code": "0",
    "description": "request correctly processed"
  },
  "payload": {
    "nResults":"30",
    "rangeResults":"1/5",
    "payments":[{
      "Date":"26/02/2018 12:22:29",
      "transactionResult" :"KO",
      "transactionState" :"AUT",
      "bankTransactionID" : "2304",
      "shopTransactionID":"Cryptest2602201811",
      "authorizationCode":"",
      "transactionErrorCode" :"",
      "transactionErrorDescription" :"", 
      "paymentID":"22131121123",
      "amount":"0.10",
      "currency" :"EUR",
      "paymentMethod":{
        "paymentType":"CREDITCARD",
        "name":"VISA VBV",
        "logo":{
          "large":"https://{domain}/logos/VisaVbv_Large.png",
          "mobile":"https://{domain}/logos/VisaVbv_mobile.png",
          "vector":"https://{domain}/logos/VisaVbv.svg"
        }
      },
      "riskAlert":"",
      "disputeState":{
        "status":"",
        "chargeback":""
      },
      "tdLevel":"HALF",
      "fraudAlert":"",
      "guaranteePaymentResult":""
    },{
      "Date":"22/02/2018 10:20:09",
      "transactionResult" :"OK",
      "transactionState" :"AUT",
      "bankTransactionID" : "2303",
      "shopTransactionID":"Cryptest2202201811",
      "authorizationCode":"1123454",
      "amount":"0.10",
      "currency" :"EUR",
      "paymentMethod":{
        "paymentType":"CREDITCARD",
        "name":"VISA VBV",
        "logo":{
          "large":"https://{domain}/logos/VisaVbv_Large.png",
          "mobile":"https://{domain}/logos/VisaVbv_mobile.png",
          "vector":"https://{domain}/logos/VisaVbv.svg"
          }
        },
        "riskAlert":"Y",
        "disputeState":{
          "status":"",
          "chargeback":""
        },
        "tdLevel":"FULL",
        "fraudAlert":"",
        "guaranteePaymentResult":""
    },
    //...
    ]
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

In case of success the response is paginated. Use the `rangeResults` property to retrieve more results. 

`error` details: 

| Field               | Description                                                                                                  | 
| ------------------- | ------------------------------------------------------------------------------------------------------------ | 
| `error.code`        | `0` means no error, otherwise check the [error codes](#errors) and `error.description` to debug the problem. |
| `error.description` | If `error.code != 0` will contain a description of the error.                                                |

`payload` details:

| Field          | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `nResults`     | the number items returned by the search.                       |
| `rangeResults` | the range of items returned (of all items)                     |
| `payments`     | an array of payment objects, see the next section for details. |

`payments` details: 

| Field                       | Description
| --------------------------- | --------------------------------------------------------------------------------------------------------- | 
| `Date`                      | the transaction date                                                                                       |
| `transactionResult`         | `OK` or `KO`                                                                                               |
| `transactionState`          | the state of the transaction.                                            |
| `bankTransactionID`         | a transaction identifier assigned by the bank, guaranteed to be unique.                                    |
| `shopTransactionID`         | a transaction identifier assigned by the merchant.                                                         |
| `authorizationCode`         | the authorization code given by the circuit                                                    |
| `transactionErrorCode`      | The transaction error code    | 
| `transactionErrorDescription`      | The transaction error description in common language    | 
| `paymentID`                 | the payment ID                                                                                             |
| `amount`                    | the amount of the transaction                                                                              |
| `currency`                  | the [ISO currency](#currency-codes) for the transaction                                                    |
| `paymentMethod.paymentType` | The [payment type](#payment-type-codes).                                                                   |
| `paymentMethod.name`        | The circuit name                                                                                           |
| `paymentMethod.logo`        | a logo of the payment method, in several resolutions.                                                      |
| `riskAlert`                 | if the transaction is suspicious, `riskAlert` is marked with `Y`.                                          |
| `disputeState.status`       | Showm for transactions that have been disputed. Possible values: `Open`, `Closed`                          |
| `disputeState.chargeback`   | Shown for transactions that have resulted in a chargeback. Possible values: `True`, `False`, `Null`        |
| `tdLevel`                   | Level of authentication for 3D-Secure transactions. `FULL` or `HALF`                                       |
| `fraudAlert`                | `True` or `False` if the transaction is suspicious.                                                        |
| `guaranteedPaymentResult`   | If you're using Gestpay Guaranteed Payment, you'll receive the fraud risk associated with the transaction. |

