// JavaScript Date objects represent a single moment in time in a platform-independent format. 

// Date

let myDate = new Date()

// console.log(myDate); //2024-07-23T18:04:09.870Z
// console.log(myDate.toString()); //Tue Jul 23 2024 18:06:59 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Tue Jul 23 2024
// console.log(myDate.toLocaleString()); //7/23/2024, 6:09:39 PM
// console.log(typeof myDate); // Object

//let myCreatedDate = new Date(2024, 6, 23) // To create specific or current date, 0 --> month start from Zero
//let myCreatedDate = new Date(2024, 6, 23, 23, 50) // To create specific or current date, 0 --> month start from Zero and add the time
let myCreatedDate = new Date("2024-07-23") // To create specific or current date, 0 --> month start from Zero and add the time
//console.log(myCreatedDate); // 2024-01-23T00:00:00.000Z
//console.log(myCreatedDate.toDateString()); // Tue Jan 23 2024
//console.log(myCreatedDate.toLocaleString()); // 7/23/2024, 11:50:00 PM
console.log(myCreatedDate.toLocaleString()); // 7/23/2024, 12:00:00 AM
console.log(myCreatedDate.toLocaleTimeString()); // 12:00:00 AM --> only time will displayed
console.log(myCreatedDate.toISOString()); // 2024-07-23T00:00:00.000Z 
console.log(myCreatedDate.getTimezoneOffset()); // 0  