function reverseString(str, start, end) {
    if (str === "") {
      return "";
    }
    if (start >= end) {
      return;
    }
    const temp = str[start];
    str[start] = str[end];
    str[end] = temp;
  
    reverseString(str, start + 1, end - 1);
  }
  
  // Convert string to array of characters
  const array = "donexfience";
  const arrayStr = [];
  for (let i = 0; i < array.length; i++) {
    arrayStr[i] = array[i];
  }
  
  // Call the recursive function to reverse the array
  reverseString(arrayStr, 0, arrayStr.length - 1);
  
  // Convert array back to string
  let backtoString = "";
  for (let i = 0; i < arrayStr.length; i++) {
    backtoString += arrayStr[i];
  }
  
  console.log(backtoString); // Output: "ecneicfxenod"
  