## WSCryptDecrypt API

Axerve E-commerce Solutions `WsCryptDecrypt` web service is exposed at following URLs: 

| environment | URL | 
| ----------- | --- | 
| test | `https://sandbox.gestpay.net/gestpay/GestPayWS/WsCryptDecrypt.asmx?wsdl` |
| production | `https://ecommS2S.sella.it/gestpay/GestPayWS/WsCryptDecrypt.asmx?wsdl` |

WSCryptDecrypt web service is available on production and test servers and does not require any installation on the merchant’s server.

The merchant must implement – in the page(s) of the virtual store configured to handle payments – a call to the webservice which handles requests to use the Axerve E-commerce Solutions encryption service.

To request the encryption service you can call the [Encrypt](#encrypt) method.

If the encryption operation is concluded correctly (`TransactionResult` tag value with OK), the encrypted data string returned by Axerve E-commerce Solutions will be available by reading the value of the `CryptDecryptString` tag.

If not, the values of the `ErrorCode` and `ErrorDescription` tag will make it possible to identify the reasons that prevented the encryption operation. To request the decryption service it is necessary to call the `Decrypt` method, passing the `shopLogin` and `CryptedString` tags with the values communicated by Axerve E-commerce Solutions.

The information containing the transaction result will be available by reading the information in the XML response file corresponding to the result of the transaction.


