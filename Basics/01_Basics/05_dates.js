//Dates

const myDate = new Date();
//console.log( myDate);

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

console.log(typeof myDate);

// let myCreatedDate = new Date(2023,1,13)
let myCreatedDate = new Date('2023-1-13')
let myTimeStamp = Date.now();
// console.log(myCreatedDate.toDateString());
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))


console.log(`${myDate.getDate()} is the date of the month`);

const newDate = new Date();
newDate.toLocaleString('default', {
    weekday:"long",
}) //Customizations

