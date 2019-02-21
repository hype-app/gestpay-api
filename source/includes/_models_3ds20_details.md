## 3ds 2.0 fields

<!--- 
  Questo documento è utilizzato (e quindi linkato) in:
  #callpagams2s (creazione pagamento S2S)
  #encrypt (creazione pagamento con encrypt)
  #post-payment-create (creazione pagamento con REST)
--->

> `3ds20Container` xml example: 

```xml
<3ds20Container>
  <transTypeReq />
  <acquirerBIN />
  <acquirerMerchantID />
  <MerchantCardholderID />
  <billAddrCity>Biella</billAddrCity>
  <billAddrCountry>IT</billAddrCountry>
  <billAddrLine1>via Roma, 1</billAddrLine1>
  <billAddrLine2>loc. S.Domenico</billAddrLine2>
  <billAddrLine3 />
  <billAddrPostCode>13900</billAddrPostCode>
  <billAddrState>BI</billAddrState>
  <cardholderName>NameSurname</cardholderName>
  <cardholderEmail>name@mail.com</cardholderEmail>
  <SecondaryEmail />
  <cardholderHomePhone_cc>39</cardholderHomePhone_cc>
  <cardholderHomePhone_num>3331234566</cardholderHomePhone_num>
  <cardholderMobilePhone_cc>39</cardholderMobilePhone_cc>
  <cardholderMobilePhone_num>3331234577</cardholderMobilePhone_num>
  <cardholderWorkPhone_cc>39</cardholderWorkPhone_cc>
  <cardholderWorkPhone_num>3331234588</cardholderWorkPhone_num>
  <shipAddrCity>Biella</shipAddrCity>
  <shipAddrCountry>IT</shipAddrCountry>
  <shipAddrLine1>via Nuova, 99</shipAddrLine1>
  <shipAddrLine2 />
  <shipAddrLine3 />
  <shipAddrPostCode>13900</shipAddrPostCode>
  <shipAddrState>BI</shipAddrState>
  <addrMatch>N</addrMatch>
  <acctInfo>
    <chAccAgeInd>05</chAccAgeInd>
    <chAccChange />
    <chAccChangeInd>02</chAccChangeInd>
    <chAccDate>20170131</chAccDate>
    <chAccPwChange />
    <chAccPwChangeInd>03</chAccPwChangeInd>
    <nbPurchaseAccount>4</nbPurchaseAccount>
    <provisionAttemptsDay>0</provisionAttemptsDay>
    <txnActivityDay>0</txnActivityDay>
    <txnActivityYear>005</txnActivityYear>
    <paymentAccAge />
    <paymentAccInd>05</paymentAccInd>
    <shipAddressUsage />
    <shipAddressUsageInd>03</shipAddressUsageInd>
    <shipNameIndicator>01</shipNameIndicator>
    <suspiciousAccActivity>01</suspiciousAccActivity>
  </acctInfo>
  <merchantRiskIndicator>
    <deliveryEmailAddress />
    <deliveryTimeframe>04</deliveryTimeframe>
    <giftCardAmount />
    <giftCardCount />
    <giftCardCurr />
    <preOrderDate />
    <preOrderPurchaseInd>01</preOrderPurchaseInd>
    <reorderItemsInd>01</reorderItemsInd>
    <shipIndicator>03</shipIndicator>
  </merchantRiskIndicator>
</3ds20Container>
``` 

> `3ds20Container` JSON example: <span id="3ds-details-json"></span>


```json
{ 
  "3ds20Container":{
    "transTypeReq":"P",
    "acquirerBIN": "",
    "acquirerMerchantID": "",
    "MerchantCardholderID":"",
    "billAddrCity":"Biella",
    "billAddrCountry":"IT",
    "billAddrLine1":"via Roma, 1",
    "billAddrLine2":"loc. S.Domenico",
    "billAddrLine3":"",
    "billAddrPostCode":"13900",
    "billAddrState":"BI",
    "cardholderName":"NameSurname",
    "cardholderEmail":"name@mail.com",
    "SecondaryEmail":"",
    "cardholderHomePhone_cc":"39",
    "cardholderHomePhone_num":"3331234566",
    "cardholderMobilePhone_cc":"39",
    "cardholderMobilePhone_num":"3331234577",
    "cardholderWorkPhone_cc":"39",
    "cardholderWorkPhone_num":"3331234588",
    "shipAddrCity":"Biella",
    "shipAddrCountry":"IT",
    "shipAddrLine1":"via Nuova, 99",
    "shipAddrLine2":"",
    "shipAddrLine3":"",
    "shipAddrPostCode":"13900",
    "shipAddrState":"BI",
    "addrMatch":"N",
    "acctInfo":{  
        "chAccAgeInd":"05",
        "chAccChange":"",
        "chAccChangeInd":"02",
        "chAccDate":"20170131",
        "chAccPwChange":"",
        "chAccPwChangeInd":"03",
        "nbPurchaseAccount":"4",
        "provisionAttemptsDay":"0",
        "txnActivityDay":"0",
        "txnActivityYear":"005",
        "paymentAccAge":"",
        "paymentAccInd":"05",
        "shipAddressUsage":"",
        "shipAddressUsageInd":"03",
        "shipNameIndicator":"01",
        "suspiciousAccActivity":"01"
    },
    "merchantRiskIndicator":{  
        "deliveryEmailAddress":"",
        "deliveryTimeframe":"04",
        "giftCardAmount":"",
        "giftCardCount":"",
        "giftCardCurr":"",
        "preOrderDate":"",
        "preOrderPurchaseInd":"01",
        "reorderItemsInd":"01",
        "shipIndicator":"03"
    }
  }
}
``` 


`3ds20Container`'s fields are used from 3ds server to establish if the transaction could be a fraud and require or not the SCA. 

