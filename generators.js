'use strict';

console.log('Generators');

function *generator() {
    yield 5;
    yield 10;
}
let iterator = generator();
console.log(iterator.next()); // { value: 5, done: false }

function *generator2() {
    let thisvalue = 1;
    while(true) {
        yield(thisvalue++);
    }
}
for (let g of generator2()) {
    if (g > 5) { break; }
    console.log(g); // 1 2 3 4 5
}

// Yielding
function *generator3() {
    let result = yield;
    console.log(result);
}
let iterator3 = generator3();
iterator3.next(); // nothing logged since no yield given
iterator3.next(100); // 100

function *generator4() {
    let params = [yield, yield, yield];
    console.log(params[2]);
}
let iterator4 = generator4();
iterator4.next(); // nothing since no yield given
iterator4.next(2); // nothing since not all yield given
iterator4.next(4); // nothing since not all yield given
iterator4.next(6); // 6

// Yield Iterator Delegation
function *generator5() {
    yield 1;
    yield* [2,3,4];
}
let iterator5 = generator5();
console.log(iterator5.next().value); // 1
console.log(iterator5.next().value); // 2
console.log(iterator5.next().value); // 3
console.log(iterator5.next().value); // 4
console.log(iterator5.next().value); // undefined

// Throw and Returns
function *generator6() {
    yield 1;
    yield 2;
    yield 3;
}
let iterator6 = generator6();
console.log(iterator6.next().value); // 1
//console.log(iterator6.throw('error')); // Error - Uncaught Error
console.log(iterator6.next().value); // never gets here

function *generator7() {
    try {
        yield 1;
        yield 2;
        yield 3;    
    } catch (e) {
        console.log('caught exception ' + e);
    }
}
let iterator7 = generator7();
console.log(iterator7.next().value); // 1
console.log(iterator7.throw('error')); // caught exception error
console.log(iterator7.next().value); // { value: undefined, done: true }