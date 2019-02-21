'use strict';


var a = Math.floor(Math.random() * 10 - 5);
var b = Math.floor(Math.random() * 10 - 5);

if ((a >= 0) && (b >= 0)) {
    console.log(a - b);
} else if ((a < 0) && (b < 0)) {
    console.log(a * b);
} else {
    console.log(a + b);
}
