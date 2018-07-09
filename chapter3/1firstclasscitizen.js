// Functions are first class citizens or first class objects
// How objects and functions are related.

// objects and functions similarities - only difference that makes functions powerful is that they can be invoked.

// created via literals;
var ninja = {};
function ninjaFunc() {};

// Assigned to variables, arrays, props to object
var ninja2 = {};
var ninjaFunction = function () {};

ninjaArray.push({});
ninjaArray.push(function () {
});

ninja.data = {};
ninja.func = function () {
};

// passed as arguments to other functions
function hide(ninja) {
    ninja.visibility = false;
}
hide({});

function call(ninjafunction) {
    ninjafunction();
}
call(function() {
});

// return as values from other functions
function returnNewNinja() {
    return {};
}

function returnNewNinjaFunc() {
    return function () {
    }
}

//possess properties just like objects
var ninja = {};
ninja.name = "Pretzel"

ninjaFunction.name = "Hanzo";

// Conclusion - Functons are basically object that can be invoked.
