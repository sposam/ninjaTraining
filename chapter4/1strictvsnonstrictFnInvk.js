const assert = require('assert');

console.log(this.name);
function ninja() {
    return this;
}

function strictNinja() {
    "use strict";
    return this;
}

console.log(ninja());   // global object
console.log("***********************")
console.log(strictNinja());  //undefined in strict mode


// assert(ninja() === module.exports, "In non-strict mode, this is the global process object");
assert(strictNinja() === undefined, "In strict mode, this is undefined");
