function divisors() {
    const dividers = (number) => {
  let n = prompt('Введите число'), dividers = [], i = 1;
    while(i <= n) {
    if(n % i == 0) dividers.push(i);
    i = i + 1;
    }
  alert(dividers);
  }
  }