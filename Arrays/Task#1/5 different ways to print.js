//First way - for, while, do … while
const numbers = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i <numbers.length; i++) {
  console.log(numbers[i]) //значения, хранящиеся в элементах циклов
  console.log(i) //индексы
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
let i = 0
do {
  console.log(numbers[i]) //значение
  console.log(i) //индекс
  i = i + 1
} while (i < numbers.length)

const numbers = [1, 2, 3, 4, 5, 6, 7]
let i = 0
while (i < numbers.length) {
  console.log(numbers[i]) //значение
  console.log(i) //индекс
  i = i + 1
}
//Second
let numbers = [1: number, 2: number, a: string, 4: number]
for (let property in object) {
  console.log(property) //имя свойства
  console.log(numbers[property]) //значение свойства
}
//Third
for (const value of [1, 2, 3, 4, 5, 6, 7]) {
    console.log(value) //значение
  }
  //Fouth
  const array = [1, 2, 3, 4, 5, 6, 7];
array.forEach(console.log); // покажет элемент и его позицию в массиве.
//неудобно

[1, 2, 3, 4, 5, 6, 7].forEach(console.log);  //  покажет элемент и его позицию в массиве.

//fives
const numbers = [1, 2, 3, 4, 5, 6, 7];
const roots = numbers.map(Math.abs);
console.log(roots);

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.map(Math.abs));
