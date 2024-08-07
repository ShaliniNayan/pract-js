// singleton : When you make it from constructor only one object is there
// Object.create // this known as constructor object through. In this only Singleton use

//object literals
const JsUser = {
    name: "Shalini",
    age: 25,
    location: "Delhi",
    email: "shalini@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // {} --> this is object 

// How to access object 
console.log(JsUser.email); // shalini@example.com --> many people do this but it's not correct way to access object
console.log(JsUser["email"]); // shalini@example.com
