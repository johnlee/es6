console.log('module.js'); // This file gets hoisted whenever imported, which will make this line print
export let myvar1 = 99;
export let myvar2 = 'hello';

let myvar3 = 'there';
export default myvar3;

export let myvar4 = { // the myvar4 object cannot be changed but it's inner properties can be
    prop1 = 99
};