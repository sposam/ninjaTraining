const assert = require('assert');

function infiltrate(person) {
    assert(person === 'gardener', "This person is a gardener");

    arguments[0] = 'ninja';
    assert(person === 'ninja', "This person is a ninja now!")

    person = 'gardener';
    assert(person === 'gardener', "This person is back to being a gardener");

    assert(arguments[0] === 'gardener', "This person is still a gardener");
}

infiltrate('gardener');
