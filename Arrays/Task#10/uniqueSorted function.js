let numbers = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
function uniqueSorted(sort) {
  const uniqSet = new Set(numbers);
  return Array.from(uniqSet);
}
numbers = uniqueSorted(numbers).sort();
console.log(numbers);
/*let new_array = [];
numbers.forEach(item =>{
    if(!new_array.includes(item)){
        new_array.push(item)
    }
})
new_array.sort();
console.log('new_array', new_array)*/
