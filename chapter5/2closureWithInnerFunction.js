var outerValue = 'Samurai';

var later;

function outerFunction() {

    var innerValue = 'ninja';

    function innerFunction() {
        console.log(`The outerValue that is visible inside the innerFunction is '${outerValue}'`);
        console.log(`The innerValue that is visible inside the innerFunction is '${innerValue}'`);
    }

    later = innerFunction;
}

outerFunction();
later();
