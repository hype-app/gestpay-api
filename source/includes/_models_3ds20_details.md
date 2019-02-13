## 3ds 2.0 fields

<!--- 
  Questo documento è utilizzato (e quindi linkato) in:
  #callpagams2s (creazione pagamento S2S)
  #encrypt (creazione pagamento con encrypt)
--->

> `3ds20Container` tag example: 



```xml
<3ds20Container>

</3ds20Container>
``` 

`3ds20Container`'s fields are used from 3ds server to establish if the transaction could be a fraud and require or not the SCA. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `transTypeReq` | 1 | Type of transaction required to GestPay: complete payment process or only authentication (in case of third paty Acquirer). `P` for Payment (default) and `A` for authentication only.  |
| `MerchantCardholderID` | 64 | Additional information about the account optionally provided by the 3DS Requestor. |
| `billAddrCity` | 50 | The city of the Cardholder billing address associated with the card used for this purchase. |
| `billAddrCountry` | 32 | The country of the Cardholder billing address associated with the card used for this purchase. [See Paypal Country Codes table](#paypal-country-codes) |
| `billAddrLine1` | 50 | First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| `billAddrLine2` | 50 | Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| `billAddrLine3` | 50 | Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| `billAddrPostCode` | 16 | ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. |
| `billAddrState` | 32 | The state or province of the Cardholder billing address associated with the card used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| `cardholderName` | 45 | Name of the Cardholder. |
| `cardholderEmail` | 254 | The email address associated with the account that is either entered by the Cardholder, or is on file with the 3DS Requestor. The value should meet requirements of Section 3.4 of IETF RFC 5322 |
| `cardholderHomePhone_ countryCode`| 3 | The countryCode of the home phone number provided by the Cardholder. Refer to ITU-E.164 |
| `cardholderHomePhone_ number` | 15 | The home phone number provided by the Cardholder (without the countryCode). |
| `cardholderMobilePhone_ countryCode` | 3 | The countryCode of the home mobile number provided by the Cardholder. Refer to ITU-E.164. |
| `cardholderMobilePhone_ number` | 15 | The mobile phone number provided by the Cardholder (without the countryCode). |
| `cardholderHomePhone_ countryCode` | 32 | String containing the shipping name |
| `cardholderWorkPhone` | 15 | The work phone number provided by the Cardholder (without the countryCode). |
| `shipAddrCity` | 50 | City portion of the shipping address requested by the Cardholder. |
| `shipAddrCountry` | 2 | Country of the shipping address requested by the Cardholder. [See Paypal Country Codes table](#paypal-country-codes) |
| `shipAddrLine1` | 50 | First line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| `shipAddrLine2` | 50 | Second line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| `shipAddrLine3` | 50 | Thrid line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| `shipAddrPostCode` | 16 | The ZIP or other postal code of the shipping address requested by the Cardholder. |
| `shipAddrState` | 32 | The state or province of the shipping address associated with the card being used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| `addrMatch` | 32 | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. `Y` for yes and `N` for no |