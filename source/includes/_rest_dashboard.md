## Dashboard

With the dashboard REST APIs you'll be able to query Gestpay for dashboard services, like searching for transactions. 

### POST search/execute

> Complete URL:

```
POST /api/{version}/dashboard/search/execute
```

> Example search: 

```json
{
    "shopLogin":"",
    "search":{
        "name":"",
        "searchID":""
    }
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
    "currency" : [],
    "bankTransactionID":"",
    "shopTransactionID" :"",
    "authorizationCode":"",
    "paymentID":"",
    "authorizationResult":[],
    "tdLevel":"",
    "event":[{
        "type":"",
        "from":"",
        "to":""
        "lastNDays":"",
        "includeToday":""
    }],
    "transactionState":[],
    "paymentMethod":[{
        "paymentType":"",
        "name":""
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

| Header | Value | Description | 
| ------ | ----- | ----------- |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Body data: 

| Field | Description | Example |
| ----- | ----------- | ------- | 
| `shopLogin` | Your shop login | `"GESPAY12345"` |
| `search.name` | ??? | 
| `search.searchID` | ??? | 
| `dateFrom` | Search start date | `"31/12/2017"` |
| `dateTo` | Search end date  |  `"31/12/2017"` |
| `authorizedAmount.from` | ??? | 
| `authorizedAmount.to` | ??? | 
| `capturedAmount.from` | ??? | 
| `capturedAmount.to` | ??? | 
| `lastNDays` | retrieve transactions for the last `N` days | `"3"` |
| `currency` | an array containing the values to be checked against the transaction. They must be a valid [ISO code](#currency-codes). | `"[EUR, USD]"` |
| `bankTransactionID` | select transactions with this `bankTransactionID` value. | `"33"` | 
| `shopTransactionID`| select transactions with this `bankTransactionID` value. | `"my_shop_id_42"` | 
| `authorizationCode` | ??? | `"1123454"`
| ` paymentID` | select transactions with this `paymentID` | `"abc123653"` | 
| `authorizationResult` | select transactions whose authorizationResult is contained in the array. | ??? | 
| `tdLevel` | 3dSecure level | `"HALF"`
| `event.type` | ???
| `event.from` | ???
| `event.to` | ???
| `event.lastNDays` | ???
| `event.includeToday` | ???
| `transactionState` | the state of the transaction. | `AUT`, `MOV`... ??? |
| `paymentMethod.paymentType` | the [paymentType](#payment-type-codes) for this transaction | e.g. `CREDITCARD`, `PAYPAL`... 
| `paymentMethod.name` | The common name of the payment method | `VISA BVB`
| `riskAlert` | use `Y` to select transactions associated with a high risk | ???
| `customFields.customName` | You can even search by a custom parameter and its value. Just put the `customName` set as the key and use the value as the search field. |  `{ "MY_CUSTOM_PARAM" : "customValue123" }`
| `rangeResults` | ???



#### Response 



> Response for the success case: 

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
        "paymentID":"22131121123",
        "amount":"0.10",
        "currency" :"EUR",
        "paymentMethod":{
            "paymentType":"CREDITCARD",
            "name":"VISA VBV"
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
            "name":"VISA VBV"
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

> Client error: 

```json
{
  "error": {
    "code": "1105",
    "description": "Invalid parameter value"
  },
  "payload": {}
}
```

> Unauthorized request: 

```json
{
  "error": {
    "code": "1166",
    "description": "Invalid ApiKey"
  },
  "payload": {}
}
```

> General error: 

```json
{
  "error": {
    "code": "9999",
    "description": "Technical error"
  },
  "payload": {}
}
```

Gestpay returns an `error` property that eventually contains the error code and description, and a `payload` property that contains the actual output. 

In case of success the response is paginated. Use the `rangeResults` property to retrieve more results. 

`error` details: 

| Field | Description | 
| ----- | ----------- | 
| `error.code` | `0` means no error, otherwise check the [error codes](#errors) and `error.description` to debug the problem. 
| `error.description` | If `error.code != 0` will contain a description of the error. 

`payload` details:

| Field | Description | 
| ----- | ----------- | 
| `nResults` | the number items returned by the search. 
| `rangeResults` | the range of items returned (of all items)
| `payments` | an array of payment objects, see the next section for details.

`payments` details: 

| Field | Description | 
| ----- | ----------- | 
| `Date` | the transaction date |
| `transactionResult` | `OK` or `KO` 
| `transactionState` | the state of the transaction. TODO: enumerate all statuses? 
| `bankTransactionID` | a transaction identifier assigned by the bank, guaranteed to be unique. 
| `shopTransactionID` | a transaction identifier assigned by the merchant.
| `authorizationCode` | the authorization code given by the circuit ??? 
| `paymentID` | the payment ID 
| `amount` | the amount of the transaction
| `currency` | the [ISO currency](#currency-codes) for the transaction
| `paymentMethod.paymentType` | The [payment type](#payment-type-codes). 
| `paymentMethod.name` | The circuit name 
| `paymentMethod.logo` | a logo of the payment method, in several resolutions. 
| `riskAlert` | if the transaction is suspicious, `riskAlert` is marked with `Y`. 
| `disputeState.status` | ??? 
| `disputeState.chargeback` | ??? 
| `tdLevel` | Level of authentication for 3D-Secure transactions. `FULL` or `HALF`
| `fraudAlert` | ??? 
| `guaranteePaymentResult` | ??? 
