const assert = require('assert');

// the `arguments` iis array-like, but not an array and we can't use array methods on `arguments`.
function whatever(a,b,c) {
    assert(a === 1, "the value of a is 1");
    assert(b === 2, "the value of b is 2");
    assert(c === 3, "the value of c is 3");

    assert(arguments.length === 5, "The number of arguments passed is 5");

    console.log(arguments);
    console.log(arguments[3]);
    console.log(arguments[4]);

}

whatever(1,2,3,4,'Lauren!');
