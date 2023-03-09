function insertInMiddle(arr) {
    const middleIndex = Math.floor(arr.length / 2); // получаем среднее значение индекса массива
    arr.splice(middleIndex, 0, 0, 0, 0); // вставляем необходимые значения в середину
    return arr;
  }


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = insertInMiddle(numbers);
console.log(newNumbers); // проверка функции