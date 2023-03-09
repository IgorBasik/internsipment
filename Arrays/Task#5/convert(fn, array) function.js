
function convert(fn, array) {
    let numbers = [1, 3, 6]
    let newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        newNumbers.push(square(numbers[i]));
    }
    return newNumbers;
}
function square(x) { return x * x; }
console.log(convert());