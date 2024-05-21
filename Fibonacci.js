function fibonacci(n) {
  const fibi = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibi[i] = fibi[i - 1] + fibi[i - 2];
  }
  return fibi;
}

const result = fibonacci(7);
console.log("resulting array", result);


//Big O notation = O(n)