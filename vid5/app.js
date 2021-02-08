"use strict";
// ---- functions continued ---- //
//default args
function add(x, y = 2) {
    return x + y;
}
//optional args
function alsoAdd(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x + y;
}
//explicit return type
function greet(p) {
    return "доброе утро, " + p;
}
// ---- lambdas, closures, anonymous functions, arrow functions ---- //
/*
filter() takes two args:
1) an array of numbers
2) a function that takes one arg (number) and returns a boolean - the filtering function
*/
function filter(ar, checker) {
    let r = [];
    ar.forEach(e => {
        if (checker(e)) {
            r.push(e);
        }
    });
    return r;
}
let s = [1, 3, 7, 9, 13, 14, 2];
//lambda shorthand
console.log(filter(s, x => x > 7)); //output: [9, 13, 14]
//long version (equivalent)
console.log(filter(s, (x) => {
    return x > 7;
}));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// ---- final code after video #5 ---- //
var UnitType;
(function (UnitType) {
    UnitType[UnitType["PIECES"] = 0] = "PIECES";
    UnitType[UnitType["GRAMS"] = 1] = "GRAMS";
    UnitType[UnitType["KG"] = 2] = "KG";
})(UnitType || (UnitType = {}));
let itemA = ['steak', 'avocado', 'cheese'];
let quanA = [3, 5, 4];
let quanB = [7, 3, 2];
let unitA = [UnitType.PIECES, UnitType.PIECES, UnitType.PIECES];
// too many = don't buy (sort/filter)
let max = 3;
let buyA = []; //add items
quanA.forEach(i => {
    if (check(i, max)) {
        buyA.push(i);
    }
});
function check(q, max) {
    return q <= max;
}
// + dynamic checking function
// + filter with any array
//function that takes a function as an argument
function filterList(a, checker) {
    let newA = [];
    a.forEach(i => {
        //apply checking function `checker`, which was passed as argument
        if (checker(i)) {
            newA.push(i);
        }
    });
    return newA;
}
//
let checkerCreator = (maxQ) => {
    return (q) => {
        return q > maxQ;
    };
};
console.log(filterList(quanB, checkerCreator(3)));
console.log(filterList(quanB, (x) => x <= 3));
