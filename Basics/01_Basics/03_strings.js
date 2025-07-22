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