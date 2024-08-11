// // // for loop

// // for (let i = 0; i <= 10; i++) {
// //     const element = i; 
// //     if( element == 5){
// //         console.log("5 is the best number");
        
// //     }
// //     console.log(element);
// // }

// // for (let i = 0; i < 10; i++) {
// //     console.log(`Outer Loop ${i}`);
    
// //     for (let j = 0; j < 10; j++) {
// //         // const element = array[j];
// //         console.log(`Inner loop value ${j} and inner loop ${i}`);
// //     }
// // }

// // const myArray = [1, 2, 3, 4, 5];
// // const myString = "helloo";

// // console.log(myArray.length);
// // console.log(myString.length);

// let myArray = ["flash", "batman", "superman" ];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);       
// }


for (let i = 1; i <= 20; i++) {
    if( i===5 ){
        console.log(`Your favourite no is ${i}`);
        break;
    }
    console.log(i);   
}