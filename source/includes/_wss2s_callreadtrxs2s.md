## CallReadTrxS2S 

This method will return transaction status. 

This method can be called with a mandatory `shopLogin`, then it's possible to pass `shopTransactionID` or `bankTransactionID` or both. If only `shopLogin` and `shopTransactionID` are passed, it’s mandatory that the last one is unique.

### Request details 
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
| `Events.eventtype` | one of `AUT`, `MOV`, `CAN`, `REQ`, `STO`. There will be a node event for each existing event regarding the transaction. 
| `Events.eventamount` | Relative value of the event | 
| `Events.eventdate` | event date | 
| `Company` | the card company: Visa, Mastercard, etc. 
| `TransactionState` | the status of the transaction: one of `AUT`, `MOV`, `CAN`, `REQ`, `STO`.   
| `AlertCode` | the violation code of the risk management criteria
| `AlertDescription` | the description connected to the `AlertCode` value  
| `TransKey` | Returns transaction ID value for 3D-Secure transactions
| `Buyer.BayerName` | Returns the name of the buyer 
| `Buyer.BuyerEmail` | Returns the email of the buyer 

