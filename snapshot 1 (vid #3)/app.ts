
// ---- variables ---- //

//implicit declaration
let mika = 'algo trader' //string
let steaks = 65 //number
/* NOTE: 
> naming convention below is called camelCase
> first word not capitalized, first letter of every consecutive word capitalized
> it's the convention for naming everything in TS/JS and many other languages
*/
let steakIsGood = true //boolean

//explicit declaration
let kiki: string = 'curious'
let avocadoes: number = 7
let javaIsCool: boolean = false

// ---- arrays ---- //

let people = ['Ted', 'Dmitri', 'Anna'] //implicit
let coolPeople: string[] = ['Mika', 'Anastasia', 'Ares'] //explicit
//accessing elements (starts at index 0)
let coder = coolPeople[0] //'Mika'
let fighter = coolPeople[2] //'Ares'

// ---- enums ---- //

enum SteakType { BLUE, RARE, MEDIUM, TRASH } //each associated with a number, starting from 0
let a = SteakType.RARE //1
let b = SteakType.TRASH //3

// * * * * * * * * * * * * * * * * * * * * * * * * * * * //

// ---- final code after video #3 ---- //

enum UnitType { PIECES, GRAMS, KG }

let itemA = ['steak', 'avocado', 'cheese']
let quanA = [3, 5, 300]
let unitA: UnitType[] = [UnitType.PIECES, UnitType.KG, UnitType.GRAMS]

console.log(unitA)
