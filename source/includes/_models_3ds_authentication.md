## 3ds 2.0 authentication <span class='beta'>BETA</span>

<!--- 
  Questo documento è utilizzato (e quindi linkato) in:
  #callpagams2s (creazione pagamento S2S)
--->

> `threeDsAuthResult` xml example: 

```xml
<threeDsAuthResult>
  <authenticationStatus />
  <XID />
  <AV />
  <ECI />
  <AVAlgorithm />
</threeDsAuthResult>
``` 

> `threeDsContainer` JSON example: 


```json
{ 
  "threeDsAuthResult":{
    "authenticationStatus": "",
    "XID": "",
    "AV": "",
    "ECI": "",
    "AVAlgorithm": ""
  }
}
``` 


`threeDsAuthResult` rappresent 3ds authentication status. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `authenticationStatus ` | 1 | Only if the full3D value is yes, empty otherwise. `Y` if authentication has been successful
| `XID` | 36 |Transaction unique id, valorized only if the full3D and authenticationStatus fields value is yes. 
| `CAVV` | 28 | Cardholder Authentication Verification Value, valorized only if the full3D and authenticationStatus fields value is yes. 
| `ECI` | 2 | Electronic Commerce Indicator, valorized only if the full3D and authenticationStatus fields value is yes. 
| `CAVValgorithm` | 2 | Cardholder Authentication Verification Algoritm, valorized only if the full3D and authenticationStatus fields value is yes. 


