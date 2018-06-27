var a=3;
myFunction(4);

var b = function () {};
myFunction(function (){});

// difference between function declarations and expressions
function myFunctionDeclaration() {
    function innerFunction() {
        
    }
}

var myFunc = function () {
};

myFunc();