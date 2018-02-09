# Errors

<aside class="notice">The error codes returned by GestPay are constantly updated.</aside>

| Code | Description                                                                                                        |
|------|--------------------------------------------------------------------------------------------------------------------|
| 0    | Transaction correctly processed                                                                                    |
| 10   | Payment page correctly loaded                                                                                      |
| 57   | Blocked credit card                                                                                                |
| 58   | Confirmed amount exceeds authorized amount                                                                         |
| 63   | Demand for settlement of one nonexistent transaction                                                               |
| 64   | Expired preauthorization                                                                                           |
| 65   | Wrong currency                                                                                                     |
| 66   | Preauthorization already notified                                                                                  |
| 74   | Authorization denied                                                                                               |
| 97   | Authorization denied                                                                                               |
| 100  | Transaction interrupted by bank authorizative system                                                               |
| 150  | Wrong merchant configuration in bank authorizative system                                                          |
| 208  | Wrong expiry date                                                                                                  |
| 212  | Bank authorizative system not available                                                                            |
| 251  | Insufficient credit                                                                                                |
| 401  | Call credit card company                                                                                           |
| 402  | Call credit card company                                                                                           |
| 403  | Technical error                                                                                                    |
| 404  | Collect card                                                                                                       |
| 405  | Authorization refused by credit card companies                                                                     |
| 406  | Technical error                                                                                                    |
| 409  | Technical error                                                                                                    |
| 412  | Technical error                                                                                                    |
| 413  | Technical error                                                                                                    |
| 414  | Card not recognized                                                                                                |
| 415  | Technical error in connection with Credit Card Company network                                                     |
| 416  | Pin errato                                                                                                         |
| 417  | Authorization denied                                                                                               |
| 418  | Network not available                                                                                              |
| 419  | Wrong transaction date                                                                                             |
| 420  | Wrong card date                                                                                                    |
| 430  | Technical error                                                                                                    |
| 431  | Technical error in connection with Credit Card Company network                                                     |
| 433  | Card expired                                                                                                       |
| 434  | Authorization refused by credit card companies                                                                     |
| 435  | Authorization refused by credit card companies                                                                     |
| 436  | Card not qualified                                                                                                 |
| 437  | Operation not allowed                                                                                              |
| 438  | Operation not allowed                                                                                              |
| 439  | Card not recognized                                                                                                |
| 441  | Blocked credit card                                                                                                | 
| 443  | Blocked credit card                                                                                                |
| 451  | Amount not available                                                                                               | 
| 454  | Card expired                                                                                                       |
| 455  | Operation not performed                                                                                            | 
| 456  | Card not recognized                                                                                                |
| 457  | Authorization refused by credit card companies                                                                     |
| 458  | Wrong merchant configuration in bank authorizative system                                                          | 
| 461  | Amount not available                                                                                               |
| 462  | Blocked credit card                                                                                                |
| 468  | Bank authorizative system not available                                                                            |
| 475  | Operation not allowed                                                                                              |
| 490  | Technical error                                                                                                    | 
| 491  | Technical error in connection with Credit Card Company network                                                     | 
| 492  | Technical error in connection with Credit Card Company network                                                     | 
| 494  | Technical error                                                                                                    | 
| 516  | Operation canceled by the buyer                                                                                    | 
| 551  | Unauthorized bank transfer                                                                                         | 
| 552  | MyBank payment not completed                                                                                       | 
| 553  | MyBank payment abbandoned by buyer                                                                                 | 
| 600  | Technical error                                                                                                    |
| 613  | Technical error                                                                                                    |
| 614  | Technical error                                                                                                    |
| 615  | Technical error                                                                                                    |
| 810  | Bank authorizative system not available                                                                            |
| 811  | Wrong merchant configuration in bank authorizative system                                                          | 
| 901  | Authorization denied                                                                                               | 
| 902  | Authorization denied                                                                                               | 
| 903  | Authorization denied                                                                                               | 
| 904  | Authorization denied                                                                                               | 
| 905  | Authorization denied                                                                                               | 
| 906  | Authorization denied                                                                                               | 
| 907  | Authorization denied                                                                                               | 
| 908  | Authorization denied                                                                                               | 
| 910  | Authorization denied                                                                                               | 
| 911  | Authorization denied                                                                                               | 
| 913  | Authorization denied                                                                                               | 
| 914  | Authorization denied                                                                                               | 
| 915  | Authorization denied                                                                                               | 
| 916  | Authorization denied                                                                                               | 
| 917  | Authorization denied                                                                                               | 
| 918  | Authorization denied                                                                                               | 
| 919  | Authorization denied                                                                                               | 
| 920  | Authorization denied                                                                                               | 
| 950  | Not qualified credit card                                                                                          |
| 951  | Wrong merchant configuration in bank authorizative system                                                          |
| 998  | Credit card with wrong check-digit                                                                                 |
| 999  | Operation not performed                                                                                            |
| 1100 | Empty parameter string                                                                                             |
| 1101 | Invalid format of parameter string                                                                                 |
| 1102 | No parameter name precedes = symbol                                                                                |
| 1103 | Parameter string ending with a separator                                                                           |
| 1104 | Invalid parameter name                                                                                             |
| 1105 | Invalid parameter value                                                                                            |
| 1106 | Repeated parameter name                                                                                            |
| 1107 | Unexpected parameter name. Please double check Fields and Parameters configuration in Back Office.                 |
| 1108 | Compulsory parameter not set                                                                                       |
| 1109 | Missing parameter                                                                                                  |
| 1110 | Missing PAY1_UICCODE parameter                                                                                     |
| 1111 | Invalid currency code                                                                                              |
| 1112 | Missing PAY1_AMOUNT parameter                                                                                      |
| 1113 | Not numeric amount                                                                                                 |
| 1114 | Amount with a wrong number of decimal digits                                                                       |
| 1115 | Missing P A Y1_SHOPTRANSACTIONID parameter                                                                         |
| 1116 | Too long P A Y1_SHOPTRANSACTIONID parameter                                                                        |
| 1117 | Invalid language identifier                                                                                        |
| 1118 | Not numeric characters in credit card number                                                                       |
| 1119 | Credit card number with wrong length                                                                               |
| 1120 | Credit card with wrong check-digit                                                                                 |
| 1121 | Credit card belongs to a Company not enabled                                                                       |
| 1122 | Expiry year without expiry month                                                                                   |
| 1123 | Expiry month without expiry year                                                                                   |
| 1124 | Invalid expiry month                                                                                               |
| 1125 | Invalid expiry year                                                                                                |
| 1126 | Expired expiry date                                                                                                |
| 1127 | Invalid cardholder email address                                                                                   |
| 1128 | Too long parameter string                                                                                          |
| 1129 | Too long parameter value                                                                                           |
| 1130 | Not accepted call: missing parameter A                                                                             |
| 1131 | Not accepted call: Shop not recognized                                                                             |
| 1132 | Not accepted call: shop is not in active state                                                                     |
| 1133 | Not accepted call: missing parameter B                                                                             |
| 1134 | Not accepted call: empty parameter B                                                                               |
| 1135 | Not accepted call: other parameters beside A and B are present                                                     |
| 1136 | Not accepted call: transaction did not begin with a call to server-server cryptography system                      |
| 1137 | Not accepted call: transaction already processed before                                                            |
| 1138 | Not accepted call: card number or expiry date are missing                                                          |
| 1139 | Not accepted call: missing published payment page                                                                  |
| 1140 | Transaction cancelled by buyer                                                                                     |
| 1141 | Not accepted call: input parameter string not acceptable                                                           |
| 1142 | Not accepted call: invalid IP Address                                                                              |
| 1143 | Transaction abandoned by buyer                                                                                     |
| 1144 | Compulsory field not set                                                                                           |
| 1145 | Invalid OTP                                                                                                        |
| 1146 | Too small amount                                                                                                   |
| 1147 | Too big amount                                                                                                     |
| 1148 | Invalid cardholder name                                                                                            |
| 1149 | Missing or wrong CVV2                                                                                              |
| 1150 | IPIN must be set                                                                                                   |
| 1151 | Parameters error                                                                                                   |
| 1153 | GestPay failed to verify if the card is enrolled to VBV service                                                    |
| 1154 | Not accepterd call: missing parameter TransKey                                                                     |
| 1160 | Wrong CustomToken length                                                                                           |
| 1161 | Wrong CustomToken digits number                                                                                    |
| 1162 | CustomToken with illegal characters                                                                                |
| 1163 | CustomToken used for another card                                                                                  |
| 1164 | Expired Token                                                                                                      |
| 1165 | Token not found                                                                                                    |
| 1200 | No match between ABI code and BankPass Banks                                                                       |
| 1201 | BankPass Transaction abandoned by buyer                                                                            |
| 1202 | BankPass - Buyer login failed                                                                                      |
| 1203 | BankPass - no payment methods available                                                                            |
| 1204 | BankPass - technical error                                                                                         |
| 1205 | BankPass Server-Server: URL Return must be set                                                                     |
| 1206 | BankPass Server-Server: too long URL Return (max 250 char)                                                         |
| 1207 | BankPass Server-Server: invalid URL Return (it must begin with http:// or https://)                                |
| 1208 | BankPass Server-Server: URL Return parameter missing                                                               |
| 1209 | BankPass Server-Server: IDBankPass must be set                                                                     |
| 1210 | BankPass Server-Server: invalid IDBankPass                                                                         |
| 1300 | Shipping Address Country Error                                                                                     |
| 1301 | Shipping Address1 Empty                                                                                            |
| 1302 | Shipping Address City Empty                                                                                        |
| 1303 | Shipping Address State Empty                                                                                       |
| 1304 | Shipping Address Postal Code Empty                                                                                 |
| 1305 | Shipping Address Country Empty                                                                                     |
| 1306 | Shipping Address Invalid City State Postal Code                                                                    |
| 1987 | Technical error                                                                                                    |
| 1999 | Technical error in connection with Credit Card Company network                                                     |
| 2000 | Transaction exceeds maximum operations number in time period                                                       |
| 2001 | Transaction exceeds maximum number of operations performed by the same buyer in time period                        |
| 2002 | Transaction exceeds maximum amount in time period                                                                  |
| 2003 | Transaction exceeds maximum amount payable by same buyer in time period                                            |
| 2004 | Transaction contains a field value that had been declared not acceptable                                           |
| 2005 | Buyer abandoned the transaction because it was double                                                              |
| 2006 | Wrong line length                                                                                                  |
| 2007 | Wrong value in SHOPTRANSACTIONID field                                                                             |
| 2008 | Wrong value in CURRENCY field                                                                                      |
| 2009 | Wrong value in AMOUNT field                                                                                        |
| 2010 | Wrong value in AUTHORIZATION DATE field                                                                            |
| 2011 | Transaction not found                                                                                              |
| 2012 | Transaction ambiguous                                                                                              |
| 2013 | Text file contains more rows related to the same transaction                                                       |
| 2014 | You requested a refund operation with an amount exceeding transaction balance                                      |
| 2015 | Wrong value in BANKTRANSACTIONID field                                                                             |
| 2016 | Fields BANKTRANSACTIONID and SHOPTRANSACTIONID are empty                                                           |
| 2017 | Transaction can not be deleted                                                                                     |
| 2018 | Transaction can not be refunded                                                                                    |
| 2019 | Transaction can not be settled                                                                                     |
| 2020 | Transaction can not be renounced                                                                                   |
| 2030 | Due to RED configuration, transaction is sent to credit card companies, even if 3d-Secure authentication is failed |
| 2500 | payment abbandoned by buyer                                                                                        |
| 2501 | payment not completed                                                                                              |
| 4001 | Unexpected parameter value                                                                                         |
| 4002 | Not numeric parameter value                                                                                        |
| 4100 | Operation not allowed                                                                                              |
| 4101 | Credit card number with wrong length                                                                               |
| 4102 | Amount not available                                                                                               |
| 4103 | Technical error                                                                                                    |
| 4104 | Technical error                                                                                                    |
| 4105 | Technical                                                                                                          |
| 4106 | Technical                                                                                                          |
| 4108 | Technical error in connection with Credit Card Company network error                                               |
| 4109 | Technical error                                                                                                    |
| 4200 | Technical error                                                                                                    |
| 4201 | Technical error                                                                                                    |
| 4202 | Technical error                                                                                                    |
| 4203 | Call credit card company                                                                                           |
| 4204 | Operation not allowed                                                                                              |
| 4205 | Operation not allowed                                                                                              |
| 4206 | Credit card with wrong check-digit. Please double-check the credit card number typed in.                           |
| 4207 | Technical error                                                                                                    |
| 4208 | Operation not allowed                                                                                              |
| 4209 | Technical error                                                                                                    |
| 4300 | Technical error                                                                                                    |
| 4301 | Too big amount                                                                                                     |
| 4302 | Technical error                                                                                                    |
| 4303 | Operation not allowed                                                                                              |
| 4304 | Technical error                                                                                                    |
| 4305 | Authorization refused by credit card companies                                                                     |
| 4306 | Operation not allowed                                                                                              |
| 4307 | Technical error                                                                                                    |
| 4308 | Operation not allowed                                                                                              |
| 4309 | Too big amount                                                                                                     |
| 4400 | Wrong transaction date                                                                                             |
| 4401 | Wrong expiry date                                                                                                  |
| 4402 | Technical error in connection with Credit Card Company network                                                     |
| 4403 | Technical error                                                                                                    |
| 4404 | Technical error                                                                                                    |
| 4405 | Operation not allowed                                                                                              |
| 4406 | Operation not allowed                                                                                              |
| 4407 | Amount not available                                                                                               |
| 4408 | Operation not allowed                                                                                              |
| 4409 | Operation not allowed                                                                                              |
| 4500 | Technical error                                                                                                    |
| 4501 | Technical error                                                                                                    |
| 4502 | Technical error                                                                                                    |
| 4503 | Operation not allowed                                                                                              |
| 4504 | Operation not allowed                                                                                              |
| 4505 | Operation not allowed                                                                                              |
| 4506 | Technical error                                                                                                    |
| 4507 | Technical error                                                                                                    |
| 4508 | Operation not allowed                                                                                              |
| 4604 | Technical error                                                                                                    |
| 4701 | Operation not allowed                                                                                              |
| 4702 | Wrong expiry date                                                                                                  |
| 4703 | Card not qualified                                                                                                 |
| 4704 | Amount not available                                                                                               |
| 4705 | Technical error in connection with Credit Card Company network                                                     |
| 4706 | Technical error in connection with Credit Card Company network                                                     |
| 4707 | Transaction already processed                                                                                      |
| 4708 | MyBank: communication with the buyer's Bank failed                                                                 |
| 4709 | Ideal: communication with the buyer's Bank failed                                                                  |
| 4710 | PayPal Error                                                                                                       |
| 4720 | Rate in Rete: communication with Consel failed                                                                     |
| 4730 | C-pay: communication with Compass failed                                                                           |
| 4731 | Not authorized transaction by Compass                                                                              |
| 4732 | Transazione non autorizzata da Consel                                                                              |
| 4733 | Apple Pay: unable to decrypt the PKPaymentToken  - please check the Payment Processing Certificate                 | 
| 4734 | Apple Pay: PKPaymentToken expired                                                                                  | 
| 4800 | Expired session                                                                                                    | 
| 4801 | Invalid ShopTransactionID value                                                                                    | 
| 4802 | Currency or Amount don't match the original transaction                                                            | 
| 7400 | Authorization denied                                                                                               |
| 7401 | Authorization refused by credit card companies                                                                     |
| 7402 | Card not qualified                                                                                                 |
| 7403 | Card not recognized                                                                                                |
| 7404 | Card expired                                                                                                       |
| 7405 | Call credit card company                                                                                           |
| 7406 | Wrong card date                                                                                                    |
| 7407 | Wrong transaction date                                                                                             |
| 7408 | System error                                                                                                       |
| 7409 | Merchant not recognized                                                                                            |
| 7410 | Invalid format                                                                                                     |
| 7411 | Amount not available                                                                                               |
| 7412 | Not settled                                                                                                        |
| 7413 | Operation not allowed                                                                                              |
| 7414 | Network not available                                                                                              |
| 7415 | Collect card                                                                                                       |
| 7416 | PIN attempts exhausted                                                                                             |
| 7417 | Blocked terminal                                                                                                   |
| 7418 | Forcedly Closed terminal                                                                                           |
| 7419 | Not permitted transaction                                                                                          |
| 7420 | Not authorized transaction                                                                                         |
| 7421 | Service interrupted at 01/01/2002                                                                                  |
| 7500 | Authorization denied                                                                                               | 
| 7600 | Authorization denied                                                                                               |
| 8000 | File correctly processed                                                                                           |
| 8001 | Header/bottom record not found                                                                                     |
| 8002 | Merchant code not set                                                                                              |
| 8003 | Incorrect row number                                                                                               |
| 8004 | Incorrect file format                                                                                              |
| 8005 | Merchant not enabled                                                                                               |
| 8006 | Verify By Visa                                                                                                     |
| 8007 | Feature disabled for VISA credit card                                                                              |
| 8008 | Feature disabled                                                                                                   | 
| 8009 | Payment interrupted                                                                                                |
| 8010 | Wrong credit card number for this transaction                                                                      |
| 8011 | Transaction correctly received                                                                                     |
| 8012 | Authorization not found                                                                                            |
| 8013 | Settlement not found                                                                                               |
| 8014 | Settlement amount > Authorization amount                                                                           |
| 8015 | Refund amount > balance                                                                                            |
| 8016 | Transaction without settlement                                                                                     |
| 8017 | File waiting to be processed                                                                                       |
| 8018 | File correctly processed                                                                                           |
| 8021 | Feature disable for MASTERCARD credit card                                                                         |
| 8022 | Feature disable for JCB credit card                                                                                |
| 8023 | Feature disabled for MAESTRO cards                                                                                 |
| 8888 | UP Mobile Payment                                                                                                  |
| 9991 | Browser not supported                                                                                              |
| 9992 | Error creating iFrame                                                                                              |
| 9997 | Phase with error                                                                                                   |
| 9998 | Phase correctly ended                                                                                              |
| 9999 | System Error                                                                                                       |