### GET dasboard/search/saved


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/dashboard/search/saved/{shopLogin}/
```

> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/dashboard/search/saved/{shopLogin}/
```

Returns the list of saved searches in Axerve E-commerce Solutions. 

Headers: 

| Header          | Value                         | Description  |
| --------------- | ----------------------------- | ------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

URL params: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | your Shop Login, e.g. `GESPAY12345` or `XX12345678`


#### Response 

> Success response:<br>
> `200 OK`

```json
{
  "search":[
    {
      "save":{
        "name":"",
        "searchID":""
      },
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
      "transactionErrorDescription":"",
      "paymentID":"",
      "authorizationResult":"",
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
      "customFields":[
        {
          "customName":"customvalue"
        }
      ],
      "invoiceID":""
    }
  ]
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

`payload` details:

| Field | Description |
| ----- | ----------- |
| `search` | An array of search objects, see next table. 

`search` details:

| Field | Description |
| ----- | ----------- |
| `save.name` | The search name.
| `save.searchID` | The ID assigned by Axerve E-commerce Solutions for this search.
| `authorizedAmount.from` | the `from` amount range. If `10`, only authorized amounts greater than 10 are returned.
| `authorizedAmount.to` | The `to` amount range. If `20`, only authorized amounts lower than 20 are returned. 
| `capturedAmount.from` | the `from` amount range. If `10`, only captured amounts greater than 10 are returned.
| `capturedAmount.to` | The `to` amount range. If `20`, only captured amounts lower than 20 are returned. 
| `currency` | An array of valid [currencies](#currency-codes) to search for. 
| `bankTransactionID` | the bank transaction ID. 
| `shopTransactionID` | The shop transaction ID. 
| `authorizationCode` | The authorization code released by the payment circuits.
| `transactionErrorCode` | A [transaction error code](#errors). 
| `transactionErrorDescription` | A transaction error description, in common language. 
| `paymentID` | The payment ID
| `authorizationResult` | The authorization result.
| `tdLevel` | 3D-Secure level 
| `event` | Accepted events. See below.
| `creditDate`                | Allows to search by credit date. Works very similarly to `event` seen before. | 
| `debitDate`                 | Allows to search by debit date. | Works very similarly to `event` seen before.  |
| `chargeBack`                | Allows to search by disputes. Works very similarly to `event` seen before.  | 
| `chargeBack.type`           | You can search by a chargeback type, a value in the `ALL`, `OPEN`, `CLOSE`, `CLOSE WITH CHARGE` set.  | 
| `transactionState` | An array of transaction states. Follow the link for a [detailed explanation of transaction statuses](http://docs.gestpay.it/adv/query-transaction-status.html).
| `paymentMethod` | an array containing [payment types](#payment-type-codes) and payment names.
| `riskAlert` | `true` to select transactions associated with a high risk
| `customFields.customName` |  You can even search by a custom parameter and its value. Just put the `customName` set as the key and use the value as the search field.
| `invoiceID` | the invoice ID. 


`search.event` details: 

| Name | Description | 
| ---- | ----------- |
| `type` | One of the events defined in [Event Types](#event-types).
| `from` | The from date for the specified event type. 
| `to` | The to date for the specified event type. 
| `lastNDays` | an integer defining if this event should be searched in the last N days. Alternative to `from` and `to`. 
|  `includeToday` | If `true`, it includes today in the search. 