const name = "shalini"
const repoCount = 90

//console.log(name + repoCount + " Value"); this is outdated. in today's senario noone write like this

// `` --> back ticks known as strings interpolation

console.log(`Hello my name is ${name} amy my repo count is ${repoCount}`);

// Declare string 
const gameName = new String('shalini-sn')

console.log(gameName[0]); // key value access 
console.log(gameName.__proto__); // proto type object access. There are double underscore
//Object Name
console.log(gameName.length);
console.log(gameName.toUpperCase()); // Write in capital letter
console.log(gameName.charAt(2)); // To know the position of character
console.log(gameName.indexOf('i')); // To know the in which position the character is

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-9, 5) // In slice we can give negative value which give answer in reverse order.
console.log(anotherString); 