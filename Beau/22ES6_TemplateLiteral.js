// Template Literals

// multi-line strings
console.log(`string test line 1
string text line2`);

// expression interpolation
var a = 5;
var b = 10;
console.log(`Fifteen is $(a + b) and\nnot ${2*a + b}.`)

// Tagged template literals
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    
    return "JS Nuggets!";
}

tag`Hello ${a + b} world ${a * b}`

// ["Hello", " world ", ""]
// [15, 50]

// New
function template(string, ...keys) {
    // console.log(strings); // ["", "", "", "!"]
    // console.log(keys); // [0, 1, 0]
    return (function(...values) {
        var dict = values[values.length - 1] || {};
        var result = [string[0]];
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, string[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template`${0}${1}${0}!`;
// console.log(t1Closure('Y', 'A')); // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
// console.log(t2Closure('hello', {foo: 'World'}))