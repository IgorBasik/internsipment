const extractCurrencyValue = '$225';
alert(parseInt(extractCurrencyValue.match(/\d+/)) === 225);  

/*let value = '$225';
let extractCurrencyValue = parseInt(value.match(/\d+/));
console.log(extractCurrencyValue);
console.log(typeof extractCurrencyValue);