## callUpdateTokenS2S 

Merchants can use this method to update the expiry date of a token.

Merchants belonging to a group are allowed to update also tokens created by other merchants of the same group. If a merchant belongs to a group, can update also token created by the other group's merchants.


### Request details 

> Request example: 

```xml
<callUpdateTokenS2S>
  <shopLogin>90000001</shopLogin>
  <tokenValue>1234WJFXABCD5678</tokenValue>
  <expiryMonth>12</expiryMonth>
  <expiryYear>21</expiryYear>
  <withAut>Y</withAut>
</callUpdateTokenS2S>
```

Mandatory parameters are in **bold**. 

| parameter name | description | type | length | 
| -------------- | ----------- | -----|--------| 
| **`shopLogin`** | the merchant's code | string | 30 |  
| **`tokenValue`** | Token value to update | string | 25 
| **`expiryMonth`** | Assigns card expiration month | string | 2
| **`expiryYear`** | Assigns card expiration year | string | 2 
| **`withAut`** | tries also to authorize the card. <br> `Y` on `N` | string | 1

### Response details 

> Response example: 

```xml
<callUpdateTokenS2SResult>
  <GestPayS2S xmlns="">
    <TransactionType>UpdateToken</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription />
  </GestPayS2S>
</callUpdateTokenS2SResult>
```

| parameter name | description |  
| -------------- | ----------- |  
| `TransactionType` | `UpdateToken`
| `TransactionResult` | `OK` or `KO`
| `ErrorCode` | transaction error code | 
| `ErrorDescription` | transaction error description