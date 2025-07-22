//master js objects and browser events
//Js is a dynamically typed lang(doesn't strictly ask for datatype like java)

/*Based on how data is stored in mem. and accessed 
data is categorized into primitive and non-prim.

Primitive 7 (call by value)
String , boolean, Big Int, null, undefined, number, Symbol

Reference (call by ref) / Non-Primitive
Object, arrays, Functions
*/


// let checkTemp;

// const id = Symbol('123')
// const anotherId = Symbol('123') 

// console.log(id == anotherId);  //Both are unique so there are false

// const heroes = ["spdman","ironman","hulk"]
// let myObj = {
//     name : "vanesha",
//     age : 23
// }

// const myFunction = function() {
//     console.log("Hello World!");
// }

// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack memory(Primitive) and Heap Memory(Non - Primitive)

//Stack me declare hua variable ka copy bantha hai                        
//Heap memory me reference(pointer) miltha hai original value ka

let myYtname = "vaneshaytc" 

let anotherYtname = myYtname // copy of value
anotherYtname = "anotherytc"

console.log(myYtname);
console.log(anotherYtname);

/* The comment you have provided is explaining the concept of call by value in JavaScript when dealing
with primitive types. It states that when you pass a primitive type (such as a number, string,
boolean, undefined, etc.) to a function, JavaScript uses call by value. This means that the actual
value is passed to the function, and a copy of that value is made. Any changes made to the copy
within the function do not affect the original value outside of the function. This is because
primitive types are stored in the stack memory, and when passed to a function, a copy of the value
is created in a new memory location. */

/* Call by Value (Primitive Types)
When you pass a primitive type (like a number, string, boolean, undefined, etc.) to a function, JavaScript 
uses call by value. This means that the actual value is passed to the function, and a copy of that value is made. 
Changes to the copy do not affect the original value. */

/*How It Works:
The value is stored in the stack (because primitives are stored in the stack).

A copy of that value is created when passed to the function.

Any changes to the parameter inside the function do not affect the original value outside the function.

Example:
javascript

function modifyValue(x) {
  x = 10;
}

let a = 5;
modifyValue(a);
console.log(a);  // Output: 5 (original value is unchanged)
Explanation:

When a is passed to modifyValue(x), x gets a copy of the value 5.

Changing x inside the function has no effect on a because x is just a copy, not a reference to the original variable.

Since a was stored in the stack, its value remains unaffected.

Call by Reference (Reference Types)
When you pass an object or an array (i.e., reference types) to a function, JavaScript uses call by reference. This means that the function receives a reference (or memory address) pointing to the original object in the heap. Any modifications to the object inside the function will affect the original object because both the original variable and the parameter inside the function point to the same location in memory.

How It Works:
The reference to the object is stored in the stack.

The actual object (or array) is stored in the heap.

When the reference is passed to the function, both the original variable and the function parameter point to the same object in the heap.

Modifications inside the function will affect the object in the heap, and thus the changes are reflected outside the function.

Example:
javascript
Copy
Edit
function modifyObject(obj) {
  obj.name = 'Bob';
}

let person = { name: 'Alice' };
modifyObject(person);
console.log(person.name);  // Output: 'Bob' (original object is modified)
Explanation:

When person is passed to modifyObject(obj), the reference to the object is passed.

Both person and obj now point to the same object in the heap.

Changing obj.name inside the function modifies the original object that person references.

Therefore, person.name is changed to 'Bob' outside the function.

Key Differences between Call by Value and Call by Reference:
Aspect:	                Call by Value (Primitives)	                     |         Call by Reference (Objects/Arrays)
What is passed:	        A copy of the value	                             |  A reference (pointer) to the object/array in the heap
Effect of modification:	Modifications do not affect the original variable|  Modifications affect the original object/array
Storage location:	      Stored in the stack (primitive values)	         |  Reference stored in the stack, object/array in the heap
Example:	              let x = 10; modifyValue(x); (x remains unchanged)|  let obj = { key: "value" }; modifyObject(obj); (obj is modified)

Summary:
Primitives (like numbers and strings) are passed by value: a copy of the value is passed to the function, and changes inside the function don’t affect the original variable.

Reference types (like objects and arrays) are passed by reference: a reference (memory address) to the object is passed, so modifications inside the function will affect the original object.

The key takeaway is that primitives are passed by value, meaning their copies are used in function calls, while objects and arrays are passed by reference, meaning the function gets access to the original data in memory (the heap).
*/

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne // reference
userTwo.email = "img@gmail.com"

console.log(userOne);
console.log(userTwo);

