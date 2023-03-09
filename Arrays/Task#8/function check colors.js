function checkColor(color) {
    const colors = ["red", "green", "blue"]; // объявляем массив
    const index = colors.indexOf(color); //объявляем константу которая получает индекс цвета
    return index !== -1 ? index : -1; // условие в случае если значение не найденоб указываем индекс -1.
  }
  const colorIndex = checkColor("green");
  //const colorIndex = checkColor("yellow");
console.log(colorIndex); // проверка функции