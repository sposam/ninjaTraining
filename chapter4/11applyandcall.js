function juggle() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 55,5);

console.log(ninja1.result);
console.log(ninja2.result);
