//For loop, Break statement and continue

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5) console.log("5 is best number");
    
//     console.log(element);  
// }

// for (let i = 2; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j < 10; j++) {
//         console.log(i + " * " + j + " = " + i * j);
        
//     }
// }

//Break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`)   
// }

/* The `break` statement is used to exit a loop prematurely. In the context of the code snippet you provided, when the value of `i` reaches 5, the `break` statement is encountered which causes the loop to terminate immediately, preventing any further iterations. This means that the loop stops executing and the program continues with the code outside the loop. */


// for (let i = 0; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${i}`)   
// }

/* The `continue` statement is used in a loop to skip the current iteration and proceed to the next iteration immediately. In the context of the code snippet you provided, when the value of `i` is equal to 5, the `continue` statement is encountered. This causes the loop to skip the remaining code within the loop for that iteration and move on to the next iteration. This means that the console will log "Detected 5" when `i` is 5, but it will not log the value of `i` for that iteration and will continue with the loop for other values of `i`. */


// --------------------------While and do while loop----------------------------------------
//While loop

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index++   
// }

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2   
// }

let myArray = ['flash' , 'batman' , "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
// arr++   
// }

// let score = 1
// do {                                            //First work then check condition
//     console.log(`Score is ${score}`)
//     score++
// } while (score < 10 );

// let score = 11
// do {                                            //First work then check condition
//     console.log(`Score is ${score}`)
//     score++
// } while (score < 10 );

// ---------------------------------High Order functions-------------------------------------------

// Loops for Arrays and Objects

//for of

//[" ", " " ," "]
//[{}, {}, {}]

// for (const element of object) {
// }

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num); 
// }

// const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(greet);
    
// }

//Maps

/* `map` is a higher-order function in JavaScript that is used to transform elements of an array.The Map object holds key-value pairs and remembers the original insertion order of the keys. If you intended to use the `Map` data structure in JavaScript, it is used to store key-value pairs where keys can be of any type. */

// const map = new Map()       //Maps are iterable
// map.set('IN',"India")
// map.set('USA',"United States America")
// map.set('Fr',"France")
// map.set('IN',"India")

// // console.log(map);

// for (const key of map) {  //It gives separate arrays 
//     console.log(key);
// }


// for (const [key, value] of map) {       //array destructure
//     console.log(key, ':-', value);      // gives separate key and values
// }

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }


// for (const [key, value] of myObject) {       //Error
//         console.log(key, ':-', value);      // Objects are not iterable
// }

//Conclusion 
//for of loop worked for array and maps but not for objects

//for in loop

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby', 
//     swift : 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`); //for in loop works for Object
// }

// const programming = ["js", "c++", "java" ,"python"]
// for (const key in programming) {    //keys in arrays start from 0 to n
// console.log(`${key} : ${programming[key]}`);
// }

//for each loop

// const coding = ["js", "c++", "java" ,"python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// }) 

//Using arrow function

// coding.forEach( (item) => {
//     console.log(item);  
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item , indexedDB, arr) => {
//     console.log(item , indexedDB, arr);
    
// })

// const myCoding = [
//     {
//         languageName : "java", 
//         languageFileName : "java"
//     },
//     {
//         languageName : "javascript", 
//         languageFileName : "js"
//     },
//     {
//         languageName : "python", 
//         languageFileName : "py"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.languageName);  
// })

const coding = ["js", "c++", "java" ,"python"]

// const values = coding.forEach( (item) => {  //for each doesnt return values therefore we use filter
//     // console.log(item);
//     return item
// } )

// console.log(values);

//filter function 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8]    //19:32 mins

// const numbers = myNumers.filter(num => num % 2 === 0)
//     console.log(numbers);


// const numbers = myNumers.filter( (num) => num > 5)
//     console.log(numbers);

// const newNums = []

// myNumers.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter( (book) => book.genre === 'History')
// userBooks = books.filter( (book) => { return book.publish >=2000 })


// console.log(userBooks);


// const newNums = myNumers.map( (num) => num + 10)   // when scope {} opens we have to use return
// console.log(newNums);

// const newNums = myNumers
// .map( (num) => num * 10) //Value from this map function gets passed to the next map function
// .map( (num) => num + 1) 
// .filter((num)=> num >= 40 )

// console.log(newNums);

// --------------------------------------Reduce function-------------------------------------------------------------

/* The `reduce` function in JavaScript is used to reduce an array to a single value. It executes a provided function for each value of the array (from left to right) and accumulates a single result. The `reduce` function takes in a callback function and an initial value as arguments. */

// const array1 = [1, 2, 3, 4]

// const initialValue = 0;                 // accumulator takes initialValue 
// const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue , initialValue);

// or
// const sum = array1.reduce((acc, current) => acc+ current , 0);
// console.log(sum);

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// console.log(myTotal);
const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 3)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);