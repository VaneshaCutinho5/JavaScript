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

// https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
// var obeys function scope but not block scope

// Don't use var as there were problems with this approach : issue in block scope and functional scope
// In ES6, let and const were introduced to tackle this problem of js scope.
//Clarify use of 'let' and 'const' over 'var' for block-scoped variables

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

/* Why Use let, const, and var?
var: Function-scoped, can lead to hoisting issues and bugs in modern JS code. Best avoided in most cases.

let: Block-scoped, allows for reassignment. Suitable for variables that change in value.

const: Block-scoped, cannot be reassigned. Ideal for constants or variables that don't change once set.*/

/* Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of
their containing scope during the compilation phase. This means that you can use variables and
functions before they are declared in your code. However, only the declarations are hoisted, not the
initializations. */

console.log(data) //undefined
var data = 45
console.log(data) //45

// console.log(data) //Error
// let data = 45
// console.log(data) 