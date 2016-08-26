
## CallSettleS2S

This is the financial confirmation operation which may follow a positive authorisation.

It exists only for merchants with a M.O.T.O. configuration when a separation between the authorisation and the settlement phase is anticipated.

Merchants can use this method to settle the transaction. **It's possible to settle only a part of the amount, so the amount value has to be passed**. 

### Request details

> Request example: 

```xml
<callSettleS2S>
		<shopLogin>9000001</shopLogin>
		<uicCode>242</uicCode><!-- Euro -->
		<amount>55.00</amount>
		<shopTransID>MYSHOP-00142</shopTransID>
		<bankTransID>159247522</bankTransID>
</callSettleS2S>
```


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |  
| `amount` | amount |   number | 9 | 
| `uicCode` | [currency code](#currency-codes) | number | 3 
| `bankTransID` | BankTransactionID assigned to the transaction | number | 18
| `shopTransID` | shop transaction ID value | string | 50 

### Response details 

> Response example: 

```xml
<callSettleS2SResponse xmlns="https://ecomms2s.sella.it/">
		<callSettleS2SResult>
				<GestPayS2S>
						<TransactionType>Settle</TransactionType>
						<TransactionResult>OK</TransactionResult>
						<ShopTransactionID>MYSHOP-00142</ShopTransactionID>
						<BankTransactionID>159247522</BankTransactionID>
						<ErrorCode>0</ErrorCode>
						<ErrorDescription>Transazione correttamente effettuata</ErrorDescription>
				</GestPayS2S>
		</callSettleS2SResult>
</callSettleS2SResponse>
```

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for `CallSettleS2S`, the value will be `Settle` | 
| `TransactionResult` | `OK` or `KO` | 
| `BankTransactionID` | Bank transaction ID assigned to the transaction 
| `ShopTransactionID` | Shop transaction ID value assigned to the transaction
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description
