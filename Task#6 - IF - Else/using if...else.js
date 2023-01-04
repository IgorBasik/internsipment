const number = prompt('write a number');
if(number){
    if (number > 0) {
        alert(1) ;
    } else if(number < 0){
        alert(-1);
    } else if (number == 0) {
        alert(0);
    } else {
        alert('это строка, а не число error')
    }
} else {
    alert('вы не ввели число error')
}


/* const number = prompt('write a number');
if (number > 0) {
    alert(1) ;}
  if (number < 0) {
    alert(-1);
  }
if (number === 0) {
    alert(0);
  }
 else if (typeof number == "string") {
    alert(error );
}
 else if (number == null) {
    alert(error );
}