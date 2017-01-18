// Missing Letter

/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  /* Solution 1 */
  /*
  var arrIn = str.split('');
  var arrOut = [];
  var start = arrIn[0].charCodeAt();
  var end = arrIn[arrIn.length - 1].charCodeAt();
  for (var i = start+1; i < end; i++){
    var txt = String.fromCharCode(i);
    if (arrIn.indexOf(txt) < 0){
      if (arrOut)
      arrOut.push(txt);
    }
  }
  return arrOut.length === 0 ? undefined : arrOut.join('');
  */
  
  /* Solution 2 */
  var out = "";
  var flg = false;
  for (var i = str[0].charCodeAt(); i < str[str.length - 1].charCodeAt(); i++) {
      var t = String.fromCharCode(i);	
      if (str.indexOf(t) < 0) {
        out += t;
        flg = true;
      }
  }
  
  return flg ? out : undefined;
}

fearNotL
