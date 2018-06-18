### CallMyBankListS2S

Merchants can use this method to have the list of the Banks available for their customers for MyBank payment method.

#### Request details

> Request example: 

```xml
<CallMyBankListS2S>
  <shopLogin>900000001</shopLogin>
  <langugeId>1</languageId>
</CallMyBankListS2S>
```

Mandatory parameters are in **bold**.

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| **`shopLogin`** | the merchant's code | string | 30 | 
| **`languageId`** | Assigns the response language of the Bank list. Values: <br><ul><li>`1` Italian</li><li>`2` English</li><li>`3` Spanish</li><li>`4` French</li><li>`5` German</li></ul> | number | 2 | 



#### Response details 

> Response example: 

```xml
<CallMyBankListS2SResult>
    <GestPayS2S xmlns="">
        <TransactionType>MyBank</TransactionType>
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
</CallMyBankListS2SResult>
```

| parameter name | description |  
| -------------- | ----------- | 
| `TransactionType` | for `callMyBankListS2S`, the value will be `MyBank` | 
| `TransactionResult` | `OK` or `KO` |  
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description
| `BankList.Bank.BankCode` | Returns MyBank Bank List, for each bank returns the Bank Code 
| `BankList.Bank.BankName` | Returns MyBank Bank List, for each bank returns the Bank Name 
