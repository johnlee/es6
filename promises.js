'use strict';

console.log('Promises');

function doasync() {
    return new Promise(function (resolve, reject) {
        console.log('P1 Executing');
        setTimeout(function() {
            console.log('P1 Resolved!');
            resolve();
        }, 2000); // waits 2s
    });
}
doasync(); // P1 Executing ..(wait 2s).. P1 Resolved!


function doasync2() {
    return new Promise(function (resolve, reject) {
        console.log('P2 Executing');
        setTimeout(function() {
            console.log('P2 Rejected!');
            reject();
        }, 2000); // waits 2s
    });
}
doasync2().then(function() {
    console.log('ASYNC2 Success'); // not called since failed
}, function() {
    console.log('ASYNC2 Fail'); // P2 Executing .. P2 Rejected! ASYNC2 Fail
});


// Multiple async calls
function doasync3() {
    return new Promise(function (resolve, reject) {
        console.log('P3 Executing');
        setTimeout(function() {
            console.log('P3 Resolved!');
            resolve(doasync2()); // calls doasync2 after doasync3 completes
        }, 2000); // waits 2s
    });
}
doasync3().then(function() {
    console.log('ASYNC3 Success'); // not printed as failed
}, function() {
    console.log('ASYNC3 Fail'); // output below
});
// P3 Executing
// P3 Resolved!
// P2 Executing
// P2 Rejected!
// ASYNC3 Fail


Promise.all([doasync, doasync2]).then(
    function() { console.log('ALL Success'); },
    function() { console.log('ALL Fail'); }
);
Promise.race([doasync, doasync2]).then(
    function() { console.log('RACE Success'); },
    function() { console.log('RACE Fail'); }
);
