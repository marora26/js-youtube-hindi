// let a = 100;
// const b = 200;
// var c = 300;

// if(true){
    
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
 
// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope

// function one(){
//     const username = "mayank";

//     function two(){
//         const website = "youtube";
//         console.log(username);
        
//     }

//     // console.log(website);
//     two()
// }
// one()

if(true){
    const username = "mayank";
    if(username === "mayank"){
        const website = "google.com"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);
