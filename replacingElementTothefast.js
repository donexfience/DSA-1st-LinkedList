const array = [3, 4, 5, 3, 2, 4, 3, 3, 6, 8, 1, 9, 4, 3];
function replacingTOFast(array, target) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result.push(array[i]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== target) {
      result.push(array[i]);
    }
  }
  return result;
}

const reslut = replacingTOFast(array, 3);
console.log(reslut);
