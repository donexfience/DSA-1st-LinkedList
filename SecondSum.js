function Sum(n) {
  return (n * (n + 1)) / 2;
}

let ps = Sum(5);
console.log(ps);
// Big 0 complexity is O(1)

function copying(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
let array = [1, 2, 335, 6, 54, 3];
let copyresult = copying(array);
console.log(copyresult);


// HERE  in the copying fucntion space complexity is O(n)
