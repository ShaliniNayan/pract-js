// Primitive Data  --> Call by value

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// We don't define language in JS. 
//JavaScript is a dynamically typed language. This means that the type of a variable is not declared when the variable is created, but rather is determined by the value that is assigned to the variable.

// Integers data types: 
const score = 100 // Number
const scoreValue = 100.3 // Number
// const score = false

const isLoggedIn = false // Boolean
const outsideTemp = null // Means it's empty.

let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// const bigNumber = 341514225436694752365n

console.log(id === anotherId) // false

// Reference (Non primitive)

// types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "shalini",
    age: 25,
}  // Inside the curly braces is object. Datatype can be anything like string, number, boolean

const myFunction = function(){
    console.log("Hello world");
} // Function

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); // number 
console.log(typeof myFunction); // function but called as object function
console.log(typeof anotherId); // Symbol 

// Link https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory 
// 2 types: Stack (Primitive), Heap (Non-Primitive : whatever it will change it will change in original value)

let myYoutubename = "shalininayandotcom"

let anothername = myYoutubename
anothername = "codewithsndprs"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "usi@upi"
}

let userTwo = userOne

userTwo.email = "shalini@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//hold