The JSON example can be found [here](#3ds-details-json)

| Name | max length | description |
| ---- | :--------: | ----------- |
| `transTypeReq` | 1 | Type of transaction required to GestPay: complete payment process or only authentication (in case of third party Acquirer). `P` for Payment (default) and `A` for authentication only.  |
| **`acquirerBIN`** | 11 |This field are required only if `transTypeReq` value is `A`. Acquiring institution identification code as assigned by the DS receiving the AReq  message |
| **`acquirerMerchantID `** | 35 | This field are required only if `transTypeReq` value is `A`. Acquirer-assigned Merchant identifier. This may be the same value that is used in authorisation requests sent on behalf of the 3DS Requestor and is represented in ISO 8583 formatting requirements. | 
| `MerchantCardholderID` | 64 | Additional information about the account optionally provided by the 3DS Requestor. |
| **`billAddrCity`** | 50 | The city of the Cardholder billing address associated with the card used for this purchase. |
| **`billAddrCountry`** | 32 | The country of the Cardholder billing address associated with the card used for this purchase. [See Paypal Country Codes table](#paypal-country-codes) |
| **`billAddrLine1`** | 50 | First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| **`billAddrLine2`** | 50 | Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| **`billAddrLine3`** | 50 | Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase. |
| **`billAddrPostCode`** | 16 | ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase. |
| **`billAddrState`** | 32 | The state or province of the Cardholder billing address associated with the card used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| **`cardholderName`** | 45 | Name of the Cardholder. |
| **`cardholderEmail`** | 254 | The email address associated with the account that is either entered by the Cardholder, or is on file with the 3DS Requestor. The value should meet requirements of Section 3.4 of IETF RFC 5322 |
| **`cardholderHomePhone_cc`** | 3 | The countryCode of the home phone number provided by the Cardholder. Refer to ITU-E.164 |
| **`cardholderHomePhone_num`** | 15 | The home phone number provided by the Cardholder (without the countryCode). |
| **`cardholderMobilePhone_cc`** | 3 | The countryCode of the home mobile number provided by the Cardholder. Refer to ITU-E.164. |
| **`cardholderMobilePhone_num`** | 15 | The mobile phone number provided by the Cardholder (without the countryCode). |
| **`cardholderWorkPhone_cc`** | 32 | String containing the shipping name |
| **`cardholderWorkPhone_num`** | 15 | The work phone number provided by the Cardholder (without the countryCode). |
| **`shipAddrCity`** | 50 | City portion of the shipping address requested by the Cardholder. |
| **`shipAddrCountry`** | 2 | Country of the shipping address requested by the Cardholder. [See Paypal Country Codes table](#paypal-country-codes) |
| **`shipAddrLine1`** | 50 | First line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| **`shipAddrLine2`** | 50 | Second line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| **`shipAddrLine3`** | 50 | Thrid line of the street address or equivalent local portion of the shipping address requested by the Cardholder. |
| **`shipAddrPostCode`** | 16 | The ZIP or other postal code of the shipping address requested by the Cardholder. |
| **`shipAddrState`** | 32 | The state or province of the shipping address associated with the card being used for this purchase. Should be the state, province or regional code (country subdivision code, [see Paypal State Codes table](#paypal-country-codes))  |
| **`addrMatch`** | 32 | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. `Y` for yes and `N` for no |
| `acctInfo` | object | Additional information about the Cardholder’s account provided by the 3DS Requestor. |
| `merchantRiskIndicator` | object | Merchant’s assessment of the level of fraud risk for the specific authentication for both the cardholder and the authentication being conducted. |

#### `acctInfo`'s fields. 

All these fields are optional but strongly recommended to include. 

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

#### `merchantRiskIndicator`'s fields. 

All these fields are optional but strongly recommended to include. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `deliveryEmailAddress` | 254 | For Electronic delivery, the email address to which the merchandise was delivered. |
| `deliveryTimeframe` | 2 | Indicates the merchandise delivery timeframe. <ul><li>01 Electronic Delivery</li><li>02 Same day shipping</li><li>03 Overnight shipping</li><li>04 Two-day or more shipping</li></ul> |
| `giftCardAmount` | 15 | For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45: Values accepted: <ul><li>123</li><li>0123</li><li>00123</li></ul> |
| `giftCardCount` | 2 | For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased. |
| `giftCardCurr` | 3 | For prepaid or gift card purchase, uicCode currency code. |
| `preOrderDate` | 8 | For a pre-ordered purchase, the expected date that the merchandise will be available. Date format = YYYYMMDD |
| `preOrderPurchaseInd` | 2 | Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. <ul><li>01 Merchandise available</li><li>02 Future availability</li></ul> |
| `reorderItemsInd` | 2 | Indicates whether the cardholder is reordering previously purchased merchandise. <ul><li>01 First time ordered</li><li>02 Reordered</li></ul> |
| `shipIndicator` | 2 | Indicates shipping method chosen for the transaction. Merchants must choose the Shipping Indicator code that most accurately describes the cardholder’s specific transaction, not their general business. If one or more items are included in the sale, use the Shipping Indicator code for the physical goods, or if all digital goods, use the Shipping Indicator code that describes the most expensive item. <ul><li>01 Ship to cardholder’s billing address</li><li>02 Ship to another verified address on file with merchant</li><li>03 Ship to address that is different than the cardholder’s billing address</li><li>04 “Ship to Store” / Pick-up at local store (Store address shall be populated in shipping address fields)</li><li>05 Digital goods (includes online services, electronic gift cards and redemption codes)</li><li>06 Travel and Event tickets, not shipped</li><li>07 Other (for example, Gaming, digital services not shipped, emedia subscriptions, etc.)</li></ul> |


