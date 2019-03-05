'use strict';
// Первое задание
function changeText() {
    document.querySelector('.insideText').innerHTML = 'Привет !';
}

// Второе задание
function changeTag() {
    var parent = document.querySelector('.insideText1');
    var child = document.querySelector('#textHello');
    parent.removeChild(child);
    var newHello = document.createElement('h3');
    newHello.innerText = 'Hello !!!';
    parent.appendChild(newHello);

}

// Третье задание, реализовал 2 методами, 2 закомментирован.
function changeList() {
    var ul_ = document.getElementsByTagName('li');
    for (let i = 0; i < 4; i++) {
        ul_[i].innerText = 'list' + (i +1);
    }


    /*
    Более сложный вариант, но тоже работает.


    var dogFragment = document.createDocumentFragment();

    while (ul_.lastChild) {
        ul_.removeChild(ul_.lastChild)
    }

    for (let i = 0; i < 4; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = 'list ' + (i + 1);
dogFragment.appendChild(newLi);
    }
    ul_.appendChild(dogFragment);*/
}

// Четвертое задание
function plus() {

let method = document.getElementsByTagName('span')[0];
let rezult = document.getElementsByTagName('span')[1];

    let sum = +x.value + +y.value;
        rezult.innerText = sum;
        method.innerText = '+'
}

function minus() {

    let method = document.getElementsByTagName('span')[0];
    let rezult = document.getElementsByTagName('span')[1];

    let minus = +x.value - +y.value;
    rezult.innerText = minus;
    method.innerText = '-'
}

function multiply() {

    let method = document.getElementsByTagName('span')[0];
    let rezult = document.getElementsByTagName('span')[1];

    let multiply = +x.value * +y.value;
    rezult.innerText = multiply;
    method.innerText = '*'
}

function divide() {

    let method = document.getElementsByTagName('span')[0];
    let rezult = document.getElementsByTagName('span')[1];

    let divide = +x.value / +y.value;
    rezult.innerText = divide;
    method.innerText = '/'
}

// Пятое задание

function addLi() {
    let list = document.getElementById('task4');
    let newLi = document.createElement('li');
    newLi.innerText = 'Первый элемент списка';

    list.insertBefore(newLi, list.firstChild);
}

// Шестое задание

function chessDesk() {
    let desk = document.querySelector('.desk');

    let table = document.createElement("table");
    for (let i = 1; i < 9; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j < 9; j++) {
            let td = document.createElement('td');
            if (i%2 == j%2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    desk.appendChild(table);
}

