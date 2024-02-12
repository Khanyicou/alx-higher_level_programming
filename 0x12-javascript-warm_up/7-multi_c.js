#!/usr/bin/node

if (process.argv.length < 3 || isNaN(process.argv[2])) {
  console.log('Missing number of occurrences');
} else {
  const numOccurrences = Number(process.argv[2]);
  for (let i = 0; i < numOccurrences; i++) {
    console.log('C is fun');
  }
}
