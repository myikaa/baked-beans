"use strict";
var UnitType;
(function (UnitType) {
    UnitType[UnitType["PIECES"] = 0] = "PIECES";
    UnitType[UnitType["GRAMS"] = 1] = "GRAMS";
    UnitType[UnitType["KG"] = 2] = "KG";
})(UnitType || (UnitType = {}));
let itemA = ['steak', 'avocado', 'cheese'];
let quanA = [3, 5, 300];
let unitA = [UnitType.PIECES, UnitType.KG, UnitType.GRAMS];
// console.log(unitA)
let tooMuchChecker = (q, maxQ = 300) => {
    return q > maxQ;
};
let tooMuchCheckerCreator = (maxQ = 300) => {
    return (q) => {
        return q > maxQ;
    };
};
function sortList(arr, checker) {
    let newA = [];
    arr.forEach(i => {
        if (!checker(i)) {
            newA.push(i);
        }
    });
    return newA;
}
console.log(sortList(quanA, tooMuchCheckerCreator(3)));
