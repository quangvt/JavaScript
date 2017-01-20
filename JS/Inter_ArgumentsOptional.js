// Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one arguments and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a
function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAdd(3) return 5;
If either argument isn't a valid number, return undefined.
// Test:
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/

function addTogether() {
  var arr = Array.prototype.slice.call(arguments);
  if (arr.length > 1){
    if ((typeof(arr[0]) !== "number") || (typeof(arr[1]) !== "number"))
      return undefined;
    return arr[0] + arr[1];
  } 
  else if (arr.length === 1) {
    var a = arr[0];
    if (typeof a !== "number") return undefined;
    
    return function(b) {
      if (typeof b !== "number") return undefined;
      return a + b;
    };
  }  
}

addTogether("x",3);


// FreeCodeCamp Solution
//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}

// test here
addTogether(2,3);
