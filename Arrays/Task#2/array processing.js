//displays numbers < 5
let numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
        console.log(numbers[i]);
    } 
};

//finds the positions of the elements with the maximum and minimum value
let numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
let maxNumber =  Math.max.apply(null,  numbers); 
let minNumber =  Math.min.apply(null,  numbers);
let indexesMax = [];
let indexesMin = [];
numbers.forEach((item, index) => {
  if (item === maxNumber) {
        indexesMax.push(index)
    }
  if (item === minNumber) {
        indexesMin.push(index)
    }
});
console.log('Position of max value: ' + indexesMax, ' position of min value: ' + indexesMin);


//sorts the array in descending order
const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55,];
/*let sortNumber = numbers.sort((a, b) => a - b);
console.log(sortNumber); */
numbers.sort((a, b) => a - b);
console.log(numbers);



// displays array elements that have a value greater than the arithmetic mean of all array elements
const arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55,];
const getAverage = (numbers) => {
    let sum = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
    for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
      sum += numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
    }
    return sum / numbers.length; // возвращаем среднее арифметическое
  };
  let avg = getAverage(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
        console.log(arr[i]);
    }
};