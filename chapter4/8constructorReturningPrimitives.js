const assert = require('assert');
function Ninja() {
    this.skulk = function() {
        return true;
    };
    return 1;
}

assert(Ninja() === 1);

var ninja = new Ninja();
assert(typeof ninja === "object", "Constructore returned an Ninja Object");
assert(typeof ninja.skulk === "function", "Skulk on newly created object is a function");

console.log(Ninja());
console.log(new Ninja());
