### checkEXPMM

> syntax: 

```javascript
GestPay.checkEXPMM(EXPMMVal, callBackObj);
```

> example:

```javascript
var EXPMMVal = '123'; //not valid ! 

GestPay.checkEXPMM(EXPMMVal, function (Result) {
  if (Result.ErrorCode != 0) {
    console.log(Result.ErrorCode); // i.e. 1124
    console.log(Result.ErrorDescription); // 'Invalid expiry month'
    ... //handle the error
  } else {
    console.log('the expiring month value is valid'); 
  }
});
```

`checkEXPMM` checks the formal correctness of the value sent as `EXPMMVal`. It represents the **expiring month** so it should be a value between `0` and `12`. 