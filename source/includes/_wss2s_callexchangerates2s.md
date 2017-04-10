## CallExchangeRateS2S

Merchants can use this method to retrieve the exchange rate for a different currency, in the 7 previous days. 

### Request details 

> Request example:

```xml
<eco:callExchangeRateS2S>
    <eco:shopLogin>GESPAY65987</eco:shopLogin>
    <eco:uicCode>1</eco:uicCode>
    <eco:isoCode>USD</eco:isoCode>
    <eco:numericIsoCode>840</eco:numericIsoCode>
</eco:callExchangeRateS2S>
```
Parameters in **bold** are mandatory. 

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| **`shopLogin`** | the merchant's code | string | 30
| `uicCode` | the [UIC code](http://api.gestpay.it/#currency-codes) | string | 10
| `isoCode` | the [ISO code](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) - see the `Code` column. | string | 10
| `numericIsoCode` | the [ISO code](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) - see the `Num` column. | string | 10

<aside class="active">
The three parameters <code>UICCode</code>, <code>ISOCode</code> and <code>NumericISOCode</code> are individually optional, but you must select at least one. 
</aside>
 
### Response details

> Response example: 

```xml
<callExchangeRateS2SResult>
  <GestPayS2S xmlns="">
      <TransactionType>ExchangeRate</TransactionType>
      <TransactionResult>OK</TransactionResult>
      <ErrorCode>0</ErrorCode>
      <ErrorDescription>Transazione correttamente effettuata</ErrorDescription>
      <ExchangeRates>
          <ExchangeRate>
              <UICCode>1</UICCode>
              <ISOCode>USD</ISOCode>
              <NumericISOCode>840</NumericISOCode>
              <ExchangeRate>1,0639</ExchangeRate>
              <CreditDate DateFormat="DD/MM/YYYY">07/04/2017</CreditDate>
          </ExchangeRate>
          <ExchangeRate>
              <UICCode>1</UICCode>
              <ISOCode>USD</ISOCode>
              <NumericISOCode>840</NumericISOCode>
              <ExchangeRate>1,0647</ExchangeRate>
              <CreditDate DateFormat="DD/MM/YYYY">06/04/2017</CreditDate>
          </ExchangeRate>
          ...
      </ExchangeRates>
  </GestPayS2S>
  </callExchangeRateS2SResult>
```


| name | description 
| ---- | -----------
| `TransactionType` | `ExchangeRate`
| `TransactionResult` | `OK` or `KO`
| `ErrorCode` | error code occurred 
| `ErrorDescription` | error description relative to error code
| `ExchangeRates` | Tag for list of exchange rates
| `ExchangeRate` | Tag for exchange rate detail
| `UICCode` | UIC code 
| `ISOCode` | ISO code
| `NumericISOCode` | Numeric ISO code
| `ExchangeRate` | Value of exchange rate
| `CreditDate` | Day of validity for this Exchange Rate