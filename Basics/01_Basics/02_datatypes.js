//alert(3+3) // we are using nodejs and not browser

//Readability is important
//Type conversion(Explicit) -> ParseInt(), ParseFloat(), toString
//Type coercion(Implicit/Automatic)

let name = "vanesha"
let age = 18
let isLoggedIn = true

/*
Primitive(7) :

number => 2 to power 53
bigInt (for bigger numbers for problems like )
string => " "
boolean => true/false
null => standalone value or representation of empty value
undefined => value hasn't been assigned
symbol => to find the uniqueness
*/

/*
object
*/

/* null is an object
console.log(typeof "hitesh"); => string
console.log(typeof undefined); => undefined
console.log(typeof null); => object
*/
console.log(typeof null); 
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Conversion operation

// let score = true

// console.log(typeof score); // => boolean

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber); // => number
// console.log(valueInNumber); // => NaN

/*
33 => number -> 33
"33abc" => string -> NaN
null => 0
*/

let gameCounter = 100;
gameCounter++;

//console.log(gameCounter);

// Compare same datatypes
// comparing different datatypes can lead to unpredictable answers

console.log("2" > 1) // Different Datatype
console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // Comparisons convert null to a number (0)

// console.log(undefined == 0);

// === (Strict check) checks value and datatype

//console.log(89 == "89");

const num = 89
console.log(typeof num);







