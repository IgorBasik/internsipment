function filterArray() {
    let arr = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, 'wor', 7, 8, false, 9, 100];
    let filterNumber = arr.filter(Number); // создали новый массив и присвоили ему отфильтрованные элементы
    return filterNumber;
}

console.log(filterArray());