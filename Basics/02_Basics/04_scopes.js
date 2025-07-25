//Scopes : block , function 

// let a = 10
// const b = 20
// var c = 30

var c = 300 //Global scope
let a = 300

if(true) {          //Block scope
    let a = 10
    const b = 20
    var c = 30
}

console.log(a); //these variables shouldn't be leaked out of the scope
// console.log(b);
console.log(c); //var leaks out of the block scope giving value 30

//Avoid using var

/* In Node.js, the global scope refers to the scope where variables and functions are accessible from anywhere in the code. Variables declared without any keyword (var, let, const) inside a Node.js file are automatically added to the global scope. This means that they can be accessed and modified from
any part of the code within that file. */


/* Global scope in windows refers to the scope where variables and functions are accessible from anywhere in the code within a Windows environment. Variables declared without any keyword (var, let, const) inside a Windows environment are automatically added to the global scope. This means that they can be accessed and modified from any part of the code within that environment. It's important to be cautious when using the global scope in order to prevent unintended side effects and maintain code clarity and organization. */

//The global scope in node and windows browser is different

// ------------------------------------------------------------------------

/* A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. This allows the inner function to access variables and parameters of the outer function even after the outer function has finished executing. */

// function one() { //Nested function
//     const username = "hitesh"

//     function two() {
//         const website = "youtube"
//     }
//     console.log(website);
//     two()
// }
// one()

//Two ways to create functions

// function addOne(num) { 
//     return num + 1
// }

// addOne(5)
// //Variables can hold anything from functions to json etc..they are very powerful
// const addTwo = function(num) //expression
// {
//     return num + 2
// }
// addTwo(5)

// addOne(5)//can be access before initialization

// function addOne(num) { 
//     return num + 1
// }

// addTwo(5) //cannot access before initialization
// const addTwo = function(num) //declaration and assigning to variable
// {
//     return num + 2
// }

const years = [200,100,300,400]
console.log(years["2"]);

console.log(years["2"] !== years["02"]);
