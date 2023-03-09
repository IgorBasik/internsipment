function sumInputNumbers() {
    const numbers = []; // create an empty array to store input numbers
    let input;  
    // loop until user cancels or enters a non-numeric value
    while (true) {
      input = prompt("Enter a number:");  
      // break the loop if input is not numeric or user cancels
      if (input === null || input.trim() === "" || isNaN(input)) {
        break;
      }  
      // add the parsed number to the array
      numbers.push(parseFloat(input));
    }  
    // compute the sum of the array elements
    const sum = numbers.reduce((acc, val) => acc + val, 0);
  
    return sum;
  }
  //console.log(sum);