## CallReadTrxS2S 

This method will return transaction status. 

This method can be called with a mandatory `shopLogin`, then it's possible to pass `shopTransactionID` or `bankTransactionID` or both. If only `shopLogin` and `shopTransactionID` are passed, it’s mandatory that the last one is unique.

### Request details 

> Example request: 

```xml
<callReadTrxS2S>
    <shopLogin>9000001</shopLogin>
    <shopTransactionId>MYSHOP-4838</shopTransactionId>
    <bankTransactionId>334488931</bankTransactionId>
</callReadTrxS2S>
```


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |  
| `bankTransactionId` | ID of the transaction assigned by Gestpay | number | 18
| `shopTransactionId` | shop transaction ID value | string | 50

### Response details 

> Response example. Here the transaction is cancelled. 

```xml
<callReadTrxS2SResult>
  <GestPayS2S xmlns="">
    <TransactionType>QUERYTX</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <TransactionState>CAN</TransactionState>
    <ShopTransactionID>MYSHOP-4838</ShopTransactionID>
    <BankTransactionID>334488931</BankTransactionID>
    <AuthorizationCode>971773</AuthorizationCode>
    <Currency>242</Currency>
    <Country>ITALIA</Country>
    <Company>MASTERCARD SECURECODE</Company>
    <TDLevel>FULL</TDLevel>
    <Events>
      <event>
        <eventtype>AUT</eventtype>
        <eventamount>0.10</eventamount>
        <eventdate>19/08/16 16:13:14</eventdate>
      </event>
      <event>
        <eventtype>CAN</eventtype>
        <eventamount>0.10</eventamount>
        <eventdate>20/08/16 00:13:57</eventdate>
      </event>
    </Events>
    <Buyer>
      <BuyerName/>
      <BuyerEmail/>
    </Buyer>
    <RISK>
      <RiskResponseCode/>
      <RiskResponseDescription/>
    </RISK>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription>Transaction correctly processed</ErrorDescription>
    <AlertCode/>
    <AlertDescription/>
  </GestPayS2S>
</callReadTrxS2SResult>
```

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for ` CallReadTrxS2S`, the value will be `QUERYTX` | 
| `TransactionResult` | `OK` or `KO` | 
| `BankTransactionID` | Bank transaction ID assigned to the transaction 
| `ShopTransactionID` | Shop transaction ID value assigned to the transaction
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description
| `AuthorizationCode` | the authorisation code 
| `Currency` | the [currency code](#currency-codes)
| `Country` | the nationality of the card issuer
| `Company` | the card company: Visa, Mastercard, etc. 
| `TransactionState` | the status of the transaction: one of `AUT`, `MOV`, `CAN`, `REQ`, `STO`.   
| `AlertCode` | the violation code of the risk management criteria
| `AlertDescription` | the description connected to the `AlertCode` value  
| `TransKey` | Returns transaction ID value for 3D-Secure transactions
| `Buyer.BayerName` | Returns the name of the buyer 
| `Buyer.BuyerEmail` | Returns the email of the buyer 
| `Events`| contains `event` elements. see the next table for more.  

As said, `<Events>` can contain one or more `<event>` tags. the `<event>` tag is composed of: 

| name | description 
| ---- | -----------
| `eventtype` | one of `AUT`, `MOV`, `PRE`, `CAN`, `REQ`, `STO`. There will be a node event for each existing event regarding the transaction. 
| `eventamount` | Relative value of the event | 
| `eventdate` | event date | 
