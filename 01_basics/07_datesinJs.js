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
//console.log(myCreatedDate.toLocaleString()); // 7/23/2024, 12:00:00 AM
//console.log(myCreatedDate.toLocaleTimeString()); // 12:00:00 AM --> only time will displayed
//console.log(myCreatedDate.toISOString()); // 2024-07-23T00:00:00.000Z 
//console.log(myCreatedDate.getTimezoneOffset()); // 0
//console.log(myCreatedDate.toJSON()); // 2024-07-23T00:00:00.000Z

let myTimeStamp = Date.now()

//console.log(myTimeStamp); // 1722271723742 --> output will be in mili second
//console.log(myCreatedDate.getTime()); // 1721692800000 --> now compare with above value so that it will get time difference
//console.log(Date.now()); // 1722272131776 --> Compare date in value for larger product
//console.log(Date.now()/1000); // 1722272205.684 --> Convert to second from mili second so divide to 1000
//console.log(Math.floor(Date.now()/1000)); // 1722272625 --> get little small without decimal which is easy to compare

let newDate = new Date()
console.log(newDate); // 2024-07-29T17:06:37.059Z
console.log(newDate.getMonth()); // 6 --> Month is start from 0. It's method so execute is necessary ()  
console.log(newDate.getDay()); // 1
console.log(newDate.getMonth() + 1); // 7 --> To get same month for no confusion +1

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})