function Printing(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  Printing(n - 1);
}

Printing(5);
