// typeof operator : can be used to find out what type of data a variable or operand contains.

// Numbers
typeof 15;  // "number"
typeof 42.7;  //"number"
typeof 2.5e-4;  //  "number"
typeof Infinity;  // "number"
typeof NaN;  //  "number". as it's an numeric value :)
 
// Strings
typeof '';  // "string"
typeof 'hello';  //"string"
typeof '12';  // "string" because it's double qouted
 
// Booleans
typeof true;  //"boolean"
typeof false;  //"boolean"
 
// Undefined
typeof undefined;  //  "undefined"
typeof undeclaredVariable; //  "undefined"
 
// Null
typeof Null;  // "object"
 
// Objects
typeof {name: "John", age: 18};  //"object"
 
// Arrays
typeof [1, 2, 4];  // "object" 
 
// Functions
typeof function(){};  // "function"


// Arithemetic : + - * / % 

var x = 10;
var y = 4;
alert(x + y); //  14
alert(x - y); //  6
alert(x * y); //  40
alert(x / y); //  2.5
alert(x % y); //  2

// Assignment : = += -= *= /= %=

var x;    // Declaring Var
 
x = 10;
alert(x); // 10
 
x = 20;
x += 30;
alert(x); // 50
 
x = 50;
x -= 20;
alert(x); // 30
 
x = 5;
x *= 25;
alert(x); //125
 
x = 50;
x /= 10;
alert(x); // 5
 
x = 100;
x %= 15;
alert(x); // 10

// string operator : 

var str1 = "Hello";
var str2 = " World!";
 
alert(str1 + str2); // Hello World!
 
str1 += str2;
alert(str1); //  Hello World!

// Incrementing and Decrementing Operators 

var x; // Declare var

x = 1
alert(++x); //  11
alert(x);   //  11

x = 1
alert(x++); //  10
alert(x);   //  11

x = 1
alert(--x); //  9
alert(x);   //  9

x = 10
alert(x--); //  10
alert(x);   //  9