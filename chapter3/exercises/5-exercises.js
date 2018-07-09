// What are the values of msg1 and msg2

function getNinjaWeildingWeapons(ninja, weapon="katana"){
    return ninja + " " + weapon;
}

var msg1 = getNinjaWeildingWeapons("Yoshi"); // retunrs Yoshi Katana
var msg3 = getNinjaWeildingWeapons("Yoshi", "wakizashi"); // returns "Yoshi wakizashi"
