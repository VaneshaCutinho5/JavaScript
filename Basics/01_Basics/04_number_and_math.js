 //Number
const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //Convert number to string
console.log(balance.toFixed(2));

const otherNum = 23.890
console.log(otherNum.toPrecision(2));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN')); //By default use american standard but with en-IN it uses indian standard


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.ceil(4.2));
// console.log(Math.random() * 10 + 1)

// const max = 10
// const min = 5

// console.log(Math.floor(Math.random() * (max - min + 1))+ min)