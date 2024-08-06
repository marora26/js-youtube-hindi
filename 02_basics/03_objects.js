// 2 ways to declare the objects => 1. Literal 2. Constructor 
// singleton

// object literals
// Object.create => Constructor method through single ton

// Literal Method =>

const mySym = Symbol("key1");

const jsUser = {
    "name": "Mayank",
    "full name": "Mayank Arora",
    [mySym]: "mykey1",
    "age": 18,
    location: "jaipur",
    email: "mayank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// To acces the value
// console.log(jsUser.email);
// console.log(jsUser["email", "age"]);
// console.log(jsUser[mySym]);

jsUser.email = "mayank@hotwireglobal.com";
// Object.freeze(jsUser);
jsUser.email = "mayank@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingtwo = function(){
    console.log(`Hello JS user ${this.name}`);   
}

// To refernce the same object we acan use this

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

