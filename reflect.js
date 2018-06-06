'use strict';

console.log('Reflect API');

console.log(typeof Reflect); // object

class r {
    constructor(a, b) {
        console.log(a + ' ' + b);
    }
}
let x = Reflect.construct(r, ['x', 'y']); // creates type r object with params
console.log(x instanceof r); // true

class r2 extends r { }
console.log(Reflect.getPrototypeOf(r2)); // class r { constructor(a,b) { .... }}

class r3 {
    constructor() {
        this.id = 9;
    }
}
let x3 = new r3();
console.log(Reflect.get(x3, 'id')); // 9
Reflect.set(x3, 'id', 99);
console.log(x3.id); // 99
console.log(Reflect.has(x3, 'id')); // true


class r4 {}
let x4 = new r4();
Reflect.defineProperty(x4, 'id', {
    value: 100,
    configurable: true,
    enumerable: true
});
console.log(x4['id']); // 100

Reflect.deleteProperty(x4, 'id');
console.log(x4['id']); // undefined


let x5 = {
    id: 200
};
x5.prop1 = 'abc';
console.log(x5.prop1); // abc

Reflect.preventExtensions(x5);
console.log(Reflect.isExtensible(x5)); // false
x5.prop2 = 'def'; // ERROR - cannot add property prop2, object is not extensible

