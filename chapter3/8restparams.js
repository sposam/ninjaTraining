function maxMultiply(first, ...remainingparams) {

    //sort remaining params by descending order, also '...' is called ellipsis
    // the omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues.
    var sorted = remainingparams.sort(function (a, b) {
        return b-a;
    });

    console.log(sorted);
    return first * sorted[0];
}

console.log(maxMultiply(3, 7, 7, 5, 1, 9));