'use strict';

console.log('Extensions');

// Object Extensions
let obj1 = {
    prop1: 1
};
let obj2 = {
    prop2: 2
};
Object.setPrototypeOf(obj1, obj2); // sets obj1 to be a type of obj2
console.log(obj1.prop2); // 2

let obj3 = {};
Object.assign(obj3, obj1, obj2); // sets obj3 to be a type of combining obj1 and obj2
console.log(obj3); // [ prop1: 1, prop2: 2 ]

let obj4 = NaN;
console.log(obj4 === obj4); // false
console.log(Object.is(obj4, obj4)); // true

// String Extensions
let str1 = 'hello world';
console.log(str1.startsWith('he')); // true
console.log(str1.endsWith('ld')); // true
console.log(str1.includes('llo')); // true

let str2 = "hello \u{1f3c4} world"; // emoji character
console.log(str2); // hello 🏄 world
console.log(str2.length); // the emoji gets counted as 2 characters
console.log(String.fromCodePoint(0x1f3c4)); // prints the emoji only

// Number Extensions
console.log(Number.parseInt == parseInt); // true - ES6 is getting rid of globals like parseInt, now call it from Number
console.log(Number.parseFloat == parseFloat); // true - ES6 encourage calling parseFloat from Number

let myval5 = 'NaN';
console.log(isNaN(myval5)); // true - ES6 moving away from these globals
console.log(Number.isNaN(myval5)); // false - its a string, Number is more accurate

let myval6 = '100';
console.log(isFinite(myval6)); // true
console.log(Number.isFinite(myval6)); // false

let myval7 = 7;
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(undefined)); // false
console.log(Number.isInteger(7)); // true

// Math Extensions
console.log(Math.cos(1));
console.log(Math.cosh(1));
console.log(Math.sinh(1));
console.log(Math.tanh(1));
console.log(Math.cbrt(1)); // cube root
console.log(Math.log2(1)); // log base 2

// Regex Extensions
let pattern1 = /hello/;
console.log(pattern1.test('hello world')); // true
console.log(pattern1.test('good bye')); // false

let pattern2 = /^.ello/;
console.log(pattern2.test('hello world')); // true
console.log(pattern2.test('world hello')); // false

// Function Extensions
let myfunc1 = function calc() {
    return 0;
};
console.log(myfunc1.name); // calc

let myfunc2 = function () {
    return 0;
};
console.log(myfunc2.name); // myfunc2 - new to ES6, uses the variable name





