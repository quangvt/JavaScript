// Sum All Primes
/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors,
  one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
// Test:
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
  
  function isPrime(input) {
    var mid = Math.floor(Math.sqrt(input));
    for (var i = 2; i <= mid; i++ )
    {
      if (input%i === 0) return false;
    }
    return true;
  }
  
  if (num === 1) return 0;
  
  return isPrime(num) ?
    num += sumPrimes(num - 1) : sumPrimes(num - 1); 
}

sumPrimes(10);
