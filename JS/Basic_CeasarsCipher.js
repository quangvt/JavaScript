// Ceasars Cipher
/*
One of the simplest and most widely known Ciphers is a Ceasar Cipher, also
known as a Shift Cipher. In a Shift Cipher the meanings of the letters are
shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' => 'N', 'B' => 'O' and so on.

Write a function which take ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + 
  (L.charCodeAt(0) - 65 + 13) % 26 ));
}
