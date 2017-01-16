# Store Some JavaScript Functions
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
