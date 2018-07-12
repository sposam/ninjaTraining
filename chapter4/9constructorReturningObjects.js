var puppet = {
    rules: false
};

function Emperor() {
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();

console.log(emperor);

/*
Important observations about constructor functions:

1. If the return value of the construct function is an object, then that object is returned as part of
   constructor invocation via `new` expression, and the `this` object passed as part of function context is
   discarded or ignored.
2. If the return value is a primitive/non-object, then the `this` is returned and return value is ignored.   
*/
