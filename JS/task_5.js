'use strict';

var x = Math.floor(Math.random() * 10 - 5);
var y = Math.floor(Math.random() * 10 - 5);

//var x = +prompt('Введите значение Х: ');
//var y = +prompt('Введите значение Y: ');
//Не знаю какой вариант был вернее, сделал функцию без Вашего участия.

var sum = function (x_, y_) {
    let rezult = x_ + y_;
    return ('Сумма равна: ' + rezult);
};

var minus = function (x_, y_) {
    let rezult = x_ - y_;
    return ('Разность равна: ' + rezult);
};

var divide = function (x_, y_) {
    if (y_ != 0) {
        let rezult = x_ / y_;
        return ('Частное равно: ' + rezult);
    } else {
        console.log('На 0 делить нельзя');
        // window.location.reload();
    }
};

var multiply = function (x_, y_) {
    let rezult = x_ * y_;
    return ('Произведение равно: ' + rezult);
};

console.log(sum(x, y));
console.log(minus(x, y));
console.log(divide(x, y));
console.log(multiply(x, y));
