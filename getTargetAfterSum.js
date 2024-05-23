const array = [6, 5, 4, 3, 9, 8, 0];
function targetFoundingFunction(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

let result = targetFoundingFunction(18, array);
console.log(result);


