'use strict';

var basket = [
    {
        name: 'Mouse',
        price: '10',
        produced: 'China'
    },
    {
        name: 'Monitor',
        price: '150',
        produced: 'Japan'
    }
];

function getFields(array, value) {
    var output = [];
    for (var i = 0; i < array.length; ++i) {
        output.push(+array[i][value]);
    }
    return output;
}

var findIndex = getFields(basket, 'price');

var sumBasket = countBasketPrice(findIndex);

function countBasketPrice(array) {

        let sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
};

console.log('Сумма Ваших покупок равна: ' + sumBasket + '$');

