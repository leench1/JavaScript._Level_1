'use strict';

var userNum = prompt('Введите любое трехначное число: ');
var arrUserNum = userNum.split('');
var objNum = {};

function numToObj(num) {
    while (arrUserNum.length < 3) {
        arrUserNum.unshift(0);
    }
    if (arrUserNum.length > 3) {
        alert('Я же просил ввести ТРЕХзначное число !');
        window.location.reload();
    } else if ((isNaN(userNum)) || (userNum === "")) {
        alert('Я же просил ввести ТРЕХзначное число !');
        window.location.reload();
    } else {
        objNum['сотни'] = arrUserNum[0];
        objNum['десятки'] = arrUserNum[1];
        objNum['единицы'] = arrUserNum[2];

        return objNum;
    }
};

console.log(numToObj(arrUserNum));

