### POST shop/token


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/token/
```

<%#
> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/token/
```
%>

> Request Body: 

```json 
{  
  "shopLogin":"",
  "requestToken": "{MASKEDPAN/Customtoken}",
  "creditCard": {
    "number": "",
    "token": "",
    "expMonth": "", 
    "expYear": "", 
    "CVV": ""
  },
  "withAuth": "{True/False}"
}
```

Requests a Credit Card Token or update an existing Credit Card Token.
 

#### Request 

Use one of the following headers to authenticate: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |
| `paymentToken` | `paymentToken: "{paymentToken}"` | A payment token received during the payment process | 

Request Body: 

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | the merchant's code 
| **`requestToken`** | `MASKEDPAN` for a Standard Token; any other value for Custom Token 
| **`cardNumber.number`** | The credit card number 
| **`cardNumber.token`** | A token representation of the card  
| **`cardNumber.expMonth`** | The expiry month
| **`cardNumber.expYear`** | The exipry year 
| **`cardNumber.CVV`** | The CVV code  
| **`withAuth`** | tries to authorize the card. <br> `True` or `False`

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
  "error":{  
    "code":"0",
    "description":"request correctly processed"
  },
  "payload": {
    "transactionType":"{REQUESTTOKEN/UPDATETOKEN}",
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
    "3DSdDescription":"ENROLLED",
    "prepaid":"N",
    "cardBIN": "541238",
    "token":"541238AFAGHA1118",
    "tokenExpiryMonth":"01",
    "tokenExpiryYear":"21"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:

| Field          | Description 
| -------------- | -----------
| `transactionType` | `REQUESTTOKEN` if creating, `UPDATETOKEN` on updating
| `transactionResult` | `OK` or `KO`
| `authorizationErrorCode` | authorisation error code if an error occurred
| `authorizationResult` | Authorization result. It can be `OK` or `KO` or `NULL`
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
| `expiryDate` | `OK` if it's valid; `KO` otherwise
| `expiryDateDescription` | A textual description of the `expiryDate` field
| `3DS` | 3D Secure enabled: <ul><li>`Y` enabled </li><li>`N` not enabled</li><li>`U` could not verify</li><li>`E` error: could not contact the credit card company</li></ul>  
| `3DSdDescription` | enrolment description 
| `prepaid` | indicates if the card is prepaid of not (`Y`, `N`, or empty)
| `cardBIN` | 
| `token` | the token value 
| `tokenExpiryMonth` | the token expiry month 
| `tokenExpiryYear` | the token expiry year 
