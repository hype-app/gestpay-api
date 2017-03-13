## CallRequestTokenS2S

Merchants can use this method to request the token generation for a Credit Card. This token can be generated as Standard Format or Custom Format. Tokens created by merchants belonging to a group will be available to all the merchants of the same group.


### Request details 

> Request example: 

```xml
<CallRequestTokenS2S>
  <shopLogin>GEST13578</shopLogin>
  <requestToken>MASKEDPAN</shopTransactionId>
  <cardNumber>1234567812345678</cardNumber>
  <expiryMonth>12</expiryMonth>
  <expiryYear>21</expiryYear>
  <cvv>931</cvv>
  <withAuth>Y</withAuth>
</callCheckCartaS2S>
```


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |
| `requestToken` | `MASKEDPAN` for a Standard Token; any other value for Custom Token | string | 24  
| `cardNumber` | credit card number | string | 20 | 
| `expiryMonth` | card expiration month | string | 2
| `expiryYear` | card expiration year | string | 2 
| `cvv` | security code of the card | string | 4
| `withAuth` | tries to authorize the card. <br> `Y` on `N` | string | 1
 
### Response details

> Response example: 

```xml
<CallRequestTokenS2SResult>
  <GestPayS2S xmlns="">
    <TransactionType>REQUESTTOKEN</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <TransactionErrorCode>0</TransactionErrorCode>
    <TransactionErrorDescription>Transaction correctly processed</TransactionErrorDescription>
    <AuthorizationErrorCode/>
    <AuthorizationResult/>
    <AuthorizationCodeDescription/>
    <CardCountry>POLONIA</CardCountry>
    <CardCountryCode>616</CardCountryCode>
    <CheckCVV/>
    <CheckCVVDescription/>
    <IssuerCountry>POLONIA</IssuerCountry>
    <IssuerCountryCode>616</IssuerCountryCode>
    <CompanyDescription>VISA</CompanyDescription>
    <CompanyCode>1</CompanyCode>
    <Commercial>N</Commercial>
    <ProductDescription>Visa Gold</ProductDescription>
    <ProductType>Credit</ProductType>
    <CheckDigit>OK</CheckDigit>
    <CheckDigitDescription>CheckDigit VALID</CheckDigitDescription>
    <CheckDate>OK</CheckDate>
    <CheckDateDescription>DATE VALID</CheckDateDescription>
    <EnrolledCode>E</EnrolledCode>
    <EnrolledDescription>CREDIT CARD UNVERIFIABLE</EnrolledDescription>
    <Prepaid/>
    <CardBIN/>
    <Token>44MRWNA710AC4448</Token>
    <TokenExpiryMonth>12</TokenExpiryMonth>
    <TokenExpiryYear>16</TokenExpiryYear>
  </GestPayS2S>
</CallRequestTokenS2SResult>
```

| name | description 
| ---- | -----------
| `TransactionType` | `REQUESTTOKEN`
| `TransactionResult` | `OK` or `KO`
| `TransactionErrorDescription` | transaction error description
| `AuthorizationErrorCode` | authorisation error code if an error occurred
| `AuthorizationResult` | Authorization result. It can be `OK` or `KO` or `NULL`
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
| `EnrolledCode` | 3D Secure enabled: <ul><li>`Y` enabled </li><li>`N` not enabled</li><li>`U` could not verify</li><li>`E` error: could not contact the credit card company</li></ul>  
| `EnrolledDescription` | enrolment description 
| `Prepaid` | indicates if the card is prepaid of not (`Y`, `N`, or empty)
| `Token` | the token value 
| `TokenExpiryMonth` | the token expiry month 
| `TokenExpiryYear` | the token expiry year 

