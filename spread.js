//convert a String into a list of characters
let greetings = "hello";
let chars = [...greetings];
console.log(chars);
//Expanding Arrays
let greet = ['Hello', 'World'];
console.log(greet); // Without spread operator
console.log(...greet); // Using spread operator

//copying array objects
let arr1 = ['John', 'Sofia', 'Bob'];
let arr2 = [...arr1, 'Anthony', 'Sean'];
console.log(arr2);
