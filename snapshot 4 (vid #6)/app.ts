
// ---- tuples ---- //

let tup: [string, number, boolean] = ['fish', 4, false] //"arrays with datatypes in fixed positions"
let f = tup[0] //'fish'

// ---- objects ---- //

let car = {
    name: 'Chevy',
    wheels: 4,
    doors: 2
}
console.log(car)

// ---- classes ---- //

//classes = blueprints
//objects = made from classes
class Cat {
    public name: string //properties can be public, private, or readonly
    public weight: number

    //constructors to initialize objects of a class
    constructor(n: string, w: number) {
        this.name = n
        this.weight = w
    }

    //methods
    meow() {
        console.log('maooow')
    }
}

class Dolphin {
    //shorthand for defining properties and assigning them in constructor
    constructor(
        public name: string,
        private length: number,
        private isDangerous: boolean,
    ) { }
}

// ---- interfaces ---- //

//interfaces = protocol for objects
//defines properties + methods that must be implemented
interface IsAnimal {
    name: string
}

class Dog implements IsAnimal {
    constructor (
        public name: string
    ){}
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * //

// ---- final code after video #6 ---- //

import { Steak, Cheese, IsFood, UnitType } from "./classes/foods.js" //keep this in JS

let s: Steak = new Steak('steak', 3, UnitType.KG)
let c: Cheese = new Cheese('brie', 800, UnitType.GRAMS)
let y: IsFood[] = [s, c]
console.log(y)
