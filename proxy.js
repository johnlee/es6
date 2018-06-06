'use strick';

console.log('Proxy API');

function e1() {
    this.name = 'john';
    this.num = '1';
}
var x1 = new e1();
var x2 = new Proxy(x1, { // x2 is a proxy for x1
    get: function(target, prop, receiver) { // using the get trap
        return 'Attempted access to ' + prop;
    }
});
console.log(x2.num); // Attempted access to num


var x3 = new Proxy(x1, { // x3 is a proxy for x1
    get: function(target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
});
console.log(x3.num); // 1

var x4 = new Proxy(x1, { // restrict access to parts of object
    get: function(target, prop, receiver) { // get trap
        if (prop === 'name') { // block access to the 'prop' property
            return 'Denied';
        }
        return Reflect.get(target, prop, receiver);
    }
});
console.log(x4.num); // 1
console.log(x4.name); // Denied


function f1() {
    return 99;
}
var y1 = new Proxy(f1, { // y1 is a proxy for f1 function
    apply: function(target, thisArg, argumentsList) { // apply trap
        return Reflect.apply(target, thisArg, argumentsList);
    }
});
console.log(y1()); // 99


// Proxy for Prototype
var t1 = {
    id: 1
}
var z1 = new Proxy({}, { 
    get: function(target, prop, receiver) {
        return 'property ' + prop + ' not exist';
    }
});
Object.setPrototypeOf(t1, z1); // using a Proxy to have more definitive prototype
console.log(t1.id); // 1
console.log(t1.unknownprop); // property unkonwnprop not exist


