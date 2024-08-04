// Difference between primitive and non-primitive data types
// Call by value or call by reference

// 7 Primitive Data Types =>
/* 1. String
2. Number
3. Boolean
4. undefined - Variable is declared but no value is there
5. Null
6. BigInt
// 7. Symbol

// */

// const score = 100; // Number
// const scoreValue = 100.3 // Number

// const isLoggedIn = false; // Boolean
// const outsideTemp = null; // null
// let userEmail; // undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');

// const bigNumber = BigInt(9.999);
// const bigNumberNew = 9999999n;

// // Non Primitive Data Types -

// /* 
// 1. Arrays
// 2. Object
// 3. Functions
// */ 

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     "name": "mayank",
//     "age": "22";
// }

// const myFunction = function() {
//     console.log("Hello World"); 
// }

// // 

// console.log(typeof variablename);




// Memories in Javascript
// Stack(Primitive) and Heap(Non-primitive)

let myYoutubeName = "mayankarora2698@gmail.com";
let anotherName = myYoutubeName;
anotherName = "chai-aur-code";

console.log(myYoutubeName);
console.log(anotherName);
