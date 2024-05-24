function reverseArray(str, start, end) {
  if (str === "") {
    return "";
  }
  if (start >= end) {
    return;
  }
  const temp = str[start];
  str[start] = str[end];
  str[end] = temp;

  reverseArray(array, start + 1, end - 1);
}

const array = "hellloooeoeoeoeo";
const strArray = [];
for (let i = 0; i < array.length; i++) {
  strArray[i] = array[i];
}

let result = reverseArray(strArray, 0, strArray.length - 1);
let backToString = "";
for (let i = 0; i < strArray.length; i++) {
  backToString += strArray[i];
}
console.log(backToString);
