let colors = ["white", "blue", "yellow", "black", "red", "green"];

// sets firsColor = arr[0]
// and secondColor = arr[1]
let [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor); // "white"
console.log(secondColor);  // "blue"
console.log(otherColors);