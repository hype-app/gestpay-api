### POST dashboard/search/saved


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/dashboard/search/saved/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/dashboard/search/saved/
```

> Example request body: 

```json
{  
  "shopLogin":"",
  "authorizedAmount":{  
    "from":"",
    "to":""
  },
  "capturedAmount":{  
    "from":"",
    "to":""
  },
  "currency":[  

  ],
  "bankTransactionID":"",
  "shopTransactionID":"",
  "authorizationCode":"",
  "transactionErrorCode":"",
  "paymentID":"",
  "authorizationResult":[],
  "tdLevel":"",
  "event": {  
    "type":"",
    "from":"",
    "to":"",
    "lastNDays":"",
    "includeToday":""
  },
	"creditDate": {
		"from": "",
		"to": "",
		"lastNDays": "",
		"includeToday": ""
	},
	"debitDate": {
		"from": "",
		"to": "",
		"lastNDays": "",
		"includeToday": ""
	},
	"chargeback": {
		"type": "",
		"from": "",
		"to": "",
		"lastNDays": "",
		"includeToday": ""
	},
  "transactionState":[],
  "paymentMethod":[{  
    "paymentType":"",
    "name":[]
  }],
  "riskAlert":"",
  "customFields":[{  
    "customName":"customvalue"
  }],
  "save":{  
    "name":""
  },
  "invoiceID":""
}
```

Creates a saved search. If the `templateId` is present, the template is updated. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |


Body parameters: 

(Fields in **bold** are mandatory)

| Field | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| **`save.name`** | A user friendly name of the custom search.
| `capturedAmount.from` | the `from` amount range. If `10`, only captured amounts greater than 10 are returned.
| `capturedAmount.to` | The `to` amount range. If `20`, only captured amounts lower than 20 are returned. 
| `authorizedAmount.from` | the `from` amount range. If `10`, only authorized amounts greater than 10 are returned.
| `authorizedAmount.to` | The `to` amount range. If `20`, only authorized amounts lower than 20 are returned. 
| `currency` | An array of valid [currencies](#currency-codes) to search for. 
| `bankTransactionID` | the bank transaction ID. 
| `shopTransactionID` | The shop transaction ID. 
| `authorizationCode` | The authorization code.
| `transactionErrorCode` | A [transaction error code](#errors). 
| `paymentID` | The payment ID
| `authorizationResult` | The authorization result: can be one of `OK`, `KO`, `XX`, `APPROVED`, `DECLINED`, `PENDING`
| `tdLevel` | 3D-Secure level 
| `event` | An accepted event. See below. 
| `creditDate`                | Allows to search by credit date. Works very similarly to `event` seen before. | 
| `debitDate`                 | Allows to search by debit date. | Works very similarly to `event` seen before.  |
| `chargeBack`                | Allows to search by disputes. Works very similarly to `event` seen before.  |
| `chargeBack.type`           | You can search by a chargeback type, a value in the `ALL`, `OPEN`, `CLOSE`, `CLOSE WITH CHARGE` set.  | 
| `transactionState` | An array of transaction states. Follow the link for a [detailed explanation of transaction statuses](http://docs.gestpay.it/soap/s2s/query-transaction-status/).
| `paymentMethod` | an array of [payment types](#payment-type-codes) and payment names.
| `riskAlert` | `true` to select transactions associated with a high risk
| `customFields.customName` |  You can even search by a custom parameter and its value. Just put the `customName` set as the key and use the value as the search field.
| `invoiceID` | the invoice ID. 


`event` details: 

| Name | Description | 
| ---- | ----------- |
| `type` | One of the events defined in [Event Types](#event-types).
| `from` | The from date for the specified event type. 
| `to` | The to date for the specified event type. 
| `lastNDays` | an integer defining if this event should be searched in the last N days. Alternative to `from` and `to`. 
|  `includeToday` | If `true`, it includes today in the search. 

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
    "result":"OK",
    "search":{
        "name":"mySavedSearch1",
        "searchID":"12423785932",
        "description": "My saved search"
    }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details: 

| Field          | Description 
| -------------- | -----------
| `result`     | `OK` or `KO`
| `search` | An array containing one or more templates.
| `search.name` | The name you assigned in the request 
| `search.searchID` | An ID generated by Axerve E-commerce Solutions 
| `search.description` | A textual dscription of the saved search.
