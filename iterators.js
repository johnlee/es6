'use strict';

console.log('Iterators');

// Iterators
let array = [1,2,3];
let iterator = array[Symbol.iterator]();

iterator.next();
iterator.next();
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: false }

// Custom Iterator
let collection = {
    [Symbol.iterator]() {
        let thisvalue = 10;
        return {
            next() {
                let value = thisvalue > 15 ? undefined : thisvalue++;
                let done = !thisvalue;
                return { value, done };
            }
        }
    }
}
for (let c of collection) {
    console.log(c);
    if (c == undefined) { break; } // some browsers may not break out when for-loop hits done
}


