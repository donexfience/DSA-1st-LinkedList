function recursiveFactorial(n) {
  let factorialresult = 1;
  if (n < 2) {
    return 1;
  }
  factorialresult = n * recursiveFactorial(n - 1);
  return factorialresult;
}

let result = recursiveFactorial(5);
console.log(result);
