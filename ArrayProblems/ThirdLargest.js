const array = [5, 67, 8, 8, 5, 3, 2, 1];
let fl = array[0];
let sl = array[0];
let tl = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > fl) {
    tl = sl;
    sl = fl;
    fl = array[i];
  } else if (array[i] < fl && array[i] > sl) {
    tl = sl;
    sl = array[i];
  } else if (array[i] < sl && array[i] > tl) {
    tl = array[i];
  }
}
console.log(fl, sl, tl);
