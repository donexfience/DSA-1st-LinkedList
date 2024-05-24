function RecursiveBinary(array, target) {
  return binarySearch(array, target, 0, array.length - 1);
}

function binarySearch(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === array[middleIndex]) {
    return middleIndex;
  }
  if (target > array[middleIndex]) {
    return binarySearch(array, target, middleIndex + 1, rightIndex);
  } else {
    return binarySearch(array, target, leftIndex, middleIndex - 1);
  }
}

console.log(RecursiveBinary([4, 6, 8, 9, 12, 14], 12));
