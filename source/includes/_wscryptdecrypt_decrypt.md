
## Decrypt

> A `Decrypt` request: 

```xml
 <Decrypt>
  <shopLogin>9000001</shopLogin>
  <CryptedString>HT987YU....</CryptedString>
  ...
 </Decrypt>
```

GestPay communicates the payment transaction result to the merchant through an encrypted string (parameter b of the call to the url preconfigured by the merchant) with a set of transaction's informations.

To Decrypt the data it is necessary to use Decrypt method passing the following parameters, the tags' names are case sensitive:

| Name | max length | description |
| ---- | :--------: | ----------- |
| `shopLogin` | 30 | Shop Login | 
| `CryptedString` | ...... | Encrypted string get by parameter b of the call to the url preconfigured by the merchant | 

