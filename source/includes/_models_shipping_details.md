## ShippingDetails

> `shippingDetails` tag example: 

```xml
<shippingDetails>
  <shipToName>Marco Bianchi</shipToName>
  <shipToStreet>Via Milano 1</shipToStreet>
  <shipToCity>Torino</shipToCity>
  <shipToState>TO</shipToState>
  <shipToCountryCode>IT</shipToCountryCode>
  <shipToZip>10100</shipToZip>
  <shipToStreet2/>
</shippingDetails>
``` 

`shippingDetails` used for example in Paypal seller protection, contains the shipping address. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `shipToName` | 32 | String containing the shipping name |
| `shipToStreet` | 100 | String containing the shipping address |
| `shipToCity` | 40 | String containing the shipping city |
| `shipToState` | 40 | String containing the shipping state (see [Paypal State Codes table](#paypal-state-amp-province-codes)) |
| `shipToCountryCode` | 2 | String containing the shipping country code (see [Paypal Country Codes table](#paypal-country-codes)) |
| `shipToZip` | 20 | String containing the shipping zip |
| `shipToStreet2` | 100 | String containing an additional shipping address field | 