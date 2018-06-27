var sum = function () {
    var total = 0;
    for(var i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

console.log(sum(1,2,3));
console.log(sum(9.1,10));

var sumArray = function (...restParams) {
    return restParams.reduce((a,b) => a+b,0);
};

console.log(sumArray(1,2,3,4));
console.log(sumArray(9.1,10));

var arr = [1,2];
console.log(arr);
