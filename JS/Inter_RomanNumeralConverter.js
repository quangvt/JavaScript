// Roman Numeral Converter

/*
Convert the given number into a roman numeral
*/

function convertToRoman(num) {
  var dec = [1000, 900, 500,  400, 100,   90,  50,   40,  10,    9,   5,    4,   1];
  var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  var romanized = '';
  
  for (var i = 0; i < dec.length; i++) {
    while(dec[i] <= num) {
      romanized += rom[i];
      num -= dec[i];
    }
  }
  return romanized;
}
