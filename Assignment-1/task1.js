// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.


let prompt1 = +prompt("Write first number")
let prompt2 = +prompt("Write Secound number")


// way 1
// if(prompt1>prompt2){
//     console.log(`${prompt1} number is greater than ${prompt2}`);
// }else if(prompt2>prompt1){
//     console.log(`${prompt2} number is greater than ${propmt2}`);
// }

// way2
let maxnum = Math.max(prompt1,prompt2)
console.log(`this number is ${maxnum}`);