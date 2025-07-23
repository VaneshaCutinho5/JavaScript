// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

//Object creation in 2 ways-> literals or constructor(singleton)

//Constructor //always singleton

/* 1.`Object.create` is a method in JavaScript that creates a new object with the specified prototype object and properties. It allows you to create an object with a specified prototype or to create a new object based on an existing object. This method gives you more control over the properties and inheritance of the newly created object. */
//Object.create

/* 2.Object literals in JavaScript are a way to create objects using a simple syntax. When you define an object using object literals, you are essentially creating a new object with key-value pairs enclosed in curly braces `{}`. This allows you to define properties and values for the object directly within the object declaration. */

//Object literals //no singleton
// const user ={
//Object creation 
// }
const mySym = Symbol("key1")

const JsUser = {
    name: "Vanesha",
    "full name":"Vanesha RC",     //name or any key values are treated as string values
    age: 22,
    [mySym] : "mykey1", //declare symbol with []
    gender: "female",
    email: "vanesha@gmail.com",
    isLoggedIn: false
}

//console.log(JsUser.age)  //2 ways of accessing the elements(using . or [])
//console.log(JsUser[age]); have to use " " for age since its a string
                        
//console.log(JsUser["age"]) 

console.log(JsUser["full name"])
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym) //mySym is a symbol but its giving type as string

//console.log(JsUser[mySym]) ->Important

// JsUser.email = "vans@gmail.com.in" //Overwrite value using = 
// console.log(JsUser.email);

//If we want to lock the value and not let anyone overwrite it then we can freeze the values
/* `Object.freeze()` is a method in JavaScript that is used to freeze an object, making it immutable.
When an object is frozen, its properties cannot be added, modified, or removed. Any attempt to
change the object will result in an error or the change being ignored. This helps in creating
objects with constant values that cannot be altered accidentally. */
//Object.freeze(JsUser) ->Important

// JsUser.email = "vans@chat.com.in" 
// console.log(JsUser);

JsUser.greeting = function () { // A function declaration ->Important
    console.log("Hello JS user");
}

// console.log(JsUser.greeting); //Returns function reference[Function(anonymous)]
// console.log(JsUser.greeting());

// JsUser.greeting = function () { // A function declaration
//     console.log(`Hello JS user `); //this is used to reference the same object
// }

/* In JavaScript, the `this` keyword refers to the object that is currently executing the function. Itis a reference to the context in which the function is being called. The value of `this` isdetermined by how a function is called, and it can change based on the context in which the function
is invoked. */

// JsUser.greetingTwo = function () { // A function declaration
//     console.log(`Hello JS user, ${this.name}`); //this is used to reference the same object
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//Constructor method------------------------------------------------------------>

// const tinderUser = new Object() //Singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Vanesha",
//             lastname: "Cutinho"
//         }
//     },
//     age: 22
// }
// console.log(regularUser);
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: " a", 2: "b"}
// const obj2 = {3: " a", 4: "b"}

// //const obj3 = {obj1, obj2} //{ obj1: { '1': ' a', '2': 'b' }, obj2: { '3': ' a', '4': 'b' } }
/* `Object.assign` is a method in JavaScript that is used to copy the values of all enumerable own
properties from one or more source objects to a target object. It merges the properties of the
source objects into the target object. This method is commonly used to create a new object by
combining multiple objects together. */

// //const obj3 = Object.assign({},obj1, obj2) //Merges into one array

// const obj3 = {...obj1,...obj2} //... is spread operator
// console.log(obj3); 

//Accessing data which is coming from db

// const users = [
//     {
//         id:1,
//         email:"hs@gmail.com",
//     }
//     ,{
//         id:2,
//         email: "gs@gmail.com",
//     },
// ]

// console.log(users[0].email);
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// // const obj1 = {1: " a", 2: "b"} go to browser console and paste
// // then paste obj1 -> u will find all methods of objects

// console.log(tinderUser.toString());

//------------------------------Object de-structure-------------------------------------------

const course = {
    coursename: "Javascript cs",
    price: 999,
    courseInstuctor: "Hitesh"
}

console.log(course.courseInstuctor); //Usually we access or use values using . or []

//In order to make code cleaner
const {courseInstuctor:instructor} = course

// console.log(courseInstuctor);
console.log(instructor);

/* Object destructuring in JavaScript is a way to extract multiple properties from an object and assign them to variables in a more concise and readable manner. It allows you to unpack values from objects and store them in variables with the same name as the object's properties.

Syntax: The basic syntax involves using curly braces {} on the left side of the assignment operator =. Inside the curly braces, you list the names of the properties you want to extract */

// const user = {
// name: 'John Doe',
// age: 30,
// city: 'New York'
// };

// // Destructuring to extract name and age
// const { name, age } = user;

// console.log(name); // John Doe
// console.log(age);  // 30
// //console.log(city) //Error

/* JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used to transmit data between a server and web application as it is language-independent and can be easily converted to JavaScript objects for manipulation in code. */

// {
//     "name" : "Vanesha",
//     "coursename" : "js",   //JSON 
//     "price" : "free"
// }


