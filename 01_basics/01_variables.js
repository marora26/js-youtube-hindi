const accountId = 14453;
let accountEmail = "mayankarora2698@gmail.com";
var accountPassword = "12345";
accountCity = "Jodhpur";
let accountState; // Value undefined varirable declared only

// accountId = 2; // not allowed

// const keyword can't be changed

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);