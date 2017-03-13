// 13 Hoisting

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

// console.log(definedLater); // undefined
var definedLater;
definedLater = 'I am defined';
// console.log(definedLater); // 'I am defined'

console.log(definedSimulateneously); // undefined
var definedSimulateneously = 'I am defined!';
// console.log(definedSimulateneously); // 'I am defined'

doSomethingElse(); // 'I did it!' => HOISTING
// declare function
function doSomethingElse() {
    console.log('I did it!');
}

// functionVar(); // Uncaught Type Error: functionVar is not a function
// expression function
var functionVar = function() {
    console.log('I did it!');
}