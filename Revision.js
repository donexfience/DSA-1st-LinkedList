function Factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
let result = Factorial(4);
let result2 = fibonacci(4);
let CheckPrime = Prime(7);
console.log(result);
console.log(result2);
console.log(CheckPrime);

function fibonacci(n) {
  const array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

function Prime(n) {
  if (n < 2) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
