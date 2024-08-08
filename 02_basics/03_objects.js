// singleton : When you make it from constructor only one object is there
// Object.create // this known as constructor object through. In this only Singleton use

//object literals

const mySym = Symbol("key1") //Symbol

const JsUser = {
    name: "Shalini",
    "full name": "Shalini Nayan",
    [mySym]: "mykey1", // if you have to write in symbol it should be written as []
    age: 25,
    location: "Delhi",
    email: "shalini@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // {} --> this is object 

// How to access object 
console.log(JsUser.email); // shalini@example.com --> many people do this but it's not correct way to access object
console.log(JsUser["email"]); // shalini@example.com
console.log(JsUser["full name"]); // Shalini Nayan
console.log(JsUser[mySym]); // mykey1

// Value change

JsUser.email = "shalini@nayan.com" // change the value of email
Object.freeze(JsUser) // to freeze the value so that after this nothing will change in this value
JsUser.email = "shalini@microsoft.com"
console.log(JsUser); 
// {
//   name: 'Shalini',
//   'full name': 'Shalini Nayan',
//   age: 25,
//   location: 'Delhi',
//   email: 'shalini@nayan.com', // first change is done but not after the freeze
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }
