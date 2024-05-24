function Sum(n) {
  let resultAfterSum = 0;
  if (n == 1) {
    return n;
  }
  resultAfterSum = n + Sum(n - 1);
  return resultAfterSum;
}
const reslut = Sum(10);
console.log(reslut)
