### callCheckCartaS2S

Merchants can use this method to check the Credit Card. 

It's possible to check with or without verifying the Authorization, setting the flag `withAuth`.

#### Request details 

> Check a credit card: 

```xml
<callCheckCartaS2S>
  <shopLogin>GEST13578</shopLogin>
  <shopTransactionId>MY-SHOP1234</shopTransactionId>
  <!-- check a card --> 
  <cardNumber>1234567812345678</cardNumber>
  <expMonth>12</expMonth>
  <expYear>21</expYear>
  <CVV2>931</CVV2>
  <withAuth>Y</withAuth>
</callCheckCartaS2S> 
```

> Check a token: 

```xml
<callCheckCartaS2S>
  <shopLogin>GEST13578</shopLogin>
  <shopTransactionId>MY-SHOP1234</shopTransactionId>
  <tokenValue>ABCD12345678EFGD</tokenValue>
  <withAuth>Y</withAuth>
</callCheckCartaS2S> 
```

Parameters in **bold** are mandatory. 

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| **`shopLogin`** | the merchant's code | string | 30 |
| **`shopTransactionId`** | shop transaction ID value | string | 50  
| **`withAuth`** | tries to authorize the card. <br> `Y` on `N` | string | 1  
| `apikey` | If you have selected the _apiKey_ authentication method, add the `apikey` field to the call. [More details about the apiKey here](#authorizing-calls-against-gestpay). |  |  | 

If you want to check a credit card by credit card number, month and year of expiration, use these fields: 

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `cardNumber` | credit card number | string | 20 | 
| `expMonth` | card expiration month | string | 2
| `expYear` | card expiration year | string | 2 
| `CVV2` | security code of the card | string | 4

Alternatively, you can use  `tokenValue` to check if a token is still valid: 

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------|
| `tokenValue`   | String containing the `token` value returned by Gestpay. <br/> In case of `PayPalBillingAgreement` this token value is the token returned by PayPal during the Billing Agreements. | string | 25 | 

<aside class="notice">You must use <strong>exactly one</strong> among <strong>Credit Card data</strong> and <strong>Token value</strong>.</aside>

#### Response details

> Response example: 

```xml
<callCheckCartaS2SResult>
  <GestPayS2S xmlns="">
    <TransactionType>CHECKCARD</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <TransactionErrorCode>0</TransactionErrorCode>
    <TransactionErrorDescription>Transaction correctly processed</TransactionErrorDescription>
    <AuthorizationErrorCode>0</AuthorizationErrorCode>
    <AuthorizationResult>KO</AuthorizationResult>
    <AuthorizationCodeDescription>negative balance</AuthorizationCodeDescription>
    <CardCountry>ITALIA</CardCountry>
    <CardCountryCode>380</CardCountryCode>
    <CheckCVV>OK</CheckCVV>
    <CheckCVVDescription>CVV VALID</CheckCVVDescription>
    <IssuerCountry>ITALIA</IssuerCountry>
    <IssuerCountryCode>380</IssuerCountryCode>
    <CompanyDescription>MASTERCARD</CompanyDescription>
    <CompanyCode>3</CompanyCode>
    <Commercial>N</Commercial>
    <ProductDescription>Standard MasterCard® Card</ProductDescription>
    <ProductType>Credit</ProductType>
    <CheckDigit>OK</CheckDigit>
    <CheckDigitDescription>CheckDigit VALID</CheckDigitDescription>
    <CheckDate>OK</CheckDate>
    <CheckDateDescription>DATE VALID</CheckDateDescription>
    <EnrolledCode>Y</EnrolledCode>
    <EnrolledDescription>ENROLLED</EnrolledDescription>
    <Prepaid>N</Prepaid>
  </GestPayS2S>
</callCheckCartaS2SResult>
```

| name | description 
| ---- | -----------
| `TransactionType` | `CHECKCARD`
| `TransactionResult` | `OK` or `KO`
| `TransactionErrorDescription` | transaction error description
| `AuthorizationErrorCode` | authorisation error code if an error occurred
| `AuthorizationResult` | authorization result. It can be `OK` or `KO` or `NULL`  
| `AuthorizationCodeDescription` | code description 
| `CardCountry` | nationality of the card 
| `CardCountryCode` | nationality code of the card 
| `CheckCVV` | result of the check CVV. It can be `OK` or `KO` or `NULL`
| `CheckCVVDescription` | description of CVV check results
| `IssuerCountry` | nationality of the card issuer 
| `IssuerCountryCode` | nationality code of the card issuer
| `CompanyDescription` | Description of the Card company 
| `CompanyCode` | Code of the Company 
| `Commercial` | Flag that indicates if the Card is commercial or not. `Y` or `N`
| `ProductDescription` | Description of the product linked to the card 
| `ProductType` | type of the product: `Credit` or `Debit`
| `CheckDigit` | `OK` or `KO`, acording to the check digit of the card 
| `CheckDigitDescription` | description of the check digit response
| `CheckDate` | `OK` or `KO`, acording to the check date of the card 
| `CheckDateDescription` | description of the check date response  
| `EnrolledCode` | 3D Secure enabled: <ul><li>`Y` enabled </li><li>`N` not enabled</li><li>`E` error: could not contact the credit card company</li><li>`U` could not verify</li></ul>  
| `EnrolledDescription` | enrolment description 
| `Prepaid` | indicates if the card is prepaid of not (`Y`, `N`, or empty) 

