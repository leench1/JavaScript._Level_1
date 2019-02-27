'use strict';
var hello = console.log('Игра началась!');

var num = function () {
    let number =  Math.floor(1000 + Math.random() * 9000);
    let outArr = [];
    let sNumber = number.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        outArr.push(+sNumber.charAt(i));
    }
};
num();
var check = function (userNum, num) {
    if (userNum < num) {
        console.log('Ваше число меньше загаданного.');
        return false;
    } else if (userNum > num) {
        console.log('Ваше число больше загаданного.');
        return false;
    } else {
        return true;
    }
};

var game = function () {

    let endGame = false;
    let counter = 0;


    while (endGame != true) {
        let user = prompt('Введите Ваше число:');
        counter++;
        endGame = check(user, num)
    }
    console.log('Вы угодали число!\nПопыток: ' + counter);

    //game(); закоментил строку, если включить будет как в условии практикума.

};


game(num);