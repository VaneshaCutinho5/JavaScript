//IF

// if(true){

// }

// does if statement only execute if the condition is true?

//--> Yes, an if statement's code block is executed only when the condition specified in the if statement evaluates to true. If the condition is false, the code within the if statement's block is skipped, and the program continues with the next line of code after the if statement. 

// conditional operators
// <, >, <=, >=, ==, !=, ===, !==

//What is the diff. bt == and ===?
// == checks only value but === checks value and type.
// == is known as loose equality and === is known as strict equality

//What is !==?
// !== means "not equal value or not equal type". It is a comparison operator in JavaScript that checks if the two values being compared are not equal in either value or data type. For example, 5 !== "5" would return true because although the values are the same, the data types are not

if (2 !== '2'){
    console.log("executed")
}

//IF Else
//SInce if evaluates true conditions else evaluates false conditions

// if(2 === "2"){
// console.log("executed");
// }
// else{
// console.log("not executed");
// }

//Scope 

// let score = 200
// if(score > 100){
//     const power = "fly"     
//     console.log(`User power: ${power}`);   
// }

// console.log(`User power: ${power}`)

//Shorthand notation

// const balance =1000
// if (balance > 100) console.log("test"); //Implicit scope

const balance =1000
// if (balance > 100) console.log("test"), console.log("test2"); //not a good practise code

// if (balance < 500) {
//     console.log("Balance is < 500");   
// }
// else if (balance < 750) {
//     console.log("Balance is < 750");
// }
// else if (balance < 900) {
//     console.log("Balance is < 900");   
// }
// else{
//     console.log("Balance is < 1200");
// }

// ------------------------Switch statement---------------------
//for multiple conditions 
//helpful for redux

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); //If break was not there it displays all except default case
        //break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

// -----------------------truthy and falsey values---------------------------(check mdn docs)

//truthy values "0", 'false', " ", [], {}, function(){}
// all values are truthy except false, 0, -0, (BigInt) 0n, "", null, undefined, NaN (Important)

/* A truthy value is a value that is considered true when encountered in a Boolean context. In
JavaScript, all values are inherently truthy unless they are defined as falsy. Truthy values are not necessarily equal to the boolean value `true`, but they are evaluated as true in conditions that expect a boolean value. Examples of truthy values in JavaScript include non-empty strings, numbers other than 0, arrays, objects, and functions. When a truthy value is encountered in a conditional statement, it will cause the associated block of code to be executed. */

// const userEmail = "h@himanshu@gmail.com"

// if(userEmail) { //Truthy value
//     console.log(`Got user email : ${userEmail}`);
// }
// else{
//     console.log("Don't have user email");
// }

// In JavaScript, many non-boolean values can be implicitly converted to a boolean context (coerced) and treated as "truthy" or "falsy."
// For instance, in JavaScript, 0, null, undefined, "" (empty string), and NaN are considered "falsy," while non-zero numbers, non-empty strings, objects, and arrays are "truthy."


// const user = {
//     Email : "h@himanshu@gmail.com",   //Practising accesing objects using []
//     name : "himanshu",
// }
// if(user) {
//     console.log(`Got user email : ${user["Email"]}`);
// }
// else{
//     console.log("Don't have user email");
// }


/* JavaScript uses type coercion in Boolean contexts.
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit. */
const userEmail = " "


if(userEmail){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){ //Object.keys -> Returns an array of keys
console.log("Object is empty");

}

//&& - all should be true
//|| - any one should be true

/* The Nullish Coalescing Operator (`??`) is a logical operator in JavaScript that provides a way to handle default values for null or undefined values. It is used to determine whether a value is null or undefined and, if so, provide a default value instead. */

//Nullish Coalescing Operator

// let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = null ?? 10??20;
//val1 = undefined ?? 8 // Uses first non-null number or value

// console.log(val1);

//Ternary operator

// condition ? true: false

// const iceTeaPrice  = 100
// iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");

