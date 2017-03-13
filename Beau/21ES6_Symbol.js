// Symbol (new datatype in ES6)

// Creation
let symbol1 = Symbol();
let symbol2 = Symbol('symbol2');

console.log(symbol1 === symbol2); // false
console.log(typeof symbol1); // "symbol"
console.log("symbol: " + symbol1.toString()); // "symbol: Symbol(symbol2)"

// Use case 1: Symbols as property keys
const MY_KEY = Symbol();
let obje = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

// Use case 2: constants representing concepts
const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch(color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            retrun COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_
        ....
    }
}