// functional invocation
function ninja() {
    return this;
}

function samurai() {
    "use strict";
    return this;
}

console.log(ninja()); // window/process/global object
console.log(samurai()); // undefined

// method invocation


