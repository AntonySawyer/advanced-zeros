module.exports = function getZerosCount(number, base) {
/* it's not working well for the time being. The necessary answers
appear in the process of calculation in different places. And I
have not idea why in 17 cases out of 100 the answer is in
another values of expression. */
 	var zeros = 0;
  var prime = [];
  var sortFactors = [];
//2 - single even prime number
  if (base % 2 == 0) {
    prime.push(2);
  }
//looking prime numbers
  for (var i = 3; i < (base + 1) ; i += 2) {
    if (base % i == 0) {
//check - is real prime or not
      var check = 0;
      for (var j = 0; j < prime.length; j++) {
        if (i % prime[j] == 0) {
          check++;
        }
      }
      if (check == 0) {
        prime.push(i);
      }
    }
  }
//count the factors of number for each prime
  for (var i = 0; i < prime.length; i++) {
  var currentPrime = prime[i];
  var sumNumberFactors = 0;
  var sumBaseFactors = 0;
      for (var j = 1; Math.pow(currentPrime, j) <= number; j++) {
      sumNumberFactors += parseInt(number/Math.pow(currentPrime, j));
    }
    for (var k = 1; Math.pow(currentPrime, k) <= base; k++) {
      sumBaseFactors++;
    }
    if (sumBaseFactors == 1) {
      sortFactors.push(sumNumberFactors);
    } else {
      sortFactors.push(Math.floor(sumNumberFactors/sumBaseFactors));
    }
}
//looking smallest
var zeros = sortFactors[0];
for (var i = 0; i < sortFactors.length; i++) {
  if (zeros > sortFactors[i]) {
    zeros = sortFactors[i];
  }
}
	return zeros;
}
