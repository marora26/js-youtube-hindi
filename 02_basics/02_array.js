// const marvel_Heros = ["thor", "Ironman", "Spiderman"];
// const dc_Heros = ["Superman", "Flash", "Batman"];


// const new_Heros = marvel_Heros.concat(dc_Heros);

// // console.log(new_Heros);

// const all_new_heros = [...marvel_Heros, ...dc_Heros];
// console.log(all_new_heros);
// console.log(typeof all_new_heros);


// .flat method to join the array

// Revision =>

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "Flash", "batman"];

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// push and concat
// concat will merge all the existing arrays and returns you the new array

// console.log("Hello world");

// spread operator and concat

const new_heros = [...marvel_heros, ...dc_heros]

console.log(new_heros);

const another_array = [1, 2, 3, 4, 5, 6, 7, [6, 7, [4, 5]]];

const real_another_arr = another_array.flat(Infinity); // flat method to retuen all array in one array
console.log(real_another_arr);

// Array.isArray("Mayank");
console.log(Array.from("Mayank"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // to merge multiple variable in one array
