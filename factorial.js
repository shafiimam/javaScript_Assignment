

// function factorial(num) {
//   var factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(factorial(0));
// using while loop
// function factorial(num) {
//   var fact = 1;
//   let i = 1;
//   while (i <= num) {
//     fact = fact * i;
//     i++
//   }
//   return fact;
// }

// console.log(factorial(10));

// recursive function
let factorial = (number) => {
    if (number == 0) {
      return 1;
    }
    else {
      return number * factorial(number - 1)
    }
  }
  var result = factorial(10);
  console.log(result);