function foreach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }
}

var weapons = [{type: 'shuriken'}, {type: 'katana'}, {type: 'nunchucks'}];
foreach(weapons, function(index) {
    console.log(weapons[index]);
    console.log(weapons[index].type);
});
