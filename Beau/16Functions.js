// Functions
function square(number) {
    return number * number;
}

console.log(square(4));

var someVar = "Hat";
function myFunc() {
    var someVar = "Shoes";
    conole.log(someVar); // not local: Hat, local: Shoes
}

myFunc();
console.log(someVar); // "Hat"

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    
    return square(a) + square(b);
}

a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // return 25