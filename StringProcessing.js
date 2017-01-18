# Function Name: [Your Function Name]
# Function List
#   Find Shortest Word
#   Count Number of Whitespace in Statement
#   Find Longest Word
#   Title Case a Sentence
#   Repeat String Num Times


###############################################################################
# Function Name: Find Shortest Word
function findShortest(s){
	return (s) = s.split(' ').sort((a, b) => a.length - b.length)[0].length
}
# Test
var s = "bitcoin take over the world maybe who knows perhaps";
findShortest(s);

###############################################################################
# Function Name: Count Number of Whitespace in Statement
var testString = "How many spaces are there in this sentence?";
var expression = /\s+/g;
// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

###############################################################################
# Function Name: Find Longest Word
function findLongestWord(str) {
  var arr = str.split(" ");
  var longest = 0;
  arr.sort(function(a, b) {
    return b.length - a.length;
  });
  return arr[0].length;
}

###############################################################################
# Function Name: Title Case a Sentence
function titleCase(str) {
  // Method 1
  /*
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
    return str.join(' ');
  */
  
  // Method 2
  /*
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  */
  
  // Method 3
  /*
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
  */
  
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

###############################################################################
# Function Name: Repeat String Num Times
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) { return "";}
  
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
