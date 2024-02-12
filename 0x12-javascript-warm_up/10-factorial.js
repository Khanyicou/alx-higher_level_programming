#!/usr/bin/node

function factorial(n) {
  let result = 1;
  if (n < 0) {
    return -1;
  }
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const inputNumber = parseInt(process.argv[2]);
console.log(factorial(inputNumber));
