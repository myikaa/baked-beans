"use strict";
//playground
var UnitType;
(function (UnitType) {
    UnitType[UnitType["PIECES"] = 0] = "PIECES";
    UnitType[UnitType["GRAMS"] = 1] = "GRAMS";
    UnitType[UnitType["KG"] = 2] = "KG";
})(UnitType || (UnitType = {}));
let itemA = ['steak', 'avocado', 'cheese'];
let quanA = [3, 5, 800];
let unitA = [UnitType.KG, UnitType.PIECES, UnitType.GRAMS];
//tuples = array types have fixed positions
let steak = ['steak', 3, UnitType.KG];
let avocado = ['avocado', 5, UnitType.PIECES];
let cheese = ['cheese', 800, UnitType.GRAMS];
let groceries = [steak, avocado, cheese];
console.log(groceries[0][1]);
//objects - named fields
let s = {
    name: 'steak',
    quantity: 3,
    unit: UnitType.KG,
};
let a = {
    name: 'avocado',
    quantity: 5,
    unit: UnitType.PIECES,
};
let c = {
    name: 'cheese',
    quantity: 800,
    unit: UnitType.GRAMS,
};
console.log(a.quantity);
//classes 
/*
class Steak {
    name: string
    constructor(n: string) {
        this.name = n
    }
}
*/
class Steak {
    constructor(quantity) {
        this.quantity = quantity;
    }
    print() {
        return `${this.quantity} steaks`;
    }
}
let s2 = new Steak(5);
s2.print();
class Cheese {
    constructor(quantity) {
        this.quantity = quantity;
    }
    print() {
        return `${this.quantity} cheeses`;
    }
}
let g = [
    new Steak(4),
    new Cheese(800)
];
