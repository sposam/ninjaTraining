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