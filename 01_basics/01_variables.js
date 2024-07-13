const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2;
accountEmail = "mayankarora2698@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";

/*
Prefer not to use var
because of issue in bloack scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountPassword, accountEmail, accountCity]);