
let numberget  = Math.floor(Math.random()*850)+1  //total marks 850
console.log(`number you got${numberget}`);
let averagenum= Math.round(numberget*100/850)
console.log(`percentage you got${averagenum}`);
if(averagenum<60){
    console.log("Grade F")
   
}else if(averagenum<70){
    console.log("Grade D");
}
else if(averagenum<80){
    console.log("Grade C");
}
else if(averagenum<90){
    console.log("Grade B");
}
else if(averagenum<100){
    console.log("Grade A");
}