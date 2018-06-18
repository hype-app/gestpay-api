# REST APIs

## Dashboard

### POST search/execute

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

> ... where {payload} is a json in this form: 

```json 

```


Headers: 

| header | value | 
| ------ | ----- | 
| `Authorization` | `apikey "{merchant Api Key}"` |