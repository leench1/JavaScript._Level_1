'use strict';

var a = 0;
var b = null;

console.log ( a == b);

console.log ( 0 == a); 

console.log (+null == 0);

console.log (b == null);



console.log ('0 и null не равны, т.к. null специальное значение которое равно только себе, но при преобразовании null в число (+null) при сравнении он даст true ')