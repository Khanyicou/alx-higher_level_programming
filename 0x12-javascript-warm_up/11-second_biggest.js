#!/usr/bin/node

if (process.argv.length <= 3) {
  console.log('0');
} else {
  const numbers = process.argv.slice(2).map(Number);
  numbers.sort((a, b) => b - a);
  const secondLargest = numbers[1];
  console.log(secondLargest);
}
