'use strict';

console.log('Symbols');

let sym1 = Symbol('event');
console.log(typeof sym1); // symbol
console.log(sym1.toString()); // Symbol(event)

let sym2 = Symbol('event');
console.log(sym1 === sym2); // false

let sym3 = Symbol.for('event');
let key1 = Symbol.keyFor(sym3);
console.log(key1); // event

let myobj = {
    title: 'mytitle',
    [Symbol.for('prop1')]: 'prop1value' // an expression used for property
}
let myval1 = myobj[Symbol.for('prop1')];
console.log(myval1); // prop1value
console.log(Object.getOwnPropertyNames(myobj));


// Well Known Symbols
let myobj2 = function () { };
myobj2.prototype[Symbol.toStringTag] = 'myobj2';
let myval2 = new myobj2();
console.log(myval2.toString()); // [object myobj2] - sets a name/tag for the object

let myobj3 = [1, 2, 3];
myobj3[Symbol.isConcatSpreadable] = false;
console.log([].concat(myobj3)); // [[1,2,3]] - instead of insertin each element of myobj3, it added to whole array as single element

myobj3[Symbol.toPrimitive] = function(hint) {
    console.log(hint);
    return 42;
}
let myval4 = myobj3 + 100;
console.log(myval4); // 142
