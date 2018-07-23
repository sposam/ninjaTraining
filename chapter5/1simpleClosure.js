// global variable
var outerValue = "ninja";

// global function
function outerFunction() {
    console.log(`We can still see the '${outerValue}' inside the function - closure`);
}

// both outerValue and outerFunction are in the same scope (in this case global scope) and the function has access to outer variable
outerFunction();
