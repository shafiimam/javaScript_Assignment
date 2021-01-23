


// let fibo = (n) => {
//   let fibo = [0, 1];
//   for (let i = 2; i <= n; i++) {

//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

// var result = fibo(15);
// console.log(result);
// recursive function

// function for calculating the fibonacci number
function fibonacci(n) {
  // stopping condition
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  // recursive condition
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// function for detemining the series in an array
function fibArray(m) {
  let array = [0, 1];
  for (let i = 2; i <= m; i++) {
    array.push(fibonacci(i));
  }
  return array;
}

let resultArray = fibArray(10);
console.log(resultArray);
console.log(fibonacci(10));
