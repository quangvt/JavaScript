# Function Name: [Your Function Name]
# Function List
#   Find Shortest Word

###############################################################################
# Function Name: Generate Random Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax-myMin+1)) + myMin;
}

# Function Name: Factorialize
function factorialize(num) {
  if (num === 0){
    return 1;
  }
  else {
    return num*factorialize(num-1);
  }
}
