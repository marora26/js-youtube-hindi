// const user = {
//     username: "Mayank",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     } 
// }
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
// // this is for current context to acceess the variables

// function chai(){
//     let username = "mayank";
//     console.log(this.username);    
// }
// chai();

// const chai = () => {
//     let username = "mayank";
//     console.log(this.username);    
// }

// chai();

const addTwo = (num1, num2) =>  (num1 + num2);

// Implicit return
// {} => then retun required
// () => then return not required

console.log(addTwo(2,4));