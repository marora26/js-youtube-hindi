// // let a = 100;
// // const b = 200;
// // var c = 300;

// // if(true){
    
// //     let a = 10;
// //     const b = 20;
// //     var c = 30;
// // }
 
// // console.log(a);
// // console.log(b);
// // console.log(c);

// // Nested scope

// // function one(){
// //     const username = "mayank";

// //     function two(){
// //         const website = "youtube";
// //         console.log(username);
        
// //     }

// //     // console.log(website);
// //     two()
// // }
// // one()

// if(true){
//     const username = "mayank";
//     if(username === "mayank"){
//         const website = "google.com"
//         console.log(username + website)
//     }
//     // console.log(website);
// }
// console.log(username);


// Revision =>


var c = 300; // global scope
let a = 100

if(true){
    let a = 10;
const b = 20;
// var c = 30;
// console.log("Inner: ", a);

} // block scope

// console.log(a);
// console.log(b);
// console.log(c);

// Nessted Scope

// function one(){
//     const username = "Hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two();
    
// }
// one();

if(true){
    const username = "hitesh";
    if(username==="hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

/// Interesting

addOne(5)
function addOne(num){
    return num + 1;
}
addTwo()

const addTwo = function(num){
    return num +2
}

// function holdind in variable need to be executed after