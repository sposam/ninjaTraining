var values = [0, 3, 2, 5, 9, 7, 4, 8, 1, 10, 15];
console.log("Before sorting with arrow functions...");
console.log(values);

// Arrow function provide syntactic sugar on how we write function expressions.

// Arrow function - params => expression
values.sort((value1, value2) => value1 - value2);
console.log("After sorting with arrow functions...");
console.log(values);
