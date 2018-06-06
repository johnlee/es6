'use strict';

console.log('Maps and Sets');


let o1 = { name: 'john' };
let o2 = { name: 'jane' };
let o3 = new Map();
o3.set(o1, 'a');
o3.set(o2, 'b');
console.log(o3.get(o1)); // a
console.log(o3.size); // 2

let o4 = new Map();
o4.set(o1, 'a');
o4.set(o2, 'b');
o4.delete(o1);
console.log(o4.size); // 1
console.log(o4.entries()); // a map iterator object is return

let s1 = new Set();
s1.add(o1);
s1.add(o2);
s1.add(o2); // duplicate ignored
console.log(s1.size); // 2

let s2 = new Set(['a','b','c']);
console.log(...s2.keys()); // a b c - set dont have keys, just returns values
console.log(...s2.values()); // a b c
console.log(...s2.entries()); // [a,a] [b,b] [c,c]

let s3 = new WeakSet([o1,o2]);
console.log(s3.size); // undefined
console.log(s3.has(o1)); // true


// Subclassing
class c1 extends Array {}
let a1 = c1.from([1,2,3]);
console.log(a1 instanceof c1); // true - the from method makes it a satme type

let a2 = a1.reverse();
console.log(a2 instanceof c1); // true - reverse also preserves type

class c2 extends Array {
    sum() {
        let total = 0;
        this.map(x => total += x);
        return total;
    }
}
let a3 = c2.from([1,2,3]);
console.log(a3.sum()); // 6 