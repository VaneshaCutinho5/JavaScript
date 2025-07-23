//Functions 

/* The `function` keyword in JavaScript is used to define a function. It allows you to create a "reusable block of code" that can be called and executed at a later point in your program. When you define a function using the `function` keyword, you are essentially creating a named block of code that can be invoked by its name. */

const name = "Vanesha"

// function sayMyName() {
//     console.log(`My name is ${name}`); //function definition
    
// }

//sayMyName -> reference
//sayMyName() //function execution

// function addTwoNums(number1, number2){ //parameters
//     console.log(number1 + number2); -> result is undefined as console.log doesn't give any value
// }

// function addTwoNums(number1, number2){ //parameters
//     let result = number1+number2
//     return result
//     //console.log(); //nothing prints after return 
// }


// function addTwoNums(number1, number2){ //parameters
//     return number1 + number2
// }

// const result = addTwoNums(3, 5)//arguments & function call

// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//     if(!username){                                 //username === undefined 
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in!`
// }

// // console.log(loginUserMessage("Vanesha"));
// console.log(loginUserMessage());

//-----------------------------------------------------------------------------------------
// Functions with objects and array

// function calculateCartPrice(...num1) { //Use Rest or Spread operator
//     return num1
// }

// console.log(calculateCartPrice(200,400,500));//To take many values if user is shopping

function calculateCartPrice(value1,value2, ...num1) { //Use Rest or Spread operator
    return num1
}

console.log(calculateCartPrice(200,400,500));//200 goes into value 1

// const user = {
//     username: "Vanesha",
//     prices: 199 
// }

function handleObject(anyObject) { //How this obj is passed in function
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 999
    })

const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500]));

//Notes:
/* The spread operator in JavaScript is used to expand an iterable (like an array) into individual elements. When used in a function call or array literal, the spread operator allows you to pass elements of an array as arguments to a function or include elements of an array within another
array. It essentially "spreads" the elements of an array. */

/* The `rest operator` in JavaScript is used to collect multiple elements into a single array. It allows you to represent an indefinite number of arguments as an array. When used in a function parameter, the rest operator gathers all remaining arguments into an array, which can then be accessed and manipulated within the function. This is particularly useful when you want to work with
a variable number of arguments passed to a function. 
*/
