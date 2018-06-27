function Ninja() {
    this.skulk = function () {
        return this;
    };
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();


console.log(ninja1.skulk() === ninja1);
console.log(ninja2.skulk() === ninja2);