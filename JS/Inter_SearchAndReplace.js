// Search and Replace
/*
Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing(before)/
Third argument is what you will be replacing the second argument with
(after).

NOTE: preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word
"dog", it should be replaced as "Dog".
*/

function myReplace(str, before, after) {
  var arr = str.split(' ');
  
  var i = arr.indexOf(before);
  
  var reg = /^[A-Z]+/; 
  
  if(reg.test(before)) {
    var upAfter = after.replace(/(^[a-z]{1})/,after[0].toUpperCase());
    arr.splice(i, 1, upAfter);
  } 
  else {
    arr.splice(i, 1, after);
  }
  return arr.join(' ');
}
