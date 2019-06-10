## 3ds 2.0 fields <span class='beta'>sandbox</span>

<!--- 
  Questo documento è utilizzato (e quindi linkato) in:
  #callpagams2s (creazione pagamento S2S)
--->

<div id="3ds-2-0-fields"></div>

> `threeDsContainer` xml example: 

```xml
<threeDsContainer>
		<transTypeReq></transTypeReq>
		<acquirerBIN></acquirerBIN>
		<acquirerMerchantID></acquirerMerchantID>
		<exemption></exemption>
		<buyerDetails>
			<profileDetails>
				<cardholderID></cardholderID>
				<authData></authData>
				<authMethod></authMethod>
				<authTimeStamp></authTimeStamp>				
			</profileDetails>			
			<billingAddress>
				<city></city>
				<country></country>
				<line1></line1>
				<line2></line2>
				<line3></line3>
				<postCode></postCode>
				<state></state>
			</billingAddress>
			<shippingAddress>
				<city></city>
				<country></country>
				<line1></line1>
				<line2></line2>
				<line3></line3>
				<postCode></postCode>
				<state></state>
			</shippingAddress>
            <addrMatch></addrMatch>
			<cardHolder>
				<name></name>
				<email></email>
				<homePhone_cc></homePhone_cc>
				<homePhone_num></homePhone_num>
				<mobilePhone_cc></mobilePhone_cc>
				<mobilePhone_num></mobilePhone_num>
				<workPhone_cc></workPhone_cc>
				<workPhone_num></workPhone_num>
			</cardHolder>
			<accInfo>
				<chAccAgeInd></chAccAgeInd>
				<chAccChange></chAccChange>
				<chAccChangeInd></chAccChangeInd>
				<chAccDate></chAccDate>
				<chAccPwChange></chAccPwChange>
				<chAccPwChangeInd></chAccPwChangeInd>
				<nbPurchaseAccount></nbPurchaseAccount>
				<provisionAttemptsDay></provisionAttemptsDay>
				<txnActivityDay></txnActivityDay>
				<txnActivityYear></txnActivityYear>
				<paymentAccAge></paymentAccAge>
				<paymentAccInd></paymentAccInd>
				<shipAddressUsage></shipAddressUsage>
				<shipAddressUsageInd></shipAddressUsageInd>
				<shipNameIndicator></shipNameIndicator>
				<suspiciousAccActivity></suspiciousAccActivity>
			</accInfo>
		</buyerDetails>
		<merchantRiskIndicator>
			<deliveryEmailAddress></deliveryEmailAddress>
			<deliveryTimeframe></deliveryTimeframe>
			<giftCardAmount></giftCardAmount>
			<giftCardCount></giftCardCount>
			<giftCardCurr></giftCardCurr>
			<preOrderDate></preOrderDate>
			<preOrderPurchaseInd></preOrderPurchaseInd>
			<reorderItemsInd></reorderItemsInd>
			<shipIndicator></shipIndicator>
		</merchantRiskIndicator>
    <SDKDetails></SDKDetails>
	</threeDsContainer>
``` 

