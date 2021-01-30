
// ---- array operations ---- //

let g = [6, 9, 3]
g.pop() //removes last element
g.push(4) //add new element
//loop over all elements
g.forEach(i => {
    console.log(i)
})

// ---- if statements ---- //

let b = true
if (b) {
    //something
} else {
    //something else
}

//also works
if (b) { let v = 5 }

// ---- basics functions ---- //

function multiply(x: number, y: number) {
    return x * y //must return, otherwise will return undefined
}
console.log(multiply(3, 2)) //output: 6

// * * * * * * * * * * * * * * * * * * * * * * * * * * * //

// ---- final code after video #4 ---- //

enum UnitType { PIECES, GRAMS, KG }

let itemA = ['steak', 'avocado', 'cheese']
let quanA = [3, 5, 4]
let unitA: UnitType[] = [UnitType.PIECES, UnitType.PIECES, UnitType.PIECES]

// too many = don't buy (sort/filter)

let max = 3
let buyA: number[] = [] //add items

quanA.forEach(i => {
    if (i <= max) {
        buyA.push(i)
    }
})

function add(x: number, y: number) {
    return x + y
}

console.log(add(4, 1))
// console.log(buyA)
