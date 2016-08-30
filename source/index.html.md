---
title: API Reference

language_tabs:
  - java
  - php
  - net

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - wscryptdecrypt
  - wscryptdecrypt_encrypt
  - wscryptdecrypt_encryptresult
  - wscryptdecrypt_encrypt_paypal
  - wscryptdecrypt_encrypt_ideal_mybank
  - wscryptdecrypt_encrypt_consel
  - wscryptdecrypt_encrypt_sofort
  - wscryptdecrypt_encrypt_klarna
  - wscryptdecrypt_encrypt_qiwi
  - wscryptdecrypt_encrypt_yandex
  - wscryptdecrypt_encrypt_alipay
  - wscryptdecrypt_decrypt
  - wscryptdecrypt_decryptresult
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
  - errors
  - payment_type_codes
  - currency_codes
  - paypal_country_codes
  - language_codes

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
| [`WSCryptDecrypt`](/?xml#wscryptdecrypt) | used to start (and end) the payment process. | 
| [`js_GestPay.js`](/?xml#js_gestpay) | Mainly used to build a customized payment page. | 
| [`WSs2s`](/?xml#wss2s) | To control every aspect of your transactions and your shop. |    

