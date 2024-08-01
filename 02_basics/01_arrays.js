// array : The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// Deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Arrey Methods

// myArr.push(6) // [ 0, 1, 2, 3, 4, 5, 6 ] --> Add new value at the end
// myArr.push(7) // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
// myArr.pop() // [ 0, 1, 2, 3, 4, 5, 6 ] --> Remove last value

//myArr.unshift(0) //--> Add new value in the beginning
//myArr.shift() //--> Remove first value in the beginning

// console.log(myArr.includes(9)); // -> includes method check the question you are asking is there or not, it gives answer in boolean that is true or false.
// console.log(myArr.indexOf()); // -1 --> Always gives the answer -1.
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // 0,1,2,3,4,5 --> Combine the value into sing string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // string
