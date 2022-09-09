// convert number to string

x = 20 ;
console.log(x.toString())

// or 
console.log((123).toString());

let x = 9.656;
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));
console.log(x.toExponential());  // "9.656e+0"


console.log(x.toFixed(0))
console.log(x.toFixed(2))
console.log(x.toFixed(4))
console.log(x.toFixed(6))
// "10"
// "9.66"
// "9.6560"
// "9.656000"

let x = 9.656;
console.log(x.toPrecision())
console.log(x.toPrecision(2))
console.log(x.toPrecision(4))
console.log(x.toPrecision(6))

// "9.656"
// "9.7"
// "9.656"
// "9.65600"


// convert to number from anything
console.log(Number("John"));  //NaN
console.log(Number("10"));    // 10

// parseInt() parses a string and returns a whole number.

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))


// -10
// -10
// 10
// 10
// 10
// 10
// NaN

// parseFloat() parses a string and returns a number

console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))

// 10
// 10.33
// 10
// 10
// NaN