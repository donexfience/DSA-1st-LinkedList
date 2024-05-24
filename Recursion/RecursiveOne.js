function Printing(n) {
  if (n < 1) {
    return;
  }
  console.log("hello world");
  Printing(n - 1);
}
const result = Printing(5);
console.log(result);
