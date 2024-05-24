function recursiveFibinocci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibinocci(n-1) + recursiveFibinocci(n - 2);
}

const result = recursiveFibinocci(6);
console.log(result);

