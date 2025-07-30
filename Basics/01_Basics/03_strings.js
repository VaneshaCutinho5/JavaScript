const name = "Vanesha"
const repoCount = 22

// console.log(name + repoCount + " Value"); -> Outdated version of writing

console.log(`My name is ${name} and my repo count is ${repoCount}`); //String interpolation

const fullname = new String('Vanesha R Cutinho')

fullname //In browser returns "string" with many methods(Prototype)
console.log(typeof(fullname));
console.log(fullname);

console.log(fullname[0]);
console.log(fullname.__proto__);

console.log(fullname.charAt(2));
console.log(fullname.indexOf('t'));

const newName = fullname.substring(0,4)
console.log(newName);

const newNamee = fullname.slice(1, 5)
console.log(newNamee);

const logName = "www.logName%20master.com"
console.log(logName.replace('%20', '-'));

console.log(logName.includes('Name'));
console.log(logName.split('%'));


// Strings have many methods

//String interpolation is `${}` something

//-------------------------------Own research------------------------------------
//Strings are immutable 
//Check chatgpt Differences in loops query
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"


const stringPrim = String(1)
const stringObj = new String(1)

console.log(stringPrim);
console.log(stringObj);



const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf())); // returns the number 4        //Converts a string object to string primitve
