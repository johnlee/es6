'use strict';

console.log('Arrays');


let a1 = [1,2,3];
let a2 = Array.from(a1, x => x + 100);
console.log(a2); // [ 101, 102, 103 ]

let a3 = Array.from(a1, function(x) {
    return x + this.amt;
}, { amt: 10 });
console.log(a3); // [ 11, 12, 13 ]

let a4 = [1,2,3];
a4.fill(100);
console.log(a4); // [100,100,100]

let a5 = [1,2,3];
a5.fill(100, 1);
console.log(a5); // [1,100,100]

let a6 = [1,2,3];
let b6 = a6.find(x => x > 1);
console.log(b6); // 2 (the first match only)

let i6 = a6.findIndex(function (value, index, array) {
    return value == this;
}, 2);
console.log(i6); // 1 - index where 2 found

let a7 = [1,2,3];
a7.copyWithin(0,2);
console.log(a7); // 3, 2, 3 - copys value at index 2 to index 0

console.log(...a7.entries()); // [0,3],[1,2],[2,3]
console.log(...a7.keys());  // 0 1 2
console.log(...a7.values()); // 3 2 3


// Buffers and Typed Arrays
let b1 = new ArrayBuffer(1024);
console.log(b1.byteLength); // 1024

// Clamped Array = values below or above the range will get clamped to the min or max values
let ia1 = new Uint8Array(b1);
ia1[0] = 0xff; // hexadecimal for 255
console.log(ia1[0]); // 255

let b2 = new ArrayBuffer(1024);
let ca = new Uint8ClampedArray(b2);
ca[0] = -100;
console.log(ca[0]); // 0 - clamps -100 to min value of 0