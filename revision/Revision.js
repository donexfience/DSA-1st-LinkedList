function BinarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    }
    if (array[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

const result = BinarySearch([4, 5, 7, 7, 8, 9], 9);
console.log(result);

function recursiveBinary(array, target) {
  return Search(array, target, 0, array.length - 1);
}

function Search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === array[middleIndex]) {
    return middleIndex;
  }
  if (target > array[middleIndex]) {
    return Search(array, target, middleIndex + 1, rightIndex);
  } else {
    return Search(array, target, leftIndex, middleIndex - 1);
  }
}
console.log(recursiveBinary([3, 4, 5, 6, 7, 8, 9], 6));
