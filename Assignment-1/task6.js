// console.log(10%2);

for (index = 1; index <= 100; index++) {
  let fizz = index % 3;
  let buzz = index % 5;

  if (fizz === 0 && buzz === 0) {
    console.log("FizzBuzz");
  } else if (fizz % 3 === 0) {
    console.log("Fizz");
  } else if (buzz % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}

