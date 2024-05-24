function Display(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  Display(n - 1);
}

Display(6);
