// array

const myArray = [0, 1, 2, 3, 4, 5] // In array we can tak differnt types of elements as well
// collection of multiple items in songle variable

//  Array copies => 1. Shallow copies 2. deeep copies

// Ways to create array

// const Heros = ["Shaktiman", "Naagraj"];

// const myArr2 = new Array();

// Array Methods

// myArray.push(6); // => To add the value in the last
// myArray.pop(5) // => To remove the value in last

myArray.unshift();
myArray.shift();

// To check the value exits in array or not
console.log(myArray.includes(9))
// To check the index no of value
console.log(myArray.indexOf(9));



const newArr = myArray.join();
console.log(myArray);
console.log(typeof newArr);


// slice and splice