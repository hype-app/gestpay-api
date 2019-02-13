## 3ds 2.0 fields

<!--- 
  Questo documento è utilizzato (e quindi linkato) in:
  #callpagams2s (creazione pagamento S2S)
  #encrypt (creazione pagamento con encrypt)
--->

> `3ds20Container` tag example: 



```xml
<3ds20Container>

</shippingDetails>
``` 

`3ds20Container`'s fields are used from 3ds server to establish if the transaction could be a fraud and require or not the SCA. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `shipToName` | 32 | String containing the shipping name |