## CallRefundS2S

Merchants can use this method to perform a partial or complete transaction amount refund.

### Request details

> Request example: 

```xml
<callRefundS2S>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode><!-- Euro -->
  <amount>55.00</amount>
  <shopTransactionId>MYSHOP-00142</shopTransactionId>
  <bankTransactionId>159247522</bankTransactionId>
  <RefundReason>item our of stock</RefundReason>
  <chargeBackFraud>N</chargeBackFraud>
</callRefundS2S>
```

Mandatory parameters are in **bold**.

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| **`shopLogin`** | the merchant's code | string | 30 |  
| **`bankTransactionId`** | ID of the transaction assigned by Gestpay | number | 18
| **`shopTransactionId`** | shop transaction ID value | string | 50
| **`amount`** | the amount to refund | number | 9 
| **`uicCode`** | [currency code](#currency-codes) | numeric | 3 
| `RefundReason` | a free-text reason for the refund. Used with fraud protection. | string | 50 
| `chargeBackFraud` | Flag for risk: <ul><li>`Y` - chargeback for fraud</li><li>`N` - chargeback not for a fraud</li></ul>

<aside class="active">
A transaction is uniquely identified by <code>shopLogin</code> + <code>bankTransactionId</code>. However, if the <code>shopTransactionId</code> is unique, the merchant can send just <code>shopLogin</code> + <code>shopTransactionId</code>. 
</aside>

### Response details 

> Response example: 

```xml
<callRefundS2SResponse xmlns="https://ecomms2s.sella.it/">
  <callRefundS2SResult>
    <GestPayS2S>
      <TransactionType>Refund</TransactionType>
      <TransactionResult>OK</TransactionResult>
      <ShopTransactionID>MYSHOP-00142</ShopTransactionID>
      <BankTransactionID>159247522</BankTransactionID>
      <ErrorCode>0</ErrorCode>
      <ErrorDescription/>
    </GestPayS2S>
  </callRefundS2SResult>
</callRefundS2SResponse>
```

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for `CallRefundS2S`, the value will be `Refund` | 
| `TransactionResult` | `OK` or `KO` | 
| `BankTransactionID` | Bank transaction ID assigned to the transaction 
| `ShopTransactionID` | Shop transaction ID value assigned to the transaction
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description

