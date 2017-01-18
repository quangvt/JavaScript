// Sum All Numbers in a Range
/*
We'll pass you an array of two numbers. Return the sum of those two numbers 
  and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  var pre = arr[0];
  var cur = arr[1];
  var min = Math.min(pre, cur);
  var max = Math.max(pre, cur);
  var sum = min;
  for (int i = 1; i <= (max - min); i++) {
    sum += min + i;
  }
  return sum;
}
