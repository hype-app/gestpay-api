## CallVerifycardS2S

Merchants can use this method to check the Credit Card. 

### Request details 

> Request example: 

```xml
<callVerifycardS2S>
		<shopLogin>GEST13578</shopLogin>
		<shopTransactionId>MY-SHOP1234</shopTransactionId>
		<cardNumber>1234567812345678</cardNumber>
		<expMonth>12</expMonth>
		<expYear>21</expYear>
		<CVV2>931</CVV2>
</callVerifycardS2S>
```


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |
| `shopTransactionId` | shop transaction ID value | string | 50  
| `cardNumber` | credit card number | string | 20 | 
| `expMonth` | card expiration month | string | 2
| `expYear` | card expiration year | string | 2 
| `CVV2` | security code of the card | string | 4
 
### Response details

> Response example: 

```xml
<callVerifycardS2SResult>
	<GestPayS2S xmlns="">
		<TransactionType>VerCard</TransactionType>
		<TransactionResult>OK</TransactionResult>
		<Country>Italia</Country>
		<Company>MasterCard</Company>
		<ErrorCode>0</ErrorCode>
		<ErrorDescription></ErrorDescription>
	</GestPayS2S>
</callVerifycardS2SResult>
```

| name | description 
| ---- | -----------
| TransactionType | `VerCard`
| TransactionRsult | `OK` or `KO`
| ErrorCode | error code 
| ErrorDescription | error description 
| Country | nationality of the card issuer 
| Company | card company 
