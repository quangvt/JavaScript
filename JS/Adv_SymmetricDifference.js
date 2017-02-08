// Symmetric Difference

/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) 
of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term 
"symmetric difference" of two sets is the set of elements which are in either of the two sets,
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} 
= {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference
*/

// Search on wiki this solution
function sym() {
  // diff function: return differences between set A and set B
  //  A - B
  const diff = (a, b) => new Set([...a].filter(n => !b.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
  // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
  // symmetric_difference is A - B & B - A
    .reduce((a, b) => new Set([...diff(a, b), ...diff(b, a)]));
  return [...result];
}

sym([1, 2, 3], [5, 2, 1, 4]);
