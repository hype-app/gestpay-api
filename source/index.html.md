---
title: API Reference

language_tabs:
  

toc_footers:
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - wscryptdecrypt
  - wscryptdecrypt_encrypt
  - wscryptdecrypt_encryptresult
  - wscryptdecrypt_decrypt
  - wscryptdecrypt_decryptresult
  - alternative_payments
  - wscryptdecrypt_encrypt_paypal
  - wscryptdecrypt_encrypt_ideal_mybank
  - wscryptdecrypt_encrypt_consel
  - wscryptdecrypt_encrypt_sofort
  - wscryptdecrypt_encrypt_klarna
  - wscryptdecrypt_encrypt_qiwi
  - wscryptdecrypt_encrypt_yandex
  - wscryptdecrypt_encrypt_alipay
  - wscryptdecrypt_encrypt_unionpay
  - wscryptdecrypt_encrypt_tenpay
  - js_gestpay
  - js_gestpay_createpaymentpage
  - js_gestpay_sendpayment
  - js_gestpay_resultobject
  - wss2s
  - wss2s_callpagams2s
  - wss2s_callsettles2s
  - wss2s_calldeletes2s
  - wss2s_callrefunds2s
  - wss2s_callreadtrxs2s
  - wss2s_callverifycards2s
  - wss2s_callcheckcartas2s
  - wss2s_callrequesttokens2s
  - wss2s_calldeletetokens2s
  - wss2s_callupdatetokens2s
  - wss2s_callideallists2s
  - wss2s_callmybanklists2s
  - wss2s_callupdateorders2s
  - riskified
  - models
  - models_orderdetails
  - errors
  - payment_type_codes
  - currency_codes
  - paypal_country_codes
  - paypal_state_codes
  - language_codes
  - alert_codes

search: true
---

# Introduction


```xml
   _____           _                     
  / ____|         | |                    
 | |  __  ___  ___| |_ _ __   __ _ _   _ 
 | | |_ |/ _ \/ __| __| '_ \ / _` | | | |
 | |__| |  __/\__ \ |_| |_) | (_| | |_| |
  \_____|\___||___/\__| .__/ \__,_|\__, |
                      | |           __/ |
                      |_|          |___/ 
```

Gestpay API documentation aims to be a comprehensive and living catalog of Gestpay services.

Our API is SOAP-based, so you must encode your requests in XML to communicate with Gestpay.

For every service, we will present both the test and the production endpoints.   

Our services are: 

|     |     | 
| --- | --- | 
| [`WSCryptDecrypt`](#wscryptdecrypt-api) | used to start (and end) the payment process. | 
| [`js_GestPay.js`](#js_gestpay-js-api) | Mainly used to build a customized payment page. | 
| [`WSs2s`](#wss2s-api) | To control every aspect of your transactions and your shop. |

