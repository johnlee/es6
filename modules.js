// import { myvar1,  myvar2 as thisvar1 } from 'module.js'; // using an alias
// import thisvar2 from 'module.js'; // gets the default export
// import myvar4 from 'module.js';

console.log('Start of modules.js');


// console.log(myvar1 + ' ' + thisvar1); // 99 hello
// console.log(thisvar2); // there 
// myvar4.prop1 = 0; // can change prop values
// console.log(myvar4.prop1); // 0


// Classes
class Myclass1 {
    //let prop1 = 99; // Syntax error
    
    constructor() {
        console.log('The Constructor Here');
    }

    func1() {
        console.log('99');
    }
}
let myclass = new Myclass1(); // The Constructor Here

console.log(typeof Myclass1); // function
console.log(myclass instanceof Myclass1); // true
console.log(myclass.func1 === Myclass1.prototype.func1); // true


// Inheritance
class Myclass2 {
    constructor(name) {
        console.log('in myclass2 with ' + name);
    }
    myfunc1() {
        console.log('in myfunc1');
    }
}

let x1 = new Myclass2('myclass2'); // in myclass2 with myclass2

class Myclass2b extends Myclass2 {
    constructor() {
        super('in myclass2'); // an extending class must call super if defining it's own constructor
        super.myfunc1(); 
        console.log('in myclass2b');
    }
}

let x2 = new Myclass2b(); // output:
// in myclass2 with in myclass2
// in myfunc1
// in myclass2b


// Statics
class Myclass3 {
    // static prop1 = 99; // ERROR cannot have static properties
    static func1() {
        return 'func1';
    }
}
console.log(Myclass3.func1()); // func1
let x3 = new Myclass3();

// Static Methods are tied to the constructor only
// console.log(x3.func1()); // ERROR Object doesnt support property or method; can only be accessed through constructor
x3.prop1 = 'prop1'; // create prop outside of class
console.log(x3.prop1); // prop1


// new.target
class Myclass4 {
    constructor() {
        console.log(typeof new.target); // new.target is a function
        console.log(new.target);
    }
}
class Myclass4b extends Myclass4 {

}
var x4 = new Myclass4(); // output:
// function
// class Myclass4 { constructor() { .... }}
var x4b = new Myclass4b(); // output:
// function
// class Myclass4b extends Myclass4 { ... }