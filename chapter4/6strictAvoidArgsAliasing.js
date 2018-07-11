"use strict";

const assert = require('assert');

function infiltrate(person) {
    assert(person === 'gardener', "This person is a gardener");
    assert(arguments[0] === 'gardener', "The args and the person are the same gardener");

    arguments[0] = 'ninja';

    assert(person === 'gardener', "Still a gardener");

    // Below line will make the assertion to fail
    // assert(arguments[0]==='gardener', "arguments changed, no longer a gardener");

    console.log(person); // gardener
    console.log(arguments[0]); // ninja
}

infiltrate('gardener');
