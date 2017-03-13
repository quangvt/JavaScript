// 03 Youtube Lesson
// JS Nuggets: Data Types

// There are 7 data types

// 1. Boolean
var data = true;
if(data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame");
}

// 2. null
var n = null;
console.log(n * 32); // 0

// 3. undefined
var a;
console.log(a+2); // NaN

// 4. Number
var num = 3.6;
var ber = 6.4;
console.log(num + ber); // 10;

// 5. String. "Howdy"
var name = "Beau";
console.log("Hi! My name is " + name);

// 6. Symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2); // false
console.log(String(sym1) === String(sym2)); // true
console.log(String(sym1)); // Symbol(foo)

// 7. Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);

