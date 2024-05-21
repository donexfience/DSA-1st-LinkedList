//beginner level example

function sum(n) {
  let sum = 0; // executed at once
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  //executed 5 times
  return sum; // executed at once
}

// so general term it will n+2
// time complexity increase with input size so it is linear
//here for loop executed at 4 times it is expressed in terms of  input size;

let result = sum(5);
console.log(result, "result after sum");
