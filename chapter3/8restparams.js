function maxMultiply(first, ...remainingparams) {

    //sort remaining params by descending order, also '...' is called ellipsis
    // the omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues.
    // ellipsis only come at the end of the parameter list.
    var sorted = remainingparams.sort(function (a, b) {
        return b-a;
    });

    console.log(sorted);
    return first * sorted[0];
}

// remainingparams is an array
function minMultiply(first, ...remainingparams) {
    var sorted = remainingparams.sort((a,b) => a-b);

    console.log(sorted);
    return first * sorted[0];
}

console.log(maxMultiply(3, 7, 7, 5, 1, 9));
console.log(minMultiply(3, 7, 7, 5, 1, 9));

/*
SyntaxError: Rest parameter must be last formal parameter
function thisThrowsError(...restparams, randomvar) {
    console.log(restparams, randomvar);
}

console.log(thisThrowsError(5,6,7));
*/
