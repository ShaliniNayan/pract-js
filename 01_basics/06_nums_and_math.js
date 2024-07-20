const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // 100 // length-3
console.log(balance.toFixed(2));// 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //23.9 //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
console.log(otherNumber.toPrecision(4)); // 123.9 // 124 - means number will come in precise way before decimal.

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 - this is US method to write
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 - this is Indian method to write
