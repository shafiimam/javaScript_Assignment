
function isPrime(n) {
  for (i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return 'not a prime number';
    }
  }
  return 'prime number';
}

var result = isPrime(57);
console.log(result);