// do work here

function PrimeFinder(n) {
  this.number = n;
  this.nthPrime = null;
}
function isPrime(number){
    for(var i=2; i<number; i++){
      if (number%i===0){
        return false;
      }
    }
    return true;
  }
  PrimeFinder.prototype.getPrimeNumber = function () {
    var primeCounter = 0;
    var number = this.number;
    var currentNumber = 2;
    while (primeCounter !== number) {
      if(isPrime(currentNumber)) {
        primeCounter++;
        currentNumber++;
        } else {
        currentNumber++;
      }
    }
    return currentNumber - 1;
  };

  var thousandthOne = new PrimeFinder(6);
  console.log(thousandthOne.getPrimeNumber());