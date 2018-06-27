// Objective - Lets say we have to call multiple functions in a sequence

// option 1: Put the functions in a arrays and loop thru them - performs very badly.
// option 2: make use of function properties.

var store = {
    nextId: 1,
    cache: {},
    add : function (fn) {
        if(!fn.id) {
             fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        } else {
            console.log("Already in the cache...ignoring " + fn.name)
        }
    }
};



function ninja() {}
function ninja2() {}

store.add(ninja);
store.add(ninja);

store.add(ninja2);
store.add(ninja2);

console.log(store);


