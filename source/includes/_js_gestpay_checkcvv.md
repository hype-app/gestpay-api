## checkCVV

> syntax: 

```javascript
GestPay.checkCVV(CVVNum, callBackObj);
```

> example:

```javascript
var CVV = 'XY@Z';

GestPay.checkCVV(CVV, function (Result) {
  if (Result.ErrorCode != 0) {
    console.log(Result.ErrorCode); // i.e. 1149
    console.log(Result.ErrorDescription); // 'Missing or wrong CVV2'
    ... //handle the error
  } else {
    console.log('the CVV value is valid'); 
  }
});
```

`checkCVV` checks the formal correctness of the value sent as CVV. 