// created via literals
function ninjaFunc() {
}

// Assigned to variables, arrays, props to object
var ninjaFunction = function () {};

ninjaArray.push(function () {
});

ninja.func = function () {
};

// passed as arguments to other functions
function call(ninjafunction) {
    ninjafunction();
}

call(function () {

});

// return as values from other functions
function returnNewNinjaFunc() {
    return function () {
    }
}

//possess properties just like objects
ninjaFunction.name = "Hanzo";





