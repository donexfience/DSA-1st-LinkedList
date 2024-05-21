function factorail(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const p = factorail(1);
console.log(p);

//Big 0 is O(n)
