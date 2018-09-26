module.exports = function getZerosCount(number, base) {
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
//main cycle
  for (var j = 0; j < prime.length; j++) {
    var currentPrime = prime[j];
    var sumNumberFactors = 0;
    var sumBaseFactors = 0;
    var primePow = 1;
    var tnum = number;
    var tbas = base;
//count the pow of number for each prime
    for (var i = 1; tnum != 0; i++) {
      primePow *= currentPrime;
      tnum = Math.floor(number / primePow);
      sumNumberFactors += tnum;
    }
//count number of each prime in base
    while(tbas % currentPrime == 0) {
      tbas = Math.floor(tbas / currentPrime);
      sumBaseFactors++;
    }
    sortFactors.push(Math.floor(sumNumberFactors/sumBaseFactors));
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
