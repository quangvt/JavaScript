// 10 Array Methods

var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr); // [..., "d"]

console.log(arr.pop()); // "d"
console.log(arr); ["a", "b", "c"];

var arr2 = ["g", "q"];
console.log(arr.concat(arr2)); // 
console.log(arr2); // ["g", "q"];

console.log(arr.join("")); //abc

console.log(arr.reverse());
console.log(arr); // ["c", "b", "a"]

console.log(arr.shift()); // "c"
console.log(arr); // ["b", "a"]

console.log(arr.unshift("p")); // 3
console.log(arr); // ["p", "b", "a"]

console.log(arr.slice(1, 2)); // ["b"]
console.log(arr); // p, b, a

arr.push("i");
arr.push("f");
arr.sort(arr);
console.log(arr); // a, b, f, i, p

console.log(arr.splice(2, 2, "JS Nuggets")); // ["f", "i"]
console.log(arr); // ["a", "b", "JS Nuggets", "p"]
