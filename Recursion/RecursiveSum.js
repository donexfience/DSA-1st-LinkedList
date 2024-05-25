function RecursiveSum(n) {
  let sum = 0;
  if (n === 10) {
    return 10;
  }
  sum = n + RecursiveSum(n + 1);
  return sum;
}

let result = RecursiveSum(1);
console.log(result);
