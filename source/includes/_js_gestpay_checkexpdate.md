### checkEXPDATE

> syntax: 

```javascript
GestPay.checkEXPDATE(EXPMMVal, EXPYYVal, callBackObj);
```

> example:

```javascript
var EXPMMVal = '11';
var EXPYYVal = '211'; 

GestPay.checkEXPDATE(EXPMMVal, EXPYYVal, function (Result) {
  if (Result.ErrorCode != 0) {
    console.log(Result.ErrorCode); // i.e. 1125
    console.log(Result.ErrorDescription); // 'Invalid expiry year'
    ... //handle the error
  } else {
    console.log('the expiring year is valid'); 
  }
});
```

`checkEXPDATE` checks the formal correctness of the **expiry date**, sent as two variables for month and year. 