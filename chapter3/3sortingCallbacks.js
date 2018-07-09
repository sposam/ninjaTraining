var values = [0, 3, 2, 5, 9, 7, 4, 8, 1];

console.log("Same array before sorting...");
console.log(values);

// Javascript's sort function takes as input a comparison function/algorithm on how values should be ordered as a CALLBACK!
// with the following syntax. """values.sort(comparison function)"""

/*  More on comparisonFunction -
    It takes 2 values, say a and b
    If the comparisonFunction returns
        * less than 0, then a's sorting index is less than b's i.e. a comes first
        * greater than 0, then a's sorting index is greater than b's 1.e. b comes first.
        * equal to 0, then - they are equal, but returned/sorted based on other elemennts.
*/

console.log(values.sort(function (a, b) {
    return a-b;
}));

// The sorting is performed in-place and no new array is created.
console.log("Same array after sorting...");
console.log(values);
