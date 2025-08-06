const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

console.log(Math.PI);

Math.PI = 5
console.log(Math.PI); // tried changing math.pi value but it doesnt change.Why?

//because of writable: 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

let newObj = {
    name: "Vanesha",
    age: 23,
    isLoggedIn : true,

    getChai: function(){
        console.log(`${name} gets chai`);
        
    }
}

// const objDescriptor = Object.getOwnPropertyDescriptor(newObj, "name")
// console.log(objDescriptor);

Object.defineProperty(newObj, 'name', {         //writable: false (doesn't allow values to be changed)
//     writable: false,                         // enumerable: false (doesn't allow loop to work for tis prop)
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

// console.log(newObj.name)
// console.log(newObj.name);

for (const [key, value] of Object.entries(newObj)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`)
    }
}