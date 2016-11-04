## callCheckCartaS2S

Merchants can use this method to check the Credit Card. 

It's possible to check with or without verifying the Authorization, setting the flag `withAuth`.

### Request details 

> Request example: 

```xml
<callCheckCartaS2S>
  <shopLogin>GEST13578</shopLogin>
  <shopTransactionId>MY-SHOP1234</shopTransactionId>
  <cardNumber>1234567812345678</cardNumber>
  <expMonth>12</expMonth>
  <expYear>21</expYear>
  <CVV2>931</CVV2>
  <withAuth>Y</withAuth>
</callCheckCartaS2S>
```


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |
| `shopTransactionId` | shop transaction ID value | string | 50  
| `cardNumber` | credit card number | string | 20 | 
| `expMonth` | card expiration month | string | 2
| `expYear` | card expiration year | string | 2 
| `CVV2` | security code of the card | string | 4
| `withAuth` | tries to authorize the card. <br> `Y` on `N` | string | 1
 
### Response details

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
    <Prepaid/>
  </GestPayS2S>
</callCheckCartaS2SResult>
```

| name | description 
| ---- | -----------
| `TransactionType` | `CHECKCARD`
| `TransactionResult` | `OK` or `KO`
| `TransactionErrorDescription` | transaction error description
| `AuthorizationErrorCode` | authorisation error code if an error occurred
| `AuthorizationResult` | authorization result 
| `AuthorizationCodeDescription` | code description 
| `CardCountry` | nationality of the card 
| `CardCountryCode` | nationality code of the card 
| `CheckCVV` | result of the check CVV
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

