"use strict";
// ---- array operations ---- //
let g = [6, 9, 3];
g.pop(); //removes last element
g.push(4); //add new element
//loop over all elements
g.forEach(i => {
    console.log(i);
});
// ---- if statements ---- //
let b = true;
if (b) {
    //something
}
else {
    //something else
}
//also works
if (b) {
    let v = 5;
}
// ---- basics functions ---- //
function multiply(x, y) {
    return x * y; //must return, otherwise will return undefined
}
console.log(multiply(3, 2)); //output: 6
// * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// ---- final code after video #4 ---- //
var UnitType;
(function (UnitType) {
    UnitType[UnitType["PIECES"] = 0] = "PIECES";
    UnitType[UnitType["GRAMS"] = 1] = "GRAMS";
    UnitType[UnitType["KG"] = 2] = "KG";
})(UnitType || (UnitType = {}));
let itemA = ['steak', 'avocado', 'cheese'];
let quanA = [3, 5, 4];
let unitA = [UnitType.PIECES, UnitType.PIECES, UnitType.PIECES];
// too many = don't buy (sort/filter)
let max = 3;
let buyA = []; //add items
quanA.forEach(i => {
    if (i <= max) {
        buyA.push(i);
    }
});
function add(x, y) {
    return x + y;
}
console.log(add(4, 1));
// console.log(buyA)
