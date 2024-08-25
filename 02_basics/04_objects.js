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

// const obj3 = { obj1, obj2 } // object under object nest
const obj3 = Object.assign({}, obj1, obj2) // .assign --> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Will start soon
// Little bit busy but I am trying to complete this