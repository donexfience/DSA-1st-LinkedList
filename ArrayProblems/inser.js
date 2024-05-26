const array = [2, 3, 4, 5, 6, 7];
function insert(array, position, value) {
  if (position < 1 || position > array.length + 1) {
    throw new Error("Position out of bounds");
  }
  for (let i = array.length; i >= position; i--) {
    array[i] = array[i - 1];
  }
  array[position - 1] = value;

  return array;
}

let result = insert(array, 3, 20);
console.log(result);

function Delete(array, position) {
  if (position < 1 || position > array.length + 1) {
    console.log("failed");
  }
  for (let i = position - 1; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return array;
}

let DeleteResult = Delete(array, 3);
console.log(DeleteResult);

function DuplicateDelete(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        for (let k = j; k < array.length - 1; k++) {
          array[k] = array[k + 1];
        }
        // Reduce the length of the array by 1
        array.length = array.length - 1;
        // Adjust j to stay at the same index to check again
        j--;
      }
    }
  }
  return array;
}

let DuplicateResult = DuplicateDelete([
  3, 45, 3, 7, 7, 4, 9, 11, 12, 13, 14, 11,
]);
console.log(DuplicateResult);

function ShiftToLeft(array) {
  let evenCount = 0;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      temp = array[evenCount];
      array[evenCount] = array[i];
      array[i] = temp;
      evenCount++;
    }
  }
  return array;
}

let arrayWithEven = [3, 45, 4, 7, 7, 4, 9, 11, 12, 13, 14, 11];
let shiftedArray = ShiftToLeft(arrayWithEven);
console.log(shiftedArray); // Output: [4, 4, 12, 14, 7, 3, 9, 11, 7, 13, 45, 11]

function KthLeftRotation(array, k) {
  for (let i = 1; i <= k; i++) {
    let temp = array[0]; // Move inside the loop to capture the correct value
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = temp;
  }
  return array;
}

const Kleftresult = KthLeftRotation([1, 2, 3, 4, 5, 6], 3);
console.log(Kleftresult); // Output: [4, 5, 6, 1, 2, 3]

function KthRigbtRotation(array, k) {
  for (let i = 1; i <= k; i++) {
    let temp = array[array.length - 1];
    for (let j = array.length - 1; j >= 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = temp;
  }
  return array;
}

const kRightResult = KthRigbtRotation([3, 4, 5, 6, 7, 8, 9], 3);
console.log(kRightResult);

function toLowerCase(str) {
  let lowerstr = "";
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);

    if (charcode >= 65 && charcode <= 90) {
      charcode += 32;
    }
    lowerstr += String.fromCharCode(charcode);
  }
  return lowerstr;
}

const lowerresult = toLowerCase("DONEX");
console.log(lowerresult);
