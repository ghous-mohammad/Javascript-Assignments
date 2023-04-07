// console.log(10%2);

for (index = 1; index <= 100; index++) {
  let fizz = index % 3;
  let buzz = index % 5;

  //     if(fizz===0){
  //     console.log("fizz");
  //    }
  // if(buzz==0 && fizz===0){
  //     console.log("fizzbuzz");
  //    }else if(buzz===0){console.log("fizz");}
  switch ((fizz, buzz)) {
    case 1:
      buzz == 0;
      console.log("buzz");
      break;
    case 2:
      fizz == 0;
      console.log("fizz");
      break;
    case 3:
      buzz == 0 && fizz == 0;
      console.log("fizz buzz");

    default:
      break;
  }
}
