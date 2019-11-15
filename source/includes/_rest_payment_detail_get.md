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

To authenticate, use one of the following headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |
| [`paymentToken`](#payment-token) | `{paymentToken}` | A payment token received during the payment process |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`paymentID`** | The payment identifier. | 


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
    "events":[{
      "event":{
        "eventtype":"",
        "eventamount":"",
        "eventdate":"",
        "eventARN":"",
        "eventid":"",
      }
    }],
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
    }
  }
}
```


See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.


`payload` details:

| Field               | Description                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `transactionType`   | `detail`                                                                                          |
| `TransactionResult` | `UNSUBMITTED`, `WAITING`, `PENDING` (or `XX`), `APPROVED` (or `OK`), `DECLINED` (or `KO`)     |
| `transactionState`  | The last state of the transaction, as one of the states contained in [event types](#event-types).|
| `bankTransactionID` | A transaction ID assigned by the bank.                                                            |
| `shopTransactionID` | An ID assigned by the shop.                                                                       |
| `authorizationCode` | A code released by the payment circuit.                                                           |
| `paymentID`        | Assigned by Axerve E-commerce Solutions, identifies the payment |
| `currency`  | One of the [ISO currencies](#currency-codes). 
| `country` | The country originating the transaction | 
| `company` | The credit card / payment circuit | 
| `tdLevel` | `FULL` if the transaction is fully 3D-Secure protected, `HALF`. |
| `alertCode` | Alert code. See [Better Risk Management](<%= config[:doc_url] %>/sec/better-risk-management-reacting-to-suspicious-activity.html) for an accurate description. 
| `AlertDescription` | Alert description in chosen language. See [Better Risk Management](<%= config[:doc_url] %>/sec/better-risk-management-reacting-to-suspicious-activity.html) for an accurate description.  |
| `buyer` | Contains informations about the buyer name, if available. See the able below. 
| `risk` | Contains informations about the risk score, assigned by Axerve Guaranteed Payment. See below. 
| `customInfo` | An object containing optional customised parameters. set your parameters as key-value pairs. 
| `events` | Contains informations about this payment history. See below.
| `cvvPresent` | `TRUE` if the payment has been executed by using a CVV security code. 
| `dcc` | Stands for Dynamic Currency Conversion. See the table below. 
| `maskedPAN` | Masked PAN string 
| `paymentMethod` | the payment method used to perform the payment 
| `productType` | String containing card type
| `token` | String containing the token value
| `tokenExpiryMonth` | String containing the token expiry month
| `TokenExpiryYear` | String containing the token expiry year
| `vbv` | Informations about the 3DSecure status. 
| `payPalFee` | The fee owed to paypal. 
| `fraudPrevention` | informations about fraud prevention. Responses by Axerve Guaranteed Payment will show here. 
| `transactionErrorCode` | The error code for the transaction. See [error codes](#errors) page for details.
| `transactionErrorDescription` | The error code description in common language.  
| `automaticOperation` | it refers to an automatic operation that has been programmed. 
| `threeDS` <span class='beta'>sandbox</span> | Object with information about 3ds authentication (described below)

`events` details: 

| Field  | Description 
| ------ | ----------- |
| `eventtype` | One of the [event types](#event-types) 
| `eventamount` | the amount involved in this event 
| `eventdate`   | The date of the event 
| `eventARN`   | The acquirer reference number
| `eventid`   | Settlement reference id
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
| `RiskResponseCode` | Risk Fraud Score of the transaction, given by Axerve Guaranteed Payment. [See here](#risk-response-codes) for a list of possible values. |
| `RiskResponseDescription` | Risk Description for the RiskResponseCode value |

`dcc` details: 

| Field | Description 
| ----- | ----------- 
| `eligible` | `TRUE` if the payment is DCC eligible and is therefore converted at payment time; `FALSE` otherwise.  |
| `currency` | The exchange rate. |

`fraudPrevention` details: 

|Field | Description
| ---- | ----------- 
| `check` | The kind of check applied. 
| `state` | The status of the transaction.  
| `description` | The status description 
| `order` | the order reference 

The threeDS <span class='beta'>sandbox</span> object contains three object:

- `authenticationResult` with those children

| Name | max length | description |
| ---- | :--------: | ----------- |
|  `authenticationLevel` | 2  | Transaction is successfully athenticated by 3DS:<ul><li>1H: 3DS 1.0 half</li><li>1F: 3DS 1.0 full</li><li>2F: 3DS 2.0 frictionless</li><li>2C: 3DS 2.0 challenge</li><li>2E: 3DS 2.0 exemption</li><li>OL: One Leg - Authentication not required</li><li>NA: No Authentication</li></ul>
|  `authenticationStatus`  | 1 | Status of authentication
|  `authStatusReason`  | 2 | Provides information on why the Transaction Status field has the specified value
|  `XID`  | 36 | Transaction unique id assigned by Directory Server
|  `AV`  | 28 | Cardholder Authentication Verification Value, proof of authentication done
|  `ECI` | 2 | Electronic Commerce Indicator 
|  `AVAlgorithm`  | 2 | Cardholder Authentication Verification Algoritm, valorized only with 3DS 1.0
| `threeDsVersion ` | 8 | EMVco protocol version identifier 

- `transDetails` with those children

| Name | max length | description |
| ---- | :--------: | ----------- |
| `authData` | string | Transaction Authentication Data
| `authMethod` | 2 | Transaction Authentication Method Possible values: <ul><li>01: Frictionless authentication occurred by ACS </li><li>02: Cardholder challenge occurred by ACS </li><li>03: AVS verified </li><li>04: Other issuer methods</li></ul>
| `authTimestamp` | 12 | Transaction Authentication Timestamp
| `acsID` | 36 | ACS Transaction ID

- `InAppChallenge` (Tihs fields are valorized and usefull only in app integration)

| Name           | Description | 
| -------------- | ----------- |
| `threeDSServerTransID` | Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction.
| `acsSignedContent` | Contains the JWS object (represented as a string) created by the ACS for the ARes message.
| `acsTransID` | Universally Unique transaction identifier assigned by the ACS to identify a single transaction.
| `acsURL` | Fully qualified URL of the ACS to be used for the challenge.
| `cardholderInfo` | Text provided by the ACS/Issuer to Cardholder during a Frictionless or Decoupled transaction. The Issuer can provide information to Cardholder. For example, “Additional authentication is needed for this transaction, please contact (Issuer Name) at xxx-xxx-xxxx.”
| `messageExtension` | Data necessary to support requirements not otherwise defined in the 3- D Secure message are carried in a Message Extension.
| `sdkTransID` | Universally unique transaction identifier assigned by the 3DS SDK to identify a single transaction

