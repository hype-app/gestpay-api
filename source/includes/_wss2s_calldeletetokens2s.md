## callDeleteTokenS2S 

Merchants can use this method to disable a token linked to a Credit Card or to cancel a PayPal Billing Agreement. Merchants belonging to a group are allowed to delete also tokens created by other merchants of the same group.

### Request details 

> Request example: 

```xml
<callDeleteTokenS2S>
  <shopLogin>90000001</shopLogin>
  <tokenValue>1234WJFXABCD5678</tokenValue>
</callDeleteTokenS2S>
```

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| `shopLogin` | the merchant's code | string | 30 |  
| `tokenValue` | Token value to delete | string | 25 

### Response details 

> Response example: 

```xml
<callDeleteTokenS2SResult>
  <GestPayS2S xmlns="">
    <TransactionType>DisableToken</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription />
  </GestPayS2S>
</callDeleteTokenS2SResult>
```

| parameter name | description |  
| -------------- | ----------- |  
| `TransactionType` | `DisableToken`
| `TransactionResult` | `OK` or `KO`
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description