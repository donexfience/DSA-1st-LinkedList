function recursiveFibi(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibi(n - 1) + recursiveFibi(n - 2);
}
let result = recursiveFibi(5);
console.log(result);

function normalFibi(n) {
  let fibi = [0, 1];
  for (let i = 2; i < n; i++) {
    fibi[i] = fibi[i - 1] + fibi[i - 2];
  }
  return fibi;
}

let normalResult = normalFibi(6);
console.log(normalResult);

function RecursiveFactorial(n) {
  let result = 1;
  if (n < 2) {
    return 1;
  }
  result = n * RecursiveFactorial(n - 1);
  return result;
}

const recursiveFactresult = RecursiveFactorial(3);
console.log(recursiveFactresult);

let str = "donex";
let ar = [];
for (let i = 0; i < ar.length; i++) {
  ar[i] = str[i];
}
function RecursivePallindrome(array, start, end) {
  if (start >= end) {
    return true;
  }
  if (array[start] != array[end]) {
    return false;
  }
  return RecursivePallindrome(array, start + 1, end - 1);
}

let recursivePallindromResult = RecursivePallindrome(ar, 0, ar.length - 1);
console.log(recursivePallindromResult);
