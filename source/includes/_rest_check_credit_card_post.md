### POST check/creditCard


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/check/creditCard/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/check/creditCard/
```

> Request body: 

```json
{
  "shopLogin" : "",
  "shopTransactionID" : "",
  "withAuth":"",
  "creditcard":{
    "number":"",
    "token":"",
    "expMonth":"",
    "expYear":"",
    "CVV":""
  }
}
```

Provides a formal validity check of the credit card. 

#### Request 

Headers: 

To receive a valid response from Gestpay you must use one of these headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


request body details: 

| Parameter | Description | 
| --------- | ----------- | 
| `shopLogin` | The shop identifier. | 
| `shopTransactionID` | The shop transaction ID.
| `withAuth` | `TRUE` or `FALSE`. Tries to authorize the card. 
| `creditcard.number` | The number of the credit card.
| `creditcard.token` | If you have a token, gestpay can check it for validity. 
| `expMonth` | The expiry month.
| `expYear` | The expiry year. 
| `CVV` | The CVV. 

#### Response 

> Success response example:<br>
> `200 OK`

```json
{  
  "transactionType":"CreditCard",
  "transactionResult":"OK",
  "authorizationResult":"OK",
  "authorizationErrorCode":"0",
  "authorizationCodeDescription":"Transaction correctly processed",
  "country":"ITALIA",
  "countryCode":"380",
  "cvv":"OK",
  "cvvDescription":"CVV VALID",
  "issuerCountry":"ITALIA",
  "issuerCountryCode:":"380",
  "company":"MASTERCARD",
  "companyCode":"3",
  "commercial":"N",
  "productDescription":"Standard MasterCard® Card",
  "productType":"Credit",
  "checkDigit":"OK",
  "checkDigitDescription":"CheckDigit VALID",
  "expiryDate":"OK",
  "expiryDateDescription":"DATE VALID",
  "3DS":"Y",
  "3DSDescription":"ENROLLED",
  "prepaid":"N"
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `transactionType` | `CreditCard`
| `transactionResult` | `OK` or `KO`
| `authorizationResult` | authorization result. It can be `OK` or `KO` or `NULL`  
| `authorizationErrorCode` | authorisation error code if an error occurred
| `authorizationCodeDescription` | code description 
| `country` | nationality of the card 
| `countryCode` | nationality code of the card
| `cvv` | result of the check CVV. It can be `OK` or `KO` or `NULL`
| `cvvDescription` | description of CVV check results
| `issuerCountry` | nationality of the card issuer 
| `issuerCountryCode` | nationality code of the card issuer
| `company` | Description of the Card company 
| `companyCode` | Code of the Company 
| `commercial` | Flag that indicates if the Card is commercial or not. `Y` or `N`
| `productDescription` | Description of the product linked to the card 
| `productType` | type of the product: `Credit` or `Debit`
| `checkDigit` | `OK` or `KO`, acording to the check digit of the card 
| `checkDigitDescription` | description of the check digit response
| `expiryDate` | `OK` or `KO`, acording to the check date of the card 
| `expiryDateDescription` | description of the check date response  
| `3DS` | 3D Secure enabled: <ul><li>`Y` enabled </li><li>`N` not enabled</li><li>`E` error: could not contact the credit card company</li><li>`U` could not verify</li></ul>  
| `3DSDescription` | enrolment description 
| `prepaid` | indicates if the card is prepaid of not (`Y`, `N`, or empty) 

