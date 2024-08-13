// // Temporal API

// let myDate = new Date();
// // console.log(myDate); // Output - 2024-08-05T06:01:42.820Z
// // console.log(myDate.toString()); // Output - Mon Aug 05 2024 06:03:20 GMT+0000 (Coordinated Universal Time)
// // console.log(myDate.toLocaleDateString()); // Output - 8/5/2024
// // console.log(myDate.toLocaleString()); // Output - 8/5/2024, 6:04:20 AM


// // // type of date is object

// // console.log(typeof myDate);

// // To create the specific date

// let myCreatedDate = new Date(2023, 0, 23);
// // console.log(myCreatedDate.toDateString());


// // Timestamps

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(new Date());


// String interpolation to print day and time is with `{} and time is {}`

// Revision =>

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 1 , 23)
// let myCreatedDate = new Date(2023, 1 , 23, 5, 3)
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());


// Timestamps

// let myTimeStamp = new Date();
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ''
})
console.log(newDate);