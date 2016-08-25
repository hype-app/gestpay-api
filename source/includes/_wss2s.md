# WsS2S API

*Server to Server* communication between merchants and GestPay is managed by consuming WSs2s [SOAP](http://www.w3.org/TR/soap/) web service.

Consuming WSs2s methods allow merchants to send requests and retrieve responses in XML format.

 - Test environment url:<br>
`https://testecomm.sella.it/gestpay/gestpayws/WSs2s.asmx?WSDL`


- Production environment url: <br>
`https://ecomms2s.sella.it/gestpay/gestpayws/WSs2s.asmx?WSDL`

<aside class="notice">To use *Server to Server* features, you must be authorized by Banca Sella or Easy Nolo.</aside>

## callPagamS2S

This service performs an authorization request. 

Merchants can use this method to perform the transaction, passing all the parameters useful to define all the transaction’s features. 

In bold, the mandatory attributes. 

### Request parameters

> request example: 

```xml
<callPagamS2S>
    <shopLogin>9000002</shopLogin>
    <uicCode>242</uicCode><!-- euro -->
    <amount>24.21</amount>
    <shopTransactionId>MYSHOP-0001</shopTransactionId>
    <cardNumber>1234567812345678</cardNumber>
    <expiryMonth>06</expiryMonth>
    <expiryYear>21</expiryYear>
    <buyerName>John Fitzgerald Kennedy</buyerName>
    <buyerEmail>johnny.kennedy@usa.com</buyerEmail>
    <languageId>2</languageId><!-- english -->
    <cvv>987</cvv>
    <customInfo></customInfo>
    <requestToken>MASKEDSPAN</requestToken>
    <itemType>physical</itemType>
    <shippingDetails>
        <shipToName>Jonny Kennedy</shipToName>
        <shipToStreet>83 Beals street</shipToStreet>
        <shipToCity>Brookline</shipToCity>
        <shipToState>MA</shipToState>
        <shipToCountryCode>US</shipToCountryCode>
        <shipToZip>02446</shipToZip>
    </shippingDetails>
</callPagamS2S>
```

> response example: 

```xml
<GestPayS2S xmlns="">
  <TransactionType>PAGAM</TransactionType>
  <TransactionResult>OK</TransactionResult>
  <ShopTransactionID>MYSHOP-0001</ShopTransactionID>
  <BankTransactionID>65</BankTransactionID>
  <AuthorizationCode>365530</AuthorizationCode>
  <Currency>242</Currency>
  <Amount>24.21</Amount>
  <Country>US</Country>
  <Buyer>
    <BuyerName>John Fitzgerald Kennedy</BuyerName>
    <BuyerEmail>johnny.kennedy@usa.com</BuyerEmail>
  </Buyer>
  <CustomInfo/>
  <TDLevel/>
  <ErrorCode>0</ErrorCode>
  <ErrorDescription>Transazione correttamente effettuata</ErrorDescription>
  <AlertCode/>
  <AlertDescription/>
  <TransactionKey>579428899</TransactionKey>
  <VbV>
    <VbVFlag>KO</VbVFlag>
    <VbVBuyer/>
    <VbVRisp/>
  </VbV>
</GestPayS2S>
```

| Name | Description | Data Type | max length |
| ---- | ----------- | --------- | ---------- |
| **`amount`** | the amount of the transaction | numeric | 9 | 
| `buyerEmail` |  buyer’s e-mail address. Using `:NOSEND:` before the email address, it' s possible to pass the email information but avoid to send an email to the buyer. | string | 50 |
| `buyerName` | buyer’s name | string | 50 | 
| **`cardNumber`** | card account number | string | 50 | 
| **`uicCode`** | currency code | number | 3 |
| `customInfo` | A string containing possible customised parameters (TODO ci devo mettere il riferimento ai parametri?) | string | 1000 | 
| `cvv` | security code of the card | string | 4 | 
| **`expiryMonth`** | card expiration month | string | 2 | 
| **`expiryYear`** | card expiration year | string | 2 | 
| `languageId` | language to use for e-mails to the buyer | number | 2 || `PARes` | encrypted string returned by Issuer  (for 3D-Secure   transactions only) | string | 4096 | 
| **`shopLogin`** | shopLogin value | string | 30 |
| **`shopTransactionId`** | shop transaction ID value | string | 30 | 
| `transKey` | transaction ID value for 3D-Secure transactions | number | 18 | 
| `requestToken` | `MASKEDPAN` for a Standard Token any other value for Custom  Token | string | 25 | 
| `tokenValue` | String containing the token value, in case of `PayPalBillingAgreement` this token value is the Token returned back from PayPal during the Billing Agreements | string | 25 | 
| `ClientIP` | For PayPal Billing Agreements it is required only in the "one click" mode transaction. <br> For AMEX transaction not in Euro, in this field the merchant could provide the client IP address to activate the Enhanced Authorization AAV | string | 45 |
| `itemType` | Item Category: `digital`/`physical` (If `physical` the `ShippingDetails` have to be filled) | string | 250 | 
| `shippingDetails` | contains the shipping address.

- children of `ShippingDetails` :

|               |           |          |       | 
| ------------- | --------- | -------- |------ |
| `shipToName` | shipping name | string | 32 | 
| `shipToStreet` | shipping address | string | 100 |
| `shipToState` | shipping state (see [State Codes - TODO]() table) | string | 40 | 
| `shipToCountryCode` | shipping country code (see [Country Codes - TODO]() table) | string | 2 | 
| `shipToZip` | the shipping Zip | string | 20 | 
| `shipToStreet2` | an additional field for the shipping  address | string | 200 | 

### Response fields 

| Name           | Description | 
| -------------- | ----------- |
| `TransactionType` | `PAGAM` in response to `CallPagamS2S` |
| `TransactionResult` | Returns transaction result with `OK` or `KO` |
| `shopTransactionID` | shop transaction ID value |
| `BankTransactionID` | ode given by bank to transaction | 
| `AuthorizationCode` | authorisation code | 
| `Currency` | [currency code](#currency-codes) |
| `Country` | nationality of the card issuer | 
| `CustomInfo` | custom parameters, if passed to the request | 
| `BuyerType` | Returns address name and e-mail of thebuyer divided as follows: <br> <ul><li>`BuyerEmail`: Returns the e-mail of the buyer</li><li>`BuyerName`: Returns the name of the buyer</li></ul> | 
| `ErrorCode` | a code related to the transaction result 
| `ErrorDescription` | the description connected to the ErrorCode value
| `Amount` | the amount of the transaction
| `TransKey` | transaction ID value for 3D-Secure transactions 
| `VBV` | Returns the values for 3D-Secure as follows: <br><ul><li>`VbVFlag`: 3D-secure flag (`OK` or `KO`)</li><li>`VbVBuyer`:returns the flag Full Verified by Visa transaction</li><li>`VbVRisp`: Returns the encrypted string obtained by 3D-Secure directory</li></ul> |
| `TDLevel` | Level of authentication for 3D-Secure transactions. `FULL` or `HALF`

<aside class="notice">other fields that are undocumented are unused. This applies also to fields described in the old version of the documentation.</aside>

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


| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 | 
| `shopTransactionId` | shop transaction ID value | string | 50 
| `amount` | amount |   number | 9 | 
| `uicCode` | [currency code](#currency-codes) | number | 3 
| `bankTransID` | BankTransactionID assigned to the transaction | number | 18 

### Response details 

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for `CallSettleS2S`, the value will be `Settle` | 
| `TransactionResult` | `OK` or `KO` | 
| `BankTransactionID` | Bank transaction ID assigned to the transaction 
| `ShopTransactionID` | Shop transaction ID value assigned to the transaction
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description

