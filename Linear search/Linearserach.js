const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "no elemmnt found";
};

let result = linearSearch([3, 4, 3, 2, 4, 1, 4, 5, 1], 5);
console.log(result);
//Big - o worst case complexity
