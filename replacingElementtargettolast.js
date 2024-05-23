const array = [4, 5, 3, 2, 4, 3, 56, 43, 4, 2, 1, 4];
function replacingtarget(array, target) {
  let result = [];
  let targetCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== target) {
      result.push(array[i]);
    } else {
      targetCount++;
    }
  }
  while (targetCount > 0) {
    result.push(target);
    targetCount--;
  }
  return result;
}

let result = replacingtarget(array, 4);
console.log(result);
    