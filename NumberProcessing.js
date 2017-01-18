# Function Name: [Your Function Name]
# Function List
#   Find Shortest Word
#   Factorialize
#   Largest of Four

###############################################################################
# Function Name: Generate Random Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax-myMin+1)) + myMin;
}

###############################################################################
# Function Name: Factorialize
function factorialize(num) {
  if (num === 0){
    return 1;
  }
  else {
    return num*factorialize(num-1);
  }
}

###############################################################################
# Function Name: Largest of Four
function largestOfFour(arr) {
  return arr.map(function(childarr){
      return childarr.sort(function(a, b){
        return b - a;
      });
  }).map(function(childarr){
    return childarr[0];
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], 
               [1000, 1001, 857, 1]]);
