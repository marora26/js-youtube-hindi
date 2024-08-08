// // function sayMyName(){
// //     console.log("M");
// //     console.log("A");
// //     console.log("Y");
// //     console.log("A");
// //     console.log("N");
// //     console.log("K");      
// // }
// // sayMyName();

// // function addTwoNumbers(number1, number2){ // Parameters
// //     console.log(number1 + number2);
// // }
// function addTwoNumbers(number1, number2){ // Parameters
//     let result = number1 + number2;
//     console.log("mayank");
//     // return result
//     return number1 + number2;   
// }
// addTwoNumbers(3, "3"); // Arguments

// // const result = addTwoNumbers(3,5)
// // console.log(result);


// function loginUserMessage(username = "sam"){
//     if( !username ){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("mayank"));

function calculateCartPrice(val1, val2, ...num1){ // ...rest or spread operator
    return num1;
}

console.log(calculateCartPrice(200, 300, 400));