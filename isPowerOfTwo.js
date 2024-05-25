function isPowerOfTwo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
let result = isPowerOfTwo(8);
console.log(result);
