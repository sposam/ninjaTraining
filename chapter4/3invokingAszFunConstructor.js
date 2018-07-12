// constructor function - A constructor that creates a property called skulk on whatever object that represents the function
// context


// Ninja function used to construct ninjas (ninja1, ninja2)

function Ninja() {
    this.skulk = function () {
        return this;
    };
}

// when invoked with the new keyword, an empty object instance is created and set as the functional context `this`.
// In this example, we add a new property to the `this` object.
var ninja1 = new Ninja();
var ninja2 = new Ninja();

console.log(ninja1.skulk() === ninja1);
console.log(ninja2.skulk() === ninja2);
