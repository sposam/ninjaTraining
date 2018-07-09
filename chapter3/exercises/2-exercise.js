/* Categorize functions based on their types */

numbers.sort(function sortAsc() {
    return b-a;
});
//sortAsc is a function expression and is a callback function.


numbers.sort((a,b) => a-b);
// arrow function

(function() {})();
// iife - immediately invoked function expression.

function outer() {
    function inner() {};
    return inner;
}
// inner - inner function.


(() => "Yoshi")();
// arrow function without any params
