const array = [ 0, 1, 2, 3, 4, true]

// JavaScript arrays are resizable and can contain a mix of different data types. 
// Javascript array copy operations make shallow copies
// Shallow copies share same reference
// Deep copies do not share same reference

// array.push(5)
// array.push(7)
// console.log(array);
// array.pop()
// console.log(array);

// console.log(array.includes(9))
// console.log(array.indexOf(9))

// const newArr = array.join()
// console.log(typeof newArr);

// slice, splice
// console.log("A ", array)

// const myn1 = array.slice(1,3)

// console.log(myn1);
// console.log("B ", array);

// const myn2 = array.splice(1,3)
// console.log("C ", array);
// console.log(myn2);

//Slice partitions the array temporarily but leaves out the end
//Splice partitions the array permanently and takes the end into consideration

const marvel_heroes = ["thor","hulk","spiderman"]
const dc_heroes = ["superman","aquaman","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);


//Array gets pushed into the existing array as one unit
// [ 'thor', 'hulk', 'spiderman', [ 'superman', 'aquaman', 'batman' ] ]

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);
//Return new array with merged data as individual units
//[ 'thor', 'hulk', 'spiderman', 'superman', 'aquaman', 'batman' ]

const new_heroes = [...marvel_heroes, ...dc_heroes] //... spread operator
console.log(new_heroes);

// const another_array = [1,2,3,4,[7,5,6],[5,6,7,[4,5,6]]]
// const nother_array = another_array.flat(Infinity) // flattens multiple nested arrays

// console.log(nother_array);


//To convert different data(Web scrapping) to Arrays

console.log(Array.isArray("Vanesha")); //question
console.log(Array.from("Vanesha")); //to convert any data to array

/* `console.log(Array.from({name: "Vanesha"}));` is attempting to convert an object `{name: "Vanesha"}`into an array. However, since the input is not an iterable object, it will not be directly converted into an array. Instead of converting the object into an array, it will return an empty array `[]`. */
console.log(Array.from({name: "Vanesha"})); //won't convert directly...gives []

console.log(Array.from({name: "Vanesha"})); //must declare if we want keys or values array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //merges all values into an array



