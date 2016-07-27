---
title: API Reference

language_tabs:
  - xml
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - wscryptdecrypt
  - js_gestpay
  - wss2s
  - errors

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

