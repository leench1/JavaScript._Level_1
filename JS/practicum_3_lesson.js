'use strict';

var rndNum = function () {
    let number = Math.floor(1000 + Math.random() * 9000);
    let outArr = [];
    let sNumber = number.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        outArr.push(+sNumber.charAt(i));
    }
    return outArr;
};
var num = rndNum();

var checkArr = function () {
        let arr = num;
        let stopCheck = false;
        while (stopCheck != true) {
            if ((arr[0] == arr[1]) || (arr[0] == arr[2]) || (arr[0] == arr[3])) {
                arr[0]++;
                stopCheck = checkArr(arr);

            } else if (arr[0] == 10) {
                (arr[0] -= 2);
                stopCheck = checkArr(arr);
            } else if ((arr[1] == arr[2]) || (arr[1] == arr[3])) {
                arr[1]++;
                stopCheck = checkArr(arr);
            } else if (arr[0] == 10) {
                (arr[0] -= 2);
                stopCheck = checkArr(arr);

            } else if ((arr[2] == arr[0]) || (arr[2] == arr[3])) {
                arr[2]++;
                stopCheck = checkArr(arr);
            } else if (arr[0] == 10) {
                (arr[0] -= 2);
                stopCheck = checkArr(arr);
            } else {

                return arr;
            }
        }
    }
;

var num = checkArr();


var check = function (user) {
    let playerArr = [];
    let playerArrElement;
    console.log(playerArr);
    for (let i = 0; i < 4; i++) {
        playerArrElement = parseInt(user.substr(i, 1));
        playerArr.push(playerArrElement);
    }

    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (playerArr[i] == num[i]) {
            bulls++;
        } else if (num.indexOf(playerArr[i]) >= 0) {
            cows++;
        }
    }


    console.log(user);
    console.log('bulls = ' + bulls + ' cows = ' + cows);
    if (bulls == 4) {
        return true;
    }
};
var game = function () {
    let counter = 0;
    let endGame = false;
    console.log('Start game !');

    while (endGame != true) {
        if (counter == 9) {
            alert('Game over ! @#%');
            break;
        } else {
            let userNum = prompt('Enter number');
            counter++;
            endGame = check(userNum);
        }
    }
    console.log('You win !');
};

game();