function sorting(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

let sortedresult = sorting([4, 6, 3, 8, 2, 7, 5]);
console.log(sortedresult);
function BInarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let MiddleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[MiddleIndex]) {
      return MiddleIndex;
    }
    if (target < array[MiddleIndex]) {
      leftIndex = MiddleIndex + 1;
    } else {
      rightIndex = MiddleIndex - 1;
    }
  }
  return -1;
}
const result = BInarySearch(sortedresult, 7);
console.log(result);
