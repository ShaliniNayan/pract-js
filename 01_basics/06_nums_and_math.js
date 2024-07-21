const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number:100]

// console.log(balance.toString().length); // 100 // length-3
// console.log(balance.toFixed(2));// 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); //23.9 //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// console.log(otherNumber.toPrecision(4)); // 123.9 // 124 - means number will come in precise way before decimal.

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000 - this is US method to write
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 - this is Indian method to write

// ++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs()); //Nan
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); // 5 - ceil means up so it will take up or greater value.
// console.log(Math.floor(4.9)); // 5 - floor means up so it will take down or lower value.
// console.log(Math.min(4, 3, 6, 8)); // 3 - gives minimum value
// console.log(Math.max(4, 3, 6, 8)); // 8 - gives maxium value

console.log(Math.random()); // Always return the number between 0 to 1
console.log(Math.random()*10 ); // It will return the random number between 1 to 10 but not sure 0 will not come
console.log(Math.random()*10 + 1 ); // It will return the random number between 1 to 10 but to make sure 0 should not come we add + 1 
