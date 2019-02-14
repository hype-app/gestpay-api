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

#### `acctInfo`'s fields. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `chAccAgeInd` | 2 | Length of time that the cardholder has had the account with the 3DS Requestor. <ul><li>01 No account (guest check-out)</li><li>02 Created during this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</li></ul>
 |
| `chAccChange` | 8 | Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. Date format = YYYYMMDD |
| `chAccChangeInd` | 2 | Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <ul><li>01 Changed during this transaction</li><li>02 Less than 30 days</li><li>03 30−60 days</li><li>04 More than 60 days</li></ul> |
| `chAccDate` | 8 | Date that the cardholder opened the account with the 3DS Requestor. Date format = YYYYMMDD |
| `chAccPwChange` | 8 | Date that cardholder’s account with the 3DS Requestor had a password change or account reset. Date format = YYYYMMDD |
| `chAccPwChangeInd` | 2 | Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset. <ul></li><li>01 No change</li><li>02 Changed during this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</li></ul> |
| `nbPurchaseAccount` | 4 | Number of purchases with this cardholder account during the previous six months. |
| `provisionAttemptsDay` | 3 | Number of Add Card attempts in the last 24 hours. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| `txnActivityDay` | 3 | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| `txnActivityYear` | 3 | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| `paymentAccAge` | 8 | Date that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Date format = YYYYMMDD |
| `paymentAccInd` | 2 | Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <ul></li><li>01 No account (guest check-out)</li><li>02 During this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</ul> |
| `shipAddressUsage` | 8 | Date when the shipping address used for this transaction was first used with the 3DS Requestor. Date format = YYYYMMDD |
| `shipAddressUsageInd` | 2 | Indicates when the shipping address used for this transaction was first used with the 3DS Requestor. <ul><li>01 This transaction</li><li>02 Less than 30 days</li><li>03 30−60 days</li><li>04 More than 60 days</li></ul> |
| `shipNameIndicator` | 2 | Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. <ul><li>01 Account Name identical to shipping Name</li><li>02 Account Name different than shipping Name</li></ul> |
| `suspiciousAccActivity` | 2 | Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account. <ul><li>01 No suspicious activity has been observed</li><li>02 Suspicious activity has been observed</li></ul> |

