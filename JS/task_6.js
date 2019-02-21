'use strict';

var x = Math.floor(Math.random() * 10 - 5);
var y = Math.floor(Math.random() * 10 - 5);

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
    if ((x_ != 0) || (y_ != 0)) {
        let rezult = x_ * y_;
        return ('Произведение равно: ' + rezult);
    } else {
        return 0;
    }
};

function mathOperation (x_, y_, operation) {
    switch (operation) {
        case sum:
            console.log (sum(x_, y_));
            break;
        case minus:
            console.log (minus(x_,y_));
            break;
        case divide:
            console.log (divide(x_, y_));
            break;
        case multiply:
            console.log (multiply(x_, y_));
            break;
    }
}


console.log (mathOperation (x, y, sum));

console.log (mathOperation (x, y, minus));

console.log (mathOperation (x, y, divide));

console.log (mathOperation (x, y, multiply));

