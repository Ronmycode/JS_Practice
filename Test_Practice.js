// input = arr = [12, 3, 5, 9, 7];
// output = [3, 5, 7];
/*
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
  //missing code (answer is option 3)

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(getPrimeNumbers(arr));
*/
/*
option4(not);
for (let i = num; i >= 2; i--) {
  if (num % i == 0) {
    return false;
  }
}

//option3 (not)
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    return false;
  }
}

//option2 (not)
for (let i = 2; i < num; i++) {
  if (num % i != 0) {
    return false;
  }
}
//option1
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    return false;
  }
}
*/

/*
################################
######## Question # 6 ##########
################################

let arr = [10, 5, 2, 8, 7, 1, 9, 6, 3, 4];
let output = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//option 1
const arregloOrdenado = arr.sort((a, b) => a - b);


//Option 2
const arregloOrdenado = arr.sort((a, b) => b - a);

console.log(arregloOrdenado);
*/

//input
// let nums = [2, 7, 11, 15];
// let target = 9;
//(la suma de las posiciones 0 y 1 del array retorna como resultado 9)
/*output = [0, 1];

function twoSum(nums, target) {
  let array = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //missing code goes here
      sum = nums[i] + nums[j];
      if (sum == target) {
        array.push(i, j);
      }
    }
  }
  return array;
}
// console.log(nums);
console.log(twoSum([2, 7, 11, 15], 9));
*/
/*
Option 4
sum = nums[i] + nums[j];
if(sum == target){
array.push(i,j)
}


Option 3
sum = nums[i] + nums[j];
if(sum == target){
array.push(target)
}


Option 2
sum = nums[i]+nums[j];
array.push(sum)


Option 1

sum = nums[i] + nums[j];
if(sum != target){
array.push(i,j)
}
*/
let string = "abxbxc";
let output = "abybyc";

/*Option 4:
 
for (let i = 0; i < string.length; i++) {
  string = string.replace(string[i], "y");
}
*/

/* Option 3:
string = string.replace("x", "y");
*/

/*Option 2:
for (let i = 0; i < string.length; i++) {
  if (string[i] != "x") {
    string = string.replace(string[i], "y");
  }
}
*/
/*Option 1:
for (let i = 0; i < string.length; i++) {
  if (string[i] == "x") {
    string = string.replace(string[i], "y");
  }
}

console.log(string);
*/

// rates = [1.15, 0.85];
// currencies = [100, 200];
// output = [115, 170];

// function convertCurrencies(rates, currencies) {
//   // Missing code goes here
//   const amountsConverted = [];
//   for (let i = 0; i < currencies.length; i++) {
//     const amount = currencies[i] * rates[i];
//     amountsConverted.push(amount);
//   }
//   return amountsConverted;
// }

// console.log(convertCurrencies(rates, currencies));
// console.log();

//Option 4
/*
const amountsConverted = [];
  for (let i = 0; i < currencies.length; i++) {
    const amount = currencies[i] * rates[i];
    amountsConverted.push(amount);
  }
  return amountsConverted;
*/

/*
//Option 3
const amountsConverted = [];
for (let i = currencies.length; i > 0; i++) {
  const amount = currencies[i] * rates[i];
  amountsConverted.push(amount);
}
return amountsConverted;
*/

//option 2
// for (let i = 0; i < currencies.length; i++) {
//   const amount = currencies[i] * rates[i];
//   return amount;
// }

// arr = [5, 3, 7, 1, 9, 2];
// output = [1, 2, 3, 5, 7, 9];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //missing code
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));

// Option4;
// if (arr[j] == arr[j + 1]) {
//   const temp = arr[j];
//   arr[j] = arr[j + 1];
//   arr[j + 1] = temp;
// }

// Option3;
// if (arr[j] <= arr[j + 1]) {
//   const temp = arr[j];
//   arr[j] = arr[j + 1];
//   arr[j + 1] = temp;
// }

// Option2;
// if (arr[j] > arr[j + 1]) {
//   const temp = arr[j];
//   arr[j] = arr[j + 1];
//   arr[j + 1] = temp;
// }

// input = "Hello World";
// Output = "dlroW olleH";

// function reverseString(string) {
//   let reverse_string = [];
//   //Missing code goes here
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse_string.push(string[i]);
//   }

//   return reverse_string.join("");
// }

// console.log(reverseString("Hello World"));

// // Option 2
// for (let i = string.length - 1; i >= 0; i--) {
//   reverse_string.push(string[i]);
// }

// s = "Hello Worldse";
// output = 5;

// function lengthOfLastWord(s) {
//   //Missing code goes here
//   let array = s.split(" ");
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] != "") {
//       return array[i].length;
//     }
//   }
// }

// console.log(lengthOfLastWord(s));

//Option1
// let array = s.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] != "") {
//       return array[i].length;
//     }
//   }

//Option2
// for (let i = 0; i < s.length; i++) {
//   if (s[i] != "") {
//     return s[i].length;
//   }
// }

//Option3
// for (let i = s.length - 1; i >= 0; i--) {
//   if (s[i] != "") {
//     return s[i].length;
//   }
// }

// Option4
// let array = s.split(" ");
// for(let i= array.length -1; i>=0; i--){
//   if(array[i] != ""){
//     return array[i].length;
//   }
// }

arr = [1, 2, 3, 11, 4, 5, 6, 7, 8, 9, 10, 10, 12, 15];
output = 11;

function findNumberBiggerThanTen(arr) {
  //Missing code goes here
  return arr.find((number) => number > 10);
}

console.log(findNumberBiggerThanTen(arr));