`threeDsContainer`'s fields are used from 3ds server to establish if the transaction could be a fraud and require or not the SCA. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `transTypeReq` | 1 | Type of transaction required to GestPay: complete payment process or only authentication (in case of third party Acquirer). <ul><li>`P` for Payment (default)</li><li>`A` for authentication only</li></ul>  |
| `acquirerBIN` | 11 |This field are required if `transTypeReq` value is `A`. Acquiring institution identification code as assigned by the DS receiving the AReq  message |
| `acquirerMerchantID ` | 35 | This field are required if `transTypeReq` value is `A`. Acquirer-assigned Merchant identifier. This may be the same value that is used in authorisation requests sent on behalf of the 3DS Requestor and is represented in ISO 8583 formatting requirements. | 
| `exemption` | string | Challenge management exemption. Possible values: <ul><li>SKIP: to ask exclude the possibility of exemption and require challange mandatory</li><li>FORCE: exemption requested by the merchant</li></ul>If not evaluated, the gestpay rule is applied |
| `buyerDetails` | object |  |
| <div class="inside-icon"></div> `profileDetails` | object | Contains option information about the merchant authenticated the cardholder before or during the transaction. |
| <div class="inside-icon second"></div> `cardholderID` | 64 | Additional information about the account optionally provided by the 3DS Requestor. |
| <div class="inside-icon second"></div> `authData` | string | Transaction authenticated data |
| <div class="inside-icon second"></div> `authMethod` | 2 | Transaction authenticated method <ul><li>01: No merchant authentication occurred (i.e. cardholder “logged in” as guest)</li> <li>02: Login to the cardholder account at the merchant system using merchant’s own credentials</li> <li>03: Login to the cardholder account at the merchant system using federated ID</li> <li>04: Login to the cardholder account at the merchant system using issuer credentials</li> <li>05: Login to the cardholder account at the merchant system using third-party authentication</li> <li>06: Login to the cardholder account at the merchant system using FIDO Authenticator</li> <li>07: Login to the cardholder account at the merchant system using FIDO Authenticator (FIDO assurance data signed)</li> <li>08: SRC Assurance Data</li> </ul> |
|  <div style="white-space: nowrap;"><div class="inside-icon second"></div> `authTimestamp`</div> | 2 | Transaction authenticated timestamp |
| <div class="inside-icon"></div> `billingAddress` | object | Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `city` | 50 | The city of the Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `country` | 32 | The country of the Cardholder billing address associated with the card used for this purchase. [See Paypal Country Codes table](#paypal-country-codes) |
| <div class="inside-icon second"></div> `line1` | 50 | First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `line2` | 50 | Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `line3` | 50 | Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `postCode` | 16 | ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. |
| <div class="inside-icon second"></div> `state` | 32 | The state or province of the Cardholder billing address associated with the card used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| <div class="inside-icon"></div> `shippingAddress` | object | Shipping address |
| <div class="inside-icon second"></div> `city` | 50 | City portion of the shipping address requested by the Cardholder. |
| <div class="inside-icon second"></div> `country` | 2 | Country of the shipping address requested by the Cardholder. [See Paypal Country Codes table](#paypal-country-codes) |
| <div class="inside-icon second"></div> `line1` | 50 | First line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| <div class="inside-icon second"></div> `line2` | 50 | Second line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| <div class="inside-icon second"></div> `line3` | 50 | Thrid line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| <div class="inside-icon second"></div> `postCode` | 16 | The ZIP or other postal code of the shipping address requested by the Cardholder. |
| <div class="inside-icon second"></div> `state` | 32 | The state or province of the shipping address associated with the card being used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| <div class="inside-icon"></div> `addrMatch` | 1 | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. `Y` for yes and `N` for no |
| <div class="inside-icon"></div> `cardholder` | object | Cardholder information. |
| <div class="inside-icon second"></div> `name` | 45 | Name of the Cardholder. |
| <div class="inside-icon second"></div> `Email` | 254 | The email address associated with the account that is either entered by the Cardholder, or is on file with the 3DS Requestor. The value should meet requirements of Section 3.4 of IETF RFC 5322 |
| <div class="inside-icon second"></div> `homePhone_cc` | 3 | The countryCode of the home phone number provided by the Cardholder. Refer to ITU-E.164 |
| <div class="inside-icon second"></div> `homePhone_num` | 15 | The home phone number provided by the Cardholder (without the countryCode). |
| <div class="inside-icon second"></div> `mobilePhone_cc` | 3 | The countryCode of the home mobile number provided by the Cardholder. Refer to ITU-E.164. |
| <div class="inside-icon second"></div> `mobilePhone_num` | 15 | The mobile phone number provided by the Cardholder (without the countryCode). |
| <div class="inside-icon second"></div> `workPhone_cc` | 32 | String containing the shipping name |
| <div class="inside-icon second"></div> `workPhone_num` | 15 | The work phone number provided by the Cardholder (without the countryCode). |
| <div class="inside-icon"></div> `acctInfo` | object | Additional information about the Cardholder’s account provided by the 3DS Requestor. |
| <div class="inside-icon second"></div> `chAccAgeInd` | 2 | Length of time that the cardholder has had the account with the 3DS Requestor. <ul><li>01 No account (guest check-out)</li><li>02 Created during this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</li></ul>
 |
| <div class="inside-icon second"></div> `chAccChange` | 8 | Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. Date format = YYYYMMDD |
| <div class="inside-icon second"></div> `chAccChangeInd` | 2 | Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added. <ul><li>01 Changed during this transaction</li><li>02 Less than 30 days</li><li>03 30−60 days</li><li>04 More than 60 days</li></ul> |
| <div class="inside-icon second"></div> `chAccDate` | 8 | Date that the cardholder opened the account with the 3DS Requestor. Date format = YYYYMMDD |
| <div class="inside-icon second"></div> `chAccPwChange` | 8 | Date that cardholder’s account with the 3DS Requestor had a password change or account reset. Date format = YYYYMMDD |
| <div class="inside-icon second"></div> `chAccPwChangeInd` | 2 | Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset. <ul></li><li>01 No change</li><li>02 Changed during this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</li></ul> |
| <div class="inside-icon second"></div> `nbPurchaseAccount` | 4 | Number of purchases with this cardholder account during the previous six months. |
| <div style="white-space: nowrap;"><div class="inside-icon second"></div> `provisionAttemptsDay`</div> | 3 | Number of Add Card attempts in the last 24 hours. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| <div class="inside-icon second"></div> `txnActivityDay` | 3 | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| <div class="inside-icon second"></div> `txnActivityYear` | 3 | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. Example values: <ul><li>2</li><li>02</li><li>002</li></ul> |
| <div class="inside-icon second"></div> `paymentAccAge` | 8 | Date that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. Date format = YYYYMMDD |
| <div class="inside-icon second"></div> `paymentAccInd` | 2 | Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor. <ul></li><li>01 No account (guest check-out)</li><li>02 During this transaction</li><li>03 Less than 30 days</li><li>04 30−60 days</li><li>05 More than 60 days</ul> |
| <div class="inside-icon second"></div> `shipAddressUsage` | 8 | Date when the shipping address used for this transaction was first used with the 3DS Requestor. Date format = YYYYMMDD |
| <div class="inside-icon second"></div> `shipAddressUsageInd` | 2 | Indicates when the shipping address used for this transaction was first used with the 3DS Requestor. <ul><li>01 This transaction</li><li>02 Less than 30 days</li><li>03 30−60 days</li><li>04 More than 60 days</li></ul> |
| <div class="inside-icon second"></div> `shipNameIndicator` | 2 | Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction. <ul><li>01 Account Name identical to shipping Name</li><li>02 Account Name different than shipping Name</li></ul> |
| <div style="white-space: nowrap;"><div class="inside-icon second"></div> `suspiciousAccActivity`</div> | 2 | Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account. <ul><li>01 No suspicious activity has been observed</li><li>02 Suspicious activity has been observed</li></ul> |
| `merchantRiskIndicator` | object | Merchant’s assessment of the level of fraud risk for the specific authentication for both the cardholder and the authentication being conducted. |
| <div class="inside-icon"></div> `deliveryEmailAddress` | 254 | For Electronic delivery, the email address to which the merchandise was delivered. |
| <div class="inside-icon"></div> `deliveryTimeframe` | 2 | Indicates the merchandise delivery timeframe. <ul><li>01 Electronic Delivery</li><li>02 Same day shipping</li><li>03 Overnight shipping</li><li>04 Two-day or more shipping</li></ul> |
| <div class="inside-icon"></div> `giftCardAmount` | 15 | For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45: Values accepted: <ul><li>123</li><li>0123</li><li>00123</li></ul> |
| <div class="inside-icon"></div> `giftCardCount` | 2 | For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased. |
| <div class="inside-icon"></div> `giftCardCurr` | 3 | For prepaid or gift card purchase, uicCode currency code. |
| <div class="inside-icon"></div> `preOrderDate` | 8 | For a pre-ordered purchase, the expected date that the merchandise will be available. Date format = YYYYMMDD |
| <div class="inside-icon"></div> `preOrderPurchaseInd` | 2 | Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. <ul><li>01 Merchandise available</li><li>02 Future availability</li></ul> |
| <div class="inside-icon"></div> `reorderItemsInd` | 2 | Indicates whether the cardholder is reordering previously purchased merchandise. <ul><li>01 First time ordered</li><li>02 Reordered</li></ul> |
| <div class="inside-icon"></div> `shipIndicator` | 2 | Indicates shipping method chosen for the transaction. Merchants must choose the Shipping Indicator code that most accurately describes the cardholder’s specific transaction, not their general business. If one or more items are included in the sale, use the Shipping Indicator code for the physical goods, or if all digital goods, use the Shipping Indicator code that describes the most expensive item. <ul><li>01 Ship to cardholder’s billing address</li><li>02 Ship to another verified address on file with merchant</li><li>03 Ship to address that is different than the cardholder’s billing address</li><li>04 “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields)</li><li>05 Digital goods (includes online services, electronic gift cards and redemption codes)</li><li>06 Travel and Event tickets, not shipped</li><li>07 Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.)</li></ul> |
| `SDKDetails` | string | Contains SDK data to be sent to ACS as base64-encoded string. <br>Include: <ul><li>DeviceData</li><li>SDKAppID</li><li>SDKReferenceNumber</li><li>SDKEphemeralPublicKey</li><li>MessageVersion</li></ul> |

<aside class="notice">SDKDetails must be included if you are integration Gestpay in app integration.</aside>


