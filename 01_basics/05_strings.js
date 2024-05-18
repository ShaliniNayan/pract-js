const name = "shalini"
const repoCount = 90

//console.log(name + repoCount + " Value"); this is outdated. in today's senario noone write like this

// `` --> back ticks known as strings interpolation

console.log(`Hello my name is ${name} amy my repo count is ${repoCount}`);

// Declare string 
const gameName = new String('shalini-sn-com')

console.log(gameName[0]); // key value access 
console.log(gameName.__proto__); // proto type object access. There are double underscore
//Object Name
console.log(gameName.length);
console.log(gameName.toUpperCase()); // Write in capital letter
console.log(gameName.charAt(2)); // To know the position of character
console.log(gameName.indexOf('i')); // To know the in which position the character is

const newString = gameName.substring(0, 5) // We can't give negative value in substring. It will ignore it.
console.log(newString);

const anotherString = gameName.slice(-9, 5) // In slice we can give negative value which give answer in reverse order.
console.log(anotherString); 

const newStringOne = "   shalini    "
console.log(newStringOne);
console.log(newStringOne.trim()); // It remove the space which is no use.
// link for trim documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://shalini.com/shalini%20nayan"

console.log(url.replace('%20', '-')); //.replace works as find the character and replace with new.

console.log(url.includes('shalini')); // .includes works as searching and giving answer in true or false
console.log(url.includes('sandra')); // .includes works as searching and giving answer in true or false
console.log(url.includes('aarav')); 

console.log(gameName.split('-')); // It create array and bi farcate the charcter in given object.
// link for split documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
