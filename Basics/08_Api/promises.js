// //Creating promises and consuming promises

// /* `Promise` is a built-in JavaScript object that represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value. It allows you to handle asynchronous operations more
// easily by providing a way to work with them in a more synchronous manner using methods like `then`,
// `catch`, and `finally`. */

// //const promiseOne = new Promise();

// // States:
// // A Promise can exist in one of three states:
// // Pending: The initial state; the asynchronous operation is still in progress.
// // Fulfilled (Resolved): The operation completed successfully, and a value is available.
// // Rejected: The operation failed, and an error reason is available.

// const promiseOne = new Promise(function(resolve,reject){    //Creating a promise 
//     //Do async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {                    // Consuming a promise  
//         console.log("Promise completed");
        
//     })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 completed");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Vanesha", id: 12323})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Bishamon", type:"Digimon"})
//         } else{
//             reject('Error: Something went wrong!!')
//         }
//     },1000)
// })

// const username1 = promiseFour.then(function(user){
//         console.log(user);
//         return user.username
//     })
//     console.log(username1);

// promiseFour.then(function(user){               //chaining
//         console.log(user);
//         return user.username
//     }).then((username) =>{
//     console.log(username);
//     }).catch((error)=>{
//         console.log(error)
//     }).finally(()=>{
//         console.log("The promise has been rejected or resolved");
        
//     })
    
    

// setTimeout( () =>{
//     console.log("hello");
    
// }, 0 )
// for (let i = 0; i < 100000; i++) {
//     console.log(i);
// }

// console.log("Task");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// console.log("Task5");
// console.log("Task6");
// console.log("Task7");


// setTimeout(()=>{
//     console.log("Task1")
// },1000)

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username: "javascript",
                password: 123
            })
        } else{
            reject("Error: JS went wrong!")
        }
    }, 1000)
})

async function consumePromiseFive(){
try{
    const respnse = await promiseFive
console.log(respnse);
}
catch(error){
    console.log(error); 
}
}
consumePromiseFive()

// async function getAllUsers() {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
// }

// async function getAllUsers() {
//     try{
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//     console.log(data)
//     } catch(error){
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})


