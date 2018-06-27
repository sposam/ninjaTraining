var assert = require("assert");

var text = "Domo arigato!";

console.log("before defining functions....");

function useless(ninjaCallback) {
    console.log("In useless function....");
    return ninjaCallback();
}

function getText() {
    console.log("In getText function....");
    return text;
}

console.log("Before making all calls");

assert(useless(getText) === text, "The useless function actually works!!");

console.log("After all the calls have been made....");

// rewriting the whole assert call to reduce number of global functions

assert(useless(function () {
    return text;
}) === text, "useless function with direct in-place function call");

console.log("After direct in-place function call..");



