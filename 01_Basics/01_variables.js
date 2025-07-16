const accountId = 121242;
let accountEmail = "hc@gmail.com"
var accountPassword = "3131123"
accountCity = "Mangaluru" 
let accountState;

accountEmail = "hc123@gmail.com"
accountPassword = "53454747"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState]);

// Don't use var as there were problems with this approach
// In ES6, let and const were introduced to tackle this problem of js scope.
/* Why Use let, const, and var?
var: Function-scoped, can lead to hoisting issues and bugs in modern JS code. Best avoided in most cases.

let: Block-scoped, allows for reassignment. Suitable for variables that change in value.

const: Block-scoped, cannot be reassigned. Ideal for constants or variables that don't change once set.*/