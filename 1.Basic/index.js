//// [1]: sum of all natural number from 1 to n.
// sum of 1 to 5 = 15

/// ************ Using FOR Loop ****************
function sumOfNaturalNum(n) {
  /// ******** First Way *********
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum = sum + i;
  // }
  // return sum;

  // ********* Using formula ***********
  // return n * (n + 1)/2
};

// console.log(sumOfNaturalNum(5)); // 15


//// [2]: sum of digits of a number.
// 1234 = 1+2+3+4 = 10

/// ********* While Loop **************
// function sumOfDigits(n) {
//   let sum = 0;
//   while(n > 0) {
//     sum += n % 10;         // Modulus  Operator, calculates the remainder.        // Extract the last digit of a number.   // 123 % 10 = 3. 
//     n = Math.floor(n / 10);// Division Operator, calculates the integer quotient. // Remove  the last digit from a number. // 123 / 10 = 12. 
//   }
//   return sum;
// };

// console.log(sumOfDigits(1234)); // 10


//// [3]: Count the no of digits of a number.
// 234321 = 6
/// ********* do While Loop **************

// function countOfDigits (num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);

//   return count;
// };

// console.log(countOfDigits(234321)); // 6
// console.log(countOfDigits(-234321)); // 6


//// [4]: Check given number is Palindron number or not.
// 234 = false
// 121 = true


// function palindronNo(num) {
//   let copyNo = num;
//   let reverseNo = 0;

//   while(copyNo > 0) {
//     let lastDigit = copyNo % 10;
//     reverseNo = reverseNo * 10 + lastDigit
//     copyNo = Math.floor(copyNo / 10)
//   }
//   return num === reverseNo
// }
// console.log(palindronNo(123321));


/// [5]: Fibonacci Series...
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

function findFibSeriesAt(n) {
  if(n < 2) return n;
  let prev = 0, curr = 1, next;

  for(let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
}

console.log(findFibSeriesAt(6)); // 8


/// [6]: Missing Number

// function missingNum(numArr) {
//   let sum = 0;
//   for(let i = 0; i < numArr.length; i++) {
//     sum += numArr[i]
//   }

//   return numArr.length * (numArr.length + 1)/2 - sum;
//   // return numArr.length * (numArr.length + 1)/2 - numArr.reduce((acc, num) => num + acc)
// };

function missingNo(numArr) {
  let sum = 0;

  // Calculate the sum of all numbers in the array
  for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i]
  };

  // Calculate the sum of all numbers from 0 to n
  let n = numArr.length;
  let expectedSum = n * (n + 1) / 2

  return expectedSum - sum;

};

console.log(missingNo([3, 0 , 1])); // length = 3; [0, 3], 0,1,3 is alrady present, 2 is missing.
console.log(missingNo([0 , 1]));    // length = 2; [0, 2], 0,1 is already present, 2 is missing.