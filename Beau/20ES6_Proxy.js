// Proxies

// Syntax: var p = new Proxy(target, handler);

// Example 1
var handler = {
    get (target, key) {
        return key in target ? target[key] : 37;
    }
};

// Case 1
var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1 undefined
console.log('c' in p, p.c); // false 37

// Case 2
var p = {};
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1 undefined
console.log('c' in p, p.c); // false undefined

// Example 2
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(typeof value !== 'number' || Number.isNaN(value)) {
                console.log('Age must be a number');
            }
            if(value <= 0) {
                console.log('Age must be a positive number');
            }
        }
        
        obj[prop] = value;
        
        return true;
    }
};

let person = new Proxy({}, validator);

person.age = 'young'; // Age must be a number
person.age = 100; 
