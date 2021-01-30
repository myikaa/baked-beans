
// ---- functions continued ---- //

//default args
function add(x: number, y: number = 2) {
    return x + y
}

//optional args
function alsoAdd(x: number, y?: number) {
    if (y === undefined) {
        y = 2
    }
    return x + y
}

//explicit return type
function greet(p: string): string {
    return "доброе утро, " + p
}

// ---- lambdas, closures, anonymous functions, arrow functions ---- //

/*
filter() takes two args: 
1) an array of numbers
2) a function that takes one arg (number) and returns a boolean - the filtering function
*/
function filter(ar: number[], checker: (n: number) => boolean) {
    let r: number[] = []
    ar.forEach(e => {
        if (checker(e)) {
            r.push(e)
        }
    })
    return r
}

let s = [1, 3, 7, 9, 13, 14, 2]
//lambda shorthand
console.log(filter(s, x => x > 7)) //output: [9, 13, 14]
//long version (equivalent)
console.log(filter(s, (x: number) => {
    return x > 7
}))

// * * * * * * * * * * * * * * * * * * * * * * * * * * * //

// ---- final code after video #5 ---- //

enum UnitType { PIECES, GRAMS, KG }

let itemA = ['steak', 'avocado', 'cheese']
let quanA = [3, 5, 4]
let quanB = [7, 3, 2]
let unitA: UnitType[] = [UnitType.PIECES, UnitType.PIECES, UnitType.PIECES]

// too many = don't buy (sort/filter)

let max = 3
let buyA: number[] = [] //add items

quanA.forEach(i => {
    if (check(i, max)) {
        buyA.push(i)
    }
})

function check(q: number, max: number): boolean {
    return q <= max
}

// + dynamic checking function
// + filter with any array

//function that takes a function as an argument
function filterList(a: number[], checker: (q: number) => boolean) {
    let newA: number[] = []
    a.forEach(i => {
        //apply checking function `checker`, which was passed as argument
        if (checker(i)) {
            newA.push(i)
        }
    })
    return newA
}

//
let checkerCreator = (maxQ: number): (x: number) => boolean => {
    return (q: number) => {
        return q > maxQ
    }
}

console.log(filterList(quanB, checkerCreator(3)))
console.log(filterList(quanB, (x: number) => x <= 3))
