// // // // Now we can see how to declare objects through singleton or constructor

// // // const tinderUser = new Object(); // => Single term object
// // // const tinderUserNew = {

// // // // } // Non Single term object

// // // // tinderUserNew.name = "mayank";
// // // // tinderUserNew.id = "123";
// // // // tinderUserNew.isLoggedIn = false; 

// // // // console.log(tinderUserNew);

// // // const regularUser = {
// // //     email: "som@gmail.com",
// // //     fullname: {
// // //         userfullname: {
// // //             firstname: "Mayank",
// // //             lastname: "Arora"
// // //         }
// // //     }
// // // }
// // // // console.log(regularUser.fullname.userfullname);


// // // const obj1 = {1: "a", 2: "b"};
// // // const obj2 = {3: "c", 4: "d" };

// // // // const obj3 = {obj1, obj2};
// // // // const obj3 = Object.assign({}, obj1, obj2)

// // // const obj3 = {...obj1, ...obj2} // Spread operator

// // // console.log(obj3);


// // // // Array of an object =>

// // //     const users = [
// // //         {
// // //             user1: "mayank",
// // //             id: 1
// // //         },
// // //         {
// // //             user2: "bhumika",
// // //             id: 2
// // //         }
// // //     ]

// // //     // console.log(users[1].email);
// // //     console.log(Object.keys(users));
// // //     console.log(Object.values(users));
// // //     console.log(Object.entries(users));

// // const course = {
// //     coursename: "js in hindi",
// //     price: "999",
// //     "courseInstructor": "hitesh"
// // }

// // const {courseInstructor: Instructor} = course
// // console.log(Instructor);


// // // JSON Format =>

// //     // {
//     //     "name": "hitesh",
//     //     "coursename" : "js in hindi",
//     //     "price": "free"
//     // }

// // Revision =>

// // const tinderUser = new Object()

// // tinderUser.id = "121abc";
// // tinderUser.name = "Mayank";

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "mayank",
//             lastname: "arora"
//         }
//     }
// }

// // console.log(regularUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {...obj1, ...obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }
// ]

// // users[]
// console.log(users[1].email);

// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));
// console.log(tinderUser.hasOwnProperty);

// Objects destructing

// const course = {
//     coursename: "js in hindi",
//     price: 999,
//     courseInstructor: "hitesh" 
// }


// const {courseInstructor: instructor} = course

// console.log(instructor);

// JSON
// {
//     name: "mayank",
//     coursename: "js in hindi",
//     price: "free"
// }

// 