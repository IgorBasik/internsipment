function outputValue(number, start, end) {
    return number.slice(start, end + 1);
  }
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slice = outputValue(number, 1, 4);
console.log(slice); 