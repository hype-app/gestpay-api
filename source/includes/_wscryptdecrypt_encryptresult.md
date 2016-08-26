
## Encrypt result 

> A succesful `Encrypt` call would be like this: 

```xml
<EncryptResult>
  <GestPayCryptDecrypt>
    <TransactionType>ENCRYPT</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <CryptDecryptString>897543..</CryptDecryptString>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription/>
  </GestPayCryptDecrypt>
</EncryptResult>
```

`Encrypt` web service returns back the following information in xml: 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `TransactionType` |  7  | Decode the transaction type request (`DECRYPT`, `ENCRYPT`) |
| `TransactionResult` | 2 | Transaction result (`OK`/ `KO`) | 
| `CryptDecryptString` | ..... | Encrypted string get by parameter set in the xml request | 
| `ErrorCode` | 9 | Error code | 
| `ErrorDescription` | 255 | Error description | 
