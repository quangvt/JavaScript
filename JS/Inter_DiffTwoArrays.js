// Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both. In other words, return the symmetric
difference of the two arrays.
*/

function diffArray(arr1, arr2) {

  // Solution 1:
  /* 
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
  */
  
  // Solution 2:
  /*
  return arr1.concat(arr2).filter(
    function(item) { return !arr1.includes(item) || !arr2.includes(item); }
  );
  */
  
  // Solution 3:
  return arr1.filter(function(el) {return !arr2.includes(el);})
    .concat(arr2.filter(function(el2){return !arr1.includes(el2);}));
}
