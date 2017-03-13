// Clean Code: Function (Part 2)

// Avoid side effects
let name = 'Beau Carnes';

function splitIntoFirstAndLastName() {
    name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name);
// =>
let name = 'Beau Carnes';

function splitIntoFirstAndLastName() {
    name = name.split(' ');
}

const newName = splitIntoFirstAndLastName(name);

console.log(name);
console.log(newName);

// Don't write to golbal function
Array.prototype.diff = function diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
};

// =>
class SuperArray extends Array {
    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}

// Favor functional programming over imperative programming
const programmerOutput = [
    {
        name: 'Uncle Bobby',
        linesOfCode: 500
    }, {
        name: 'Suzie Q',
        linesOfCode: 1500
    }, {
        name: 'Jimmy Gosling',
        linesOfCode: 150
    }, {
        name: 'Gracie Hopper',
        linesOfCode: 1000
    }
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
    totalOutput += programmerOutput[i].linesOfCode;
}
// =>
const INITIAL_VALUE = 0;
const totalOutput = programmerOutput
    .map((programmer) => programmer.linesOfCode)
    .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);

// Encapsulate conditionals
if(fsm.state === 'fetching' && isEmpty(listNode)) {
    // ...
}

// =>
function shouldShowSpinner(fsm, listNode) {
    return fsm.state === 'fetching' && isEmpty(listNode);
}
if(shouldShowSpinner(fsmInstance, listNodeInstance)) {
}


// Avoid negative conditionals
function isDMNodeNotPresent(node) {
    // ...
}
if(!isDOMNodeNotPresent(node)) {
    // ...
}
// =>
function isDMNodePresent(node) {
    // ...
}
if(isDOMNodePresent(node)) {
    // ...
}

// Avoid conditionals
class Airplane {
    // ...
    getCruisingAltitude() {
        switch (this.type) {
            case '777':
                return this.getMaxAltitude() - this.getPassengerCount();
            case 'Air Force One':
                return this.getMaxAltitude();
            case 'Cessna':
                return this.getMaxAltitude() - this.getFuelExpenditure();
        }
    }
}
// => 
class Airplane {
    // ...
}

class Boeing777 extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude() - this.getPassengerCount();
    }
}

class AirForceOne extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude();
    }
}

class Cessna extends Airplan {
    // ...
    getCruisingAltitude() {
        
    }
}



// Remove dead code
