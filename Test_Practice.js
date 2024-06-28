// return only Prime numbers from array

//input
const arr = [12, 3, 5, 9, 7];
//Output
const Output = [3, 5, 7];

//funtion
function getPrimeNumbers(arr) {
  const prime = [];
  for (let numero of arr) {
    if (isPrime(numero)) {
      prime.push(numero);
    }
  }
  return prime;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  // missing code goes here

  for (let i = num; i >= 2; i--) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(arr));
console.log(getPrimeNumbers);

// option 1
for (let i = num; i >= 2; i--) {
  if (num % i == 0) {
    return false;
  }
}

// option 2
for (let i = 1; 1 < num; i++) {
  if (num % i === 0) {
    return false;
  }
}

// option 3
for (let i = 2; 1 < num; i++) {
  if (num % i === 0) {
    return false;
  }
}

// option 4
for (let i = 2; 1 < num; i++) {
  if (num % i != 0) {
    return false;
  }
}
