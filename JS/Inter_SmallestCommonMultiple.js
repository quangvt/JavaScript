// Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly 
  divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
divisible by all numbers between 1 and 3.

// Test:
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  function bcd(x, y) {
    return (y === 0) ? x : bcd(y, x%y);
  }
  
  var sort = [];
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  for (var i = max; i >= min; i--)
    sort.push(i);
  
  return sort.reduce((pre, cur) => {
    return (pre*cur)/bcd(pre, cur);
  });
}

smallestCommons([1,5]);
