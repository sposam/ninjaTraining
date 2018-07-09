function samurai() {
    return "samurai here";
}

function ninja() {
    function hiddenNinja() {
        return "ninja here";
    }

    return hiddenNinja();
}

console.log(samurai());
console.log(ninja());
