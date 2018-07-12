var ninja = {};
ninja.skulk = function () {
};

ninja.skulk(); // invocating functions on an object - method invocation
// "this" object for the lexical scoping of the function will be ninja object


// function vs method invocations

//function to return the function context
function whatsMyContext() {
    return this;
}

// creates a functional reference
var getMyThis = whatsMyContext;

console.log(getMyThis());

var ninjaThis = {
    getMyThis : whatsMyContext
};

console.log(ninjaThis.getMyThis() === ninjaThis);   // returns true
