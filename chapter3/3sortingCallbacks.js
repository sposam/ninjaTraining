var values = [0, 3, 2, 5, 9, 7, 4, 8, 1];

// Javascript's sort function takes as input a comparison function/algorithm on how values should be ordered as a CALLBACK!
// with the following syntax. """values.sort(comparison function)"""

console.log(values.sort(function (a, b) {
    return a-b;
}));