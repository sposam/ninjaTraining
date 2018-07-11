"use strict"

function skulk(name) {}

function Ninja(name) {}

/*
Different ways to invoke a function.

1. Invoked as a general function.
2. Invoked as a method of an object.
3. Invoked as a constructor.
4. Invoked via call method.
5. Invoked via apply method.

*/

// Invoked as a function
skulk('Hatori');
(function(who) {
    console.log(this);  // this will be global `process` object in non-strict mode and undefined in strict mode.
    return who;
})('Hatori');

var ninja = {
    skulk: function() {}
};

// Invoked as a method of an ninja object.
ninja.skulk("Hatori");

// Invoked as a constructor.
ninja = new Ninja("Hatori");

// Invoked via call method
skulk.call(ninja, "hatori");
// Invoked via apply method
skulk.apply(ninja, ['hatori']);
