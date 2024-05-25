function fibinocci(n) {
  let fibi = [0, 1];
  for (let i = 2; i < n; i++) {
    fibi[i] = fibi[i - 1] + fibi[i - 2];
  }
  return fibi;
}
let fibiResult = fibinocci(7);
console.log(fibiResult);
function recursiveFibinocci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibinocci(n - 1) + recursiveFibinocci(n - 2);
}
const result = recursiveFibinocci(6);
console.log(result);

function factorial(n) {
  let result = 1;
  if (n == 1 || n == 0) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
const factorialresult = factorial(6);
console.log(factorialresult);

function recursiveFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

const recursiveFactorialResult = recursiveFactorial(6);
console.log(recursiveFactorialResult);
