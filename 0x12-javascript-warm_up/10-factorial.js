#!/usr/bin/node

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

const number = parseInt(process.argv[2]);

if (!isNaN(number) && number >= 0) {
  const result = factorial(number);
  console.log(result);
} else {
  console.log(1);
}

