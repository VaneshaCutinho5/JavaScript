//this keyword
/* In the given JavaScript code snippet, the `this` keyword refers to the current object context. */

// const user = {
//     username : "Vanesha",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

/* `console.log(this);` is logging the value of the `this` keyword in the global context. In this case, it will likely log the global object (e.g., `window` in a browser environment, or `global` in Node.js). */
// console.log(this); //gives {} in node and 'window' object in browser

// function chai(){
//     console.log(this); //Inside a function, "this" gives a lot of information 
// }
// chai()


// function chai(){            //"this" is used for objects
//     let username = "hitesh"
//     console.log(this.username); //undefined
    
// }
// chai() 

// const chai = function () { 
//     let username = "Vanesha"
//     console.log(this.username);
    
// }

// chai()

// const chai = () => {                 //Arrow function
//     let username = "Vanesha"
//     console.log(this.username);
    
// }

// chai()

/* The statement `console.log(this === exports);` is checking if the `this` keyword is equal to the `exports` object in a Node.js environment. This comparison will typically result in `true` because in Node.js, `this` refers to the global context and `exports` is a reference to the module.exports object. */
//console.log(this === exports);


// () => {  //Arrow function
//     }

// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(3,2));

        //OR

// const add = (num1, num2) =>  num1 + num2  //implicit return

// const add = (num1, num2) =>  (num1 + num2) //implicit return and used in React

// console.log(add(3,2));

const addTwo = (num1, num2) => ({
    username:"hitesh"               //For objects add ()
})                      

console.log(addTwo(3,2));

//{ } -> write "return" and ( ) -> no need to write "return"

// ---------------------------------------------------------------------------------

//IIFE (Immediately Invoked Function Expression)

/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed
immediately after it is defined. It is typically used to create a separate scope for variables to avoid polluting the global scope. This can help in preventing naming conflicts and maintaining a cleaner code structure. */

//Global scope ke pollution se problem hoti hai kai baar either by the variables or functions of global scope thats why IIFE lekthe hain to remove pollution

(function chai() {
    console.log(`DB Connected`); //named IIFE
})(); //Semicolon is important here for writing 2 iife

// ()() //IIFE

//Arrow funtion unnamed IIFE
(  () => {
console.log("Connected");
})();

(  (name) => {
console.log(`${name} ,Connected`);
})('vanesha');
