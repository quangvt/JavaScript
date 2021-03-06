// Steamroller
/*
Flatten a nested array. You must account for varying levels of nesting.
// Test:
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(arr, toArr) {
    return arr.concat(Array.isArray(toArr) ? 
                      steamrollArray(toArr) : toArr);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
