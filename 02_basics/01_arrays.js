// array : The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// Deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Arrey Methods

myArr.push(6) // [ 0, 1, 2, 3, 4, 5, 6 ] --> Add new value at the end
myArr.push(7) // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
myArr.pop() // [ 0, 1, 2, 3, 4, 5, 6 ] --> Remove last value 
console.log(myArr);