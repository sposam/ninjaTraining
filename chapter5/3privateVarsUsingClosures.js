function Ninja() {
    var feints = 0;

    this.getFeints = function () {
        return feints;
    };

    this.feint = function () {
        feints++;
    };
}

var ninja1 = new Ninja();
ninja1.feint();
console.log(ninja1.feints); // undefined
console.log(ninja1.getFeints()); // 1

var ninja2 = new Ninja();
console.log(ninja2.getFeints()); // 0
