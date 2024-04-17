let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// NaN --> Not in number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shalini" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*************************************** Operations *********************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3); modulus

let str1 = "hello"
let str2 = " shalini"

let str3 = str1 +str2
// console.log(str3); // hello shalini

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(true); // true
// console.log(+true); // 1 --> boolean is a also number it add increment 
// console.log(+""); // 0

let num1, num2, num3
num1= num2 = num3 = 2 + 2

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter); // 101

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// Link to --> https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive
// Link to --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment