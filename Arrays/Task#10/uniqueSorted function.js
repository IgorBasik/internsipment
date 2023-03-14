let numbers = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
function uniqueSorted(sort) {
  const uniqSet = new Set(numbers);
  return Array.from(uniqSet);
}

console.log(uniqueSorted(numbers));