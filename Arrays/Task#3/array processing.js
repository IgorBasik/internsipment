let styles = ["Jazz", "Blues",];
console.log(styles);
// Add "Rock and Roll" to the end.
styles.push("Rock and Roll");
console.log(styles);
// Change the value in the middle to “Classic”. Your code for finding the value in the middle should work for arrays of any length.
styles[Math.floor((styles.length - 1) / 2)] = “Classic”;
console.log(styles);
//Remove the first element of an array and show it.
let firstStyle = styles.shift();
console.log(styles);
console.log(firstStyle);
//Insert "Rap" and "Reggae" at the beginning of the array.
styles.unshift("Rap", "Reggae",);
console.log(styles);