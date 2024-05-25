let str = "malayalam";
// converting strting to the array
const strArray = [];
for (let i = 0; i < str.length; i++) {
  strArray[i] = str[i];
}

function RecursivePallindrom(strArray, start, end) {
  if (start >= end) {
    return true;
  }
  if (strArray[start] !== strArray[end]) {
    return false;
  }
  return RecursivePallindrom(strArray, start + 1, end - 1);
}

let result = RecursivePallindrom(strArray, 0, strArray.length - 1);
console.log(result);
