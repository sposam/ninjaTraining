// In the following code snippet which of the functions are callback functions

numbers.sort(function sortAsc(a,b) {
    return a-b;
})
// sortAsc is a callback function.

function ninja() {};
ninja();
// ninja is not a callback function, it is a standard function.

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function handleClicking() {
    console.log("clicked");
});
// handleClicking is a callback function.
