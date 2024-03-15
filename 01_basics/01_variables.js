const accountId = 144553
let accountEmail = "shalini@binni.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2 // not allowed

accountEmail = "nayan@shinine.com"
accountPassword = "11112222"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])