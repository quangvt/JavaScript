// Where Do I Belong
/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted.
The returned value should be a number

For example, getIndexToIns([1,2,3,4],1.5) should return 1 because it
is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20, 3, 5],19) should return 2 because once
the array has been sorted it will look like [3, 5, 20] and 19 is
less than 20 (index 2) and greater than 5 (index 1)
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // Refer article: https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Where-Do-I-Belong
  // Solution 1
  /*
  //arr.sort(function(a, b) {
  //  return a - b;
  //});
  arr.sort((a,b) => a > b);
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }
  return arr.length;
  */
  
  // Solution 2
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum) => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 50);
