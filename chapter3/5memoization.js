function isPrime(value) {
    if(!isPrime.answers) {
        isPrime.answers = {};
    }

    if(isPrime.answers[value] !== undefined) {
        console.log("Answering from cache..")
        return isPrime.answers[value];
    }

    var prime = value !== 1;

    for (var i=2; i<value; i++) {
        if (value % i == 0) {
            prime = false;
            break;
        }
    }

    return isPrime.answers[value] = prime;
}

console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(15));
console.log(isPrime(5));
