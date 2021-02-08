"use strict";
// ---- variables ---- //
//implicit declaration
let mika = 'algo trader'; //string
let steaks = 65; //number
/* NOTE:
> naming convention below is called camelCase
> first word not capitalized, first letter of every consecutive word capitalized
> it's the convention for naming everything in TS/JS and many other languages
*/
let steakIsGood = true; //boolean
//explicit declaration
let kiki = 'curious';
let avocadoes = 7;
let javaIsCool = false;
// ---- arrays ---- //
let people = ['Ted', 'Dmitri', 'Anna']; //implicit
let coolPeople = ['Mika', 'Anastasia', 'Ares']; //explicit
//accessing elements (starts at index 0)
let coder = coolPeople[0]; //'Mika'
let fighter = coolPeople[2]; //'Ares'
// ---- enums ---- //
var SteakType;
(function (SteakType) {
    SteakType[SteakType["BLUE"] = 0] = "BLUE";
    SteakType[SteakType["RARE"] = 1] = "RARE";
    SteakType[SteakType["MEDIUM"] = 2] = "MEDIUM";
    SteakType[SteakType["TRASH"] = 3] = "TRASH";
})(SteakType || (SteakType = {})); //each associated with a number, starting from 0
let a = SteakType.RARE; //1
let b = SteakType.TRASH; //3
// * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// ---- final code after video #3 ---- //
var UnitType;
(function (UnitType) {
    UnitType[UnitType["PIECES"] = 0] = "PIECES";
    UnitType[UnitType["GRAMS"] = 1] = "GRAMS";
    UnitType[UnitType["KG"] = 2] = "KG";
})(UnitType || (UnitType = {}));
let itemA = ['steak', 'avocado', 'cheese'];
let quanA = [3, 5, 300];
let unitA = [UnitType.PIECES, UnitType.KG, UnitType.GRAMS];
console.log(unitA);
