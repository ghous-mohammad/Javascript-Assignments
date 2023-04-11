/*3. Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console*/


let number1 = +prompt("type first number")
let number2 = +prompt("type secound number")
let number3 = +prompt("type third number")
let number4 = +prompt("type fourth number")
let number5 = +prompt("type fifth number")

let maxnum = Math.max(number1,number2)

maxnum = Math.max(maxnum,number3)
maxnum = Math.max(maxnum,number4)
maxnum = Math.max(maxnum,number5)
console.log(maxnum); 
