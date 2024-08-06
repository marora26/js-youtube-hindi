const marvel_Heros = ["thor", "Ironman", "Spiderman"];
const dc_Heros = ["Superman", "Flash", "Batman"];


const new_Heros = marvel_Heros.concat(dc_Heros);

// console.log(new_Heros);

const all_new_heros = [...marvel_Heros, ...dc_Heros];
console.log(all_new_heros);
console.log(typeof all_new_heros);


// .flat method to join the array