'use strict';

var x = +prompt('Введите значение Х: ');
var y = +prompt('Введите значение Y: ');
var operation = prompt('Введите операцию: ')


function mathOperation(x_, y_, operation) {
    switch (operation) {
        case '+':
            if (isNaN(x_) || isNaN(y_)) {
                alert('Введите числовые значения !');
                window.location.reload();
            } else {
                let rezult = x_ + y_;
                alert('Сумма ' + x_ + ' и ' + y_ + ' равна: ' + rezult);
            }
            break;

        case '-':
            if (isNaN(x_) || isNaN(y_)) {
                alert('Введите числовые значения !');
                window.location.reload();
            } else {
                let rezult = x_ - y_;
                alert('Разность ' + x_ + ' и ' + y_ + ' равна: ' + rezult);
            }
            break;

        case '*':
            if (isNaN(x_) || isNaN(y_)) {
                alert('Введите числовые значения !');
                window.location.reload();
            } else {
                let rezult = x_ * y_;
                alert('Произведение ' + x_ + ' и ' + y_ + ' равно: ' + rezult);
            }
            break;

        case '/':
            if (isNaN(x_) || isNaN(y_)) {
                alert('Введите числовые значения !');
                window.location.reload();
            } else {

                if (y_ != 0) {
                    let rezult = x_ / y_;
                    alert('Частное ' + x_ + ' и ' + y_ + ' равно: ' + rezult);
                } else {
                    alert('На 0 делить нельзя');
                    window.location.reload();
                };
            }
            break;

        default:
            alert('Выедите правильный тип операции "+", "-", "*", "/" ');
    }
}


mathOperation(x, y, operation);
