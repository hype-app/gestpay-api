## checkEXPYY

> syntax: 

```javascript
GestPay.checkEXPYY(EXPYYVal, callBackObj);
```

> example:

```javascript
var EXPYYVal = '99999'; //not a valid year ! 

GestPay.checkEXPYY(EXPYYVal, function (Result) {
  if (Result.ErrorCode != 0) {
    console.log(Result.ErrorCode); // i.e. 1125
    console.log(Result.ErrorDescription); // 'Invalid expiry year'
    ... //handle the error
  } else {
    console.log('the expiring year is valid'); 
  }
});
```

`checkEXPYY` checks the formal correctness of the value sent as `EXPYYVal`. It represents the **expiring year** so it should be a value between `0` and `99`. 