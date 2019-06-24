
### Encrypt result 

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
| `threeDS` | Object | Object with information about 3ds authentication (described below)

The threeDS object contains the following object:

- `AuthenticationResult` with those children

| Name | max length | description |
| ---- | :--------: | ----------- |
|  `authenticationLevel` | 2  | Transaction is successfully athenticated by 3DS:<ul><li>1H: 3DS 1.0 half</li><li>1F: 3DS 1.0 full</li><li>2F: 3DS 2.0 frictionless</li><li>2C: 3DS 2.0 challenge</li><li>2E: 3DS 2.0 exemption</li></ul>
|  `authenticationStatus`  | 1 | Status of authentication
|  `XID`  | 36 | Transaction unique id assigned by Directory Server
|  `AV`  | 28 | Cardholder Authentication Verification Value, proof of authentication done
|  `ECI` | 2 | Electronic Commerce Indicator 
|  `AVAlgorithm`  | 2 | Cardholder Authentication Verification Algoritm, valorized only with 3DS 1.0
| `transDetails` | object | 
| <div class="inside-icon"></div> `authData` | string | Transaction Authentication Data
| <div class="inside-icon"></div> `authMethod` | 2 | Transaction Authentication Method
| <div style="white-space: nowrap;"><div class="inside-icon"></div> `authTimestamp`</div> | 12 | Transaction Authentication Timestamp
| <div class="inside-icon"></div> `acsID` | 36 | ACS Transaction ID
