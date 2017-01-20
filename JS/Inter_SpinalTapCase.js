// Spinal Tap Case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Test:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  function convert(match, p1, offset, s){
    return String(match).toLowerCase();
  }
  
  var format = /([a-z]+)([A-Z]{1})/g;
  var word = /(?:^|\b|[^A-Za-z0-9])([A-Z]+\S*)(?:\b|$|[^A-Za-z0-9])/g;
  var sp = /\s+|[^A-Za-z0-9]/g;
  
  return str.replace(format, "$1-$2").replace(word, convert).replace(sp, "-");
}

spinalCase('This Is Spinal Tap');
