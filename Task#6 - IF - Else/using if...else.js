const number = prompt('write a number');
if(number){
    if (number > 0) {
        alert(1) ;
    } else if(number < 0){
        alert(-1);
    } else if (number == 0) {
        alert(0);
    } else {
        alert('это строка, а не число error');
    }
}
else {
    alert('вы не ввели число error');
}


