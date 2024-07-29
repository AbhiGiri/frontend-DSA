/// Question 1:
function sumOfArray(numsArr) {
  let sum = 0;
  for(let i = 0; i < numsArr.length; i++){
    sum += numsArr[i];
  };
  return sum;
};

console.log(sumOfArray([1,2,3,4,5])); //15

// length of array = 5
// constant = 2
// N + 2 => O(N + 2) => O(N) T.C.


/// Question 2:
function sumOfMatrix(numsArr) {
  let sum = 0;
  for (let i = 0; i < numsArr.length; i++){
    for (let j = 0; j < numsArr.length; j++) {
      sum += numsArr[i][j];
    };
  };
  return sum;
};

console.log(sumOfMatrix([[1,2,3], [4,5,6], [7,8,9]])); //45
// N x N = N^2 
// O(N^2) T.C.


/// Question 3: 
function fn(nums) {
  let arr = [];
  for(let i = 1; i < nums; i = i *2) {
    arr.push(i);
  }
  return arr;
};

console.log(fn(16)); // [1, 2, 4, 8] // 2^4 // log2^N // O(log2^N)

function fn1(nums) {
  let arr = [];
  for(let i = 1; i < nums; i = i*3) {
    arr.push(i);
  }
  return arr;
};

console.log(fn1(16)); // [1, 3, 9] // 3^ // log2^N


/// Question 4: 
function sumOfDigits(num) {
  let sum = 0;
  while(num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sumOfDigits(27));// 9 (2 + 7)
// length of num = 2
// log10 N

