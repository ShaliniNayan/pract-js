// Singleton with help of construction declare variable

// const tinderUser = new Object() // Singleton value
// or
const tinderUser = {} // Non singleton value

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // {} --> in both way answer will be empty array After putting value = { id: '123abc', name: 'Sammy', isLoggedIn: false }

// For another app 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usefullname: {
            firstname: "shaline",
            lastname: "nayan"
        } // you write as many as nesting 
    }
}

// access the value or data through . notation
// console.log(regularUser.fullname); // { usefullname: { firstname: 'shaline', lastname: 'nayan' } }
// console.log(regularUser.fullname.usefullname); // { firstname: 'shaline', lastname: 'nayan' }
// console.log(regularUser.fullname.usefullname.firstname); // shaline

// Object combine & merge
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }