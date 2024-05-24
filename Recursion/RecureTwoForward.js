function TwoFoward(n) {
  if (n ==5) {
    return;
  }
  console.log(n);
  TwoFoward(n + 1);
}

const result = TwoFoward(1);
console.log(result);
