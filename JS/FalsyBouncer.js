// Falsy Bouncer

/*
Remove all falsy values from an array.
Falsy values in JavaScript are: false, null, 0, "", undefined, NaN
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // article refer: https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-Boolean
  /*
  The Array.prototype.filter method expects a function that returns a Boolean value   
  which takes a single argument and returns true for truthy value or false for      
  falsy value. Hence we pass the built-in Boolean function.
  */
  
  /*
  arr = arr.filter(function(n) {
    // Solution 1: => False because "ab" => isNaN
    //return n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && !isNaN(n);
  });
  */ 
  
  // Solution 2:
  arr = arr.filter(Boolean);
  return arr;
}

//bouncer([7, "ate", "", false, 9]);
bouncer(["a","b","c"]);
