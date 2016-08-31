## CallIdealListS2S

Merchants can use this method to have the list of the Banks available for their customers for IDeal payment method.

### Request details

> Request example: 

```xml
<CallIdealListS2S>
  <shopLogin>900000001</shopLogin>
</CallIdealListS2S>
```



| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 | 



### Response details 

> Response example: 

```xml
<CallIdealListS2SResult>
    <GestPayS2S xmlns="">
        <TransactionType>RequestIdealBankList</TransactionType>
        <TransactionResult>OK</TransactionResult>
        <ErrorCode>0</ErrorCode>
        <ErrorDescription />
        <BankList>
          <Bank>
            <BankCode>0001</BankCode>
            <BankName>E-Corp</BankName>
          </Bank>
          <Bank>
            ... 
          </Bank>
        </BankList>
    </GestPayS2S>
</CallIdealListS2SResult>
```

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for ` CallIdealListS2S`, the value will be `RequestIdealBankList` | 
| `TransactionResult` | `OK` or `KO` |  
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description
| `BankList.Bank.BankCode` | Returns Ideal Bank List, for each bank returns the Bank Code 
| `BankList.Bank.BankName` | Returns Ideal Bank List, for each bank returns the Bank Name 
