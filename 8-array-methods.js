function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

let array = [1, 5, 3, 8, 9, 2];
console.log(filter(array, element => element > 2));
// → [5, 3, 8, 9]
console.log(map(array, element => element + 1));
// → [2, 6, 4, 9, 10, 3]
console.log(reduce(array, (a, b) => a + b, 0));
// → 28
