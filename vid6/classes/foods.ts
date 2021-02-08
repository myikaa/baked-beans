
export enum UnitType { PIECES, GRAMS, KG }

export interface IsFood {
    name: string,
    quantity: number,
    unit: UnitType,
}

export class Steak implements IsFood {
    name: string
    quantity: number
    unit: UnitType

    constructor(n: string, q: number, u: UnitType) {
        //init
        this.name = n
        this.quantity = q
        this.unit = u
    }

    //methods = functions
    //method = function inside a class
    grill() {
        return 'Boom roasted.'
    }
}

export class Cheese implements IsFood {
    //shorthand
    constructor(
        public name: string,
        public quantity: number,
        public unit: UnitType,
    ) { }

    crackers() {
        return 'Crackers.'
    }
}