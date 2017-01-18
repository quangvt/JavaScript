# Function Name: [Your Function Name]
# Function List
#   Find Shortest Word

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

