'use strict';

console.log('Start of syntax.js');

// Syntax examples
let productId = 12;
for (let productId = 1; productId < 5; productId++)
{
}
console.log(productId);

let updateFunction = [];
for (let i = 0; i < 3; i++) {
    updateFunction.push(function() { return i; }); // pushes value of i, in closure
}
console.log(updateFunction[1]());

const CONSTVAR1 = 100;
//CONSTVAR1 = 200; // ERROR assignement to constant
//const CONSTVAR2; // ERROR missing initailizer to constant
const CONSTVAR3 = 100;
if (1 == 1) {
    const CONSTVAR3 = 200; // ignored block scoped
}
console.log(CONSTVAR3); // 100


// Arrow Functions
var getPrice = () => 5.99;
function getPriceF() {
    return 5.99;
}
console.log(getPrice()); // 5.99
console.log(getPriceF()); // 5.99


var getPrice2 = count => count * 2;
console.log(getPrice2(2)); // 4

var getPrice3 = (count, tax) => count * 2 + tax;
console.log(getPrice3(2, .1)); // 4.1

// Default Function Parameters
var getTotal = function(price, total = price * .1) {
    console.log(price + total);
}
getTotal(100); // 110
getTotal(100, 200); // 300

var getTotal2 = function(arg1, arg2 = 'hello') {
    console.log(arguments.length); // 1
}
getTotal2(1); // 1


// Rest and Spread
var myfunc = function (arg1, ...arg2) {
    console.log(arg2);
}
myfunc('1','2','3','4'); // [2, 3, 4]

var args = [5,6,7,8,9];
var myfunc2 = function (...arg2) {
    console.log(arg2);
}
myfunc2(args); // [5,6,7,8,9]

var myfunc3 = Math.max(..."23456");
console.log(myfunc3); // 6

// Object Literal Extensions
var propName = 'PropertyName';
var propValue = 'PropertyValue';
var propObject = {
    [propName] : propValue
};
console.log(propObject); // { PropertyName: "PropertyValue" }

var pName = 'PropertyName';
var pObject = {
    get [pName]() { return 'PValue'; },
    set [pName](value) { }
};
console.log(pObject.PropertyName); // PValue


// for of loops
var arr = ['a', 'b', 'c'];
for (var a of arr) {
    console.log(a); // a b c
}


// Octal binary
var value = 0b10;
var value2 = 0B10;
console.log(value); // 2
console.log(value2); // 2

// Tag Template literal with interpolation
function myfunct(segments, ...values) {
    console.log(segments);
    console.log(values);
}
let val1 = '100';
let val2 = '200';
myfunct `Template string for showing val1 ${val1} and val2 ${val2}`;
// ["Template string for showing val1", " and val2 ", ""]
// ["100", "200"]

// Destructuring
let arr1 = ['100', '200', '300'];
let [x , ...y] = arr1;
console.log(x); // 100
console.log(y); // [200, 300]

let obj = {
    p1: '100',
    p2: '200',
    p3: '300'
};
let { a1, a2, a3 } = obj; // wont work as property name not match
let { p1: b1, p2: b2, p3: b3 } = obj; // remaps props
let { p1, p2, p3 } = obj; 
console.log(`${a1} ${a2} ${a3}`); // undef undef undef
console.log(`${b1} ${b2} ${b3}`); // 100 200 300
console.log(`${p1} ${p2} ${p3}`); // 100 200 300


