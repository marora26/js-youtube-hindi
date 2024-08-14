// // // // function sayMyName(){
// // // //     console.log("M");
// // // //     console.log("A");
// // // //     console.log("Y");
// // // //     console.log("A");
// // // //     console.log("N");
// // // //     console.log("K");      
// // // // }
// // // // sayMyName();

// // // // function addTwoNumbers(number1, number2){ // Parameters
// // // //     console.log(number1 + number2);
// // // // }
// // // function addTwoNumbers(number1, number2){ // Parameters
// // //     let result = number1 + number2;
// // //     console.log("mayank");
// // //     // return result
// // //     return number1 + number2;   
// // // }
// // // addTwoNumbers(3, "3"); // Arguments

// // // // const result = addTwoNumbers(3,5)
// // // // console.log(result);


// // // function loginUserMessage(username = "sam"){
// // //     if( !username ){
// // //         console.log("Please enter a username");
// // //         return
// // //     }
// // //     return `${username} just logged in`;
// // // }
// // // console.log(loginUserMessage("mayank"));

// // function calculateCartPrice(val1, val2, ...num1){ // ...rest or spread operator
// //     return num1;
// // }

// // console.log(calculateCartPrice(200, 300, 400));

// // Revision =>

// // Functions to make a package



// // function saymyName(){
// //     console.log("M");
// //     console.log("A");
// //     console.log("Y");
// //     console.log("A");
// //     console.log("N");
// //     console.log("K");
// // }

// // saymyName();
// // // console.log(say);

// // function addTwoNumbers(number1, number2){ //parameters
// //     console.log(number1 + number2); 
    
// // }

// function addTwoNumbers(number1, number2){ //parameters
// //    let result =  number1 + number2 
// //    return result;
// return number1 + number2
// }

// const result = addTwoNumbers(3,5); // arguments || values
// // console.log(result);
// // pass the numbers

// function loginUserMessage(username="sam"){
//     if(!username){
//         console.log("please enter a username");
//         return;
//     }
//     return `${username} justloggedIn`;
// }
// // const message = loginUserMessage();
// console.log(loginUserMessage());

// // console.log();

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));
// Rest opearotr and spread operator both are same

const user = {
    username: "mayank",
    price: 199
}

function handlerObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handlerObject(user);

const myNewArray = [200, 400, 100, 600]