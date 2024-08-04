const name = "mayank";
const repoCount = 26;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// // To declare the string =>

const gameName = new String('mayankar');

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   mayank    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://mayank.com/mayank%20arora";

console.log(url.replace('%20', '-'));

console.log(url.includes)