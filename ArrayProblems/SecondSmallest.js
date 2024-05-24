const array = [5, 67, 8, 8, 5, 3, 2, 1];
let fs = array[0];
let ss = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] < fs) {
    ss = fs;
    fs = array[i];
  } else if (array[i] > fs && array[i] < ss) {
    ss = array[i];
  }
}

console.log(fs, ss);
