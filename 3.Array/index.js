//// How do you create an empty array?

// const arr = [];
// const arr1 = new Array();
// console.log(arr, arr1); // [],[]



//// Array in JS, can be collection of any data types.

// const arr2 = [0, 1, "hello", false, undefined, 2.3]


//// [1]. Finding a element from an Array **********
// T.C. to finding the element of the arr is O(1).

// const arr = [1, 2, 3, 4, 5];

// const firstElement = arr[0];
// console.log(firstElement);

// const lastElement = arr[arr.length - 1];
// console.log(lastElement);


//// [2]. Remove element from last. **********
//  T.C. O(1)

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.pop()); // it returns the last element of the array.


//// [3]. Add element at the last of the array. 
// T.C. O(1)

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.push(10)); // returns the new "length" of the array.
// console.log(arr);


// [4]. Add element at the first of the array. 
// T.C. O(N)

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.unshift(9)); // returns the new "length" of the array.
// console.log(arr);            // retruns the new Array.


//// [5]. Remove element from the "first position" of the array. 
//// T.C. O(N)

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.shift()); // 1; // removes 1st element
// console.log(arr); // [2,3,4,5]


//// ********* How do you loop through an array in JS? ***********

// [1]. Using "for" loop ...........
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);               // 1, 2, 3, 4, 5
// };


//// [2]. Using "forEach" loop ...........
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(element => {
//   console.log(element);              // 1, 2, 3, 4, 5
// });

//// [3]. Using "for in" ...........
// const arr = [1, 2, 3, 4, 5];
// for (let x in arr) {
//   console.log(x); // 0, 1, 2, 3, 4;  // index of the array elements
// };

//// [4]. Using "for of" ..........
// const arr = [1, 2, 3, 4, 5];
// for (let x of arr) {
//   console.log(x); // 1, 2, 3, 4, 5;   //array elements
// };



//// [1]: How do you check the given element is present or not?

// const arr = [1, 2, 3, 4, 5];
// const findElement = (arr, target) => {
//   for(let x of arr) {
//     if(x === target) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(findElement(arr, 4));

//// Another way using inlcludes menthod of array.
// console.log(arr.includes(4));  // true
// console.log(arr.includes(40)); // false  


//// [2]: Check the given element is present or not, if present return 1 or -1; using for_in

// const arr = [1, 2, 3, 4, 5];
// const findElementIndex = (arr, target) => {
//   for (let idx in arr) {
//     if(arr[idx] === target)  {
//       return idx;
//     }
//   }
//   return -1;
// };

// console.log(findElementIndex(arr, 5)); // index 4


//// [3]: How to delete, add, and update element to specific index? (Using Splice)

// const arr = [1, 2, 3, 4, 5];
// arr.splice(0, 1, 77);             // (start, deleteCount, items...)
// console.log(arr);                 // [77, 2, 3, 4, 5]
// console.log(arr.splice(0, 1, 77));// [77]

// arr.splice(0, 0, 77, 78, 79);
// console.log(arr); // [77, 78, 79, 1, 2, 3, 4, 5]

// arr.splice(1, 1, 101)
// console.log(arr); // [1, 101, 2, 3, 4, 5]


//// [4]: Splice() v/s Slice 
// slice doesnt update the "Original Array", but splice does.
// 
// const arr = [1, 2, 3, 4, 5];
// const subArr = arr.slice(1, 4); // (startIndex, endIndex)
// console.log(subArr);            // [2, 3, 4]  // removed [1, 5] from updated Array
// console.log(arr);               // [1, 2, 3, 4, 5];

// const arr = [1, 2, 3, 4, 5];
// const subArr = arr.splice(1, 4); 
// console.log(subArr);            // deletes [2, 3, 4, 5] from array
// console.log(arr);               // remaining [1]


//// [5]: Shallow Copy (Pointing to the same memory location/reference). will update original

// const arr = [1, 2, 3, 4, 5];

// const arrB = arr;
// const subArr = arrB.splice(1, 2); // changing in arrB, but arr is also get changes.

// console.log(arr);    // [ 1, 4, 5 ]
// console.log(arrB);   // [ 1, 4, 5 ]
// console.log(subArr); // [2, 3]


//// [6]: Deep Copy (wont update the original)
/// (i). Using Spread Operator ::

// const arr = [1, 2, 3, 4, 5];

// const arrB = [...arr]; // Spread Operator
// arrB.splice(1, 0, 20); // only change in arrB, not in arr.
// console.log(arr);      // [ 1, 2, 3, 4, 5 ]
// console.log(arrB);     // [ 1, 20, 2, 3, 4, 5 ]


/// (ii). Using "from()" array method
// const arr = [1, 2, 3, 4, 5];
// const arrB = Array.from(arr);
// arrB.splice(1, 0, 20);
// console.log(arr);  // [ 1, 2, 3, 4, 5 ]
// console.log(arrB); // [ 1, 20, 2, 3, 4, 5 ]


/// (iii). Using concat() method
// const arr = [1, 2, 3, 4, 5];
// const arrB = arr.concat();
// arrB.splice(1, 0, 20);
// console.log(arr);  // [ 1, 2, 3, 4, 5 ]
// console.log(arrB); // [ 1, 20, 2, 3, 4, 5 ]


//// [7]: How to "add" 2 Arrays?

// (i). Using spread method...
// const newArr = [...arr, ...[20, 30, 40]];
// console.log(newArr);           // [1, 2, 3, 4, 5, 20, 30, 40];

// (ii). using concat()
// const newArr = arr.concat([20, 30, 40]);
// console.log(newArr);           // [1, 2, 3, 4, 5, 20, 30, 40];


//// [8]: Check 2 Arrays are equal?

// const isArrayEqual = (arr1, arr2) => {
//   if(arr1.length !== arr2.length) {
//     return false;
//   };

//   for(let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     };
//   };
//   return true;

// or
// return arr1.length === arr2.length && arr1.every((el, i) => arr1[i] === arr2[i]);
// return arr1.length === arr2.length && arr1.some( (el, i) => arr1[i] === arr2[i]);

// };

// console.log(isArrayEqual([2, 3, 4], [2, 3, 40])); // false


////[9]: "Sort" an array in Ascending and Descending order...

// const x = [2, 1, 9, 3, 0, -9];
// console.log(x.sort());                  // By Default [-9, 0, 1, 2, 3, 9] Ascending
// console.log(x.sort((a, b) => (a - b))); // Ascending  [-9, 0, 1, 2, 3, 9]
// console.log(x.sort((a, b) => (b - a))); // Descending [9 , 3, 2, 1, 0, -9]


//// [10]: How to reverse an array?

//// (i). using reverse()... Time Complexity: O(n).
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()); // [5,4,3,2,1]

//// (ii). using spread and reverse().
// const revArr = [...arr].reverse();
// console.log(arr);   // [1, 2, 3, 4, 5]
// console.log(revArr);// [5, 4, 3, 2, 1]

//// (iii). using reduce() // Time Complexity: O(n^2)
// const revArr = arr.reduce((acc, curr) => {
//     return [curr, ...acc]
// }, []);
// console.log(revArr); 

//// (iv). using map()
// const revArr = arr.map((_, i, arr) => 
//   arr[arr.length - 1 - i]
// );
// console.log(revArr);

//// (v). Best Swapping T.c 0(n/2) ~ 0(n)
// i === start Index
// j === end Index

// const revArr = (arr) => {
//   const j = (arr.length - 1) - i;
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     [arr[j], arr[i]] = [arr[i], arr[j]]
//   }
//   return arr;
// }
// console.log(revArr([1, 2, 3, 4, 5]));
// function reverseArrayBetter(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr;
// }
// console.log(reverseArrayBetter([5, 6, 7, 8, 9, 10]))


//// [11]. Find Max and Min element in array using minimum number of comparisions

// const findMinMax = () => {
//   if(!arr.length) {
//     return {min: 0, max: 0}
//   };
//   let min = arr[0];
//   let max = arr[0];

//   // if arr.length Odd
//   let start = 1;
//   // if even
//   if(arr.length % 2 === 0) {
//     start = 2;
//     if(arr[1] > max) {
//       max = arr[1]
//     } else {
//       min = arr[1]
//     }
//   };

//   // compair with pairwise
//   for (let i = start; i < arr.length; i += 2) {
//     if(arr[i] < arr[i + 1]) {
//       if(arr[i] < min) min = arr[i];
//       if(arr[i + 1] > max) max = arr[i + 1]
//     } else {
//       if(arr[i + 1] < min) min = arr[i + 1]
//       if(arr[i] > max) max = arr[i]
//     }
//   }

//   return {min, max}

// }

// console.log(findMinMax(arr))


//// [12]. Find the "Kth" max and min element of an array .
// t.c O(n log n)
// const findKthMinMax = (arr, k) => {
//   if(k < 1 || k > arr.length)
//     return "invalid Input"

//   arr.sort((a, b) => (a - b));

//   const kthMin = arr[k - 1];
//   const kthMax = arr[arr.length - k];

//   return {kthMin, kthMax}
// }
// console.log(findKthMinMax(arr, 4)); // { kthMin: 4, kthMax: 2 }


//// [13]. Sort an Array of 0s, 1s and 2s ( Dutch National Flag problem)

// const sortColors = (arr) => {
//   let low = 0;                // Pointer to the start of the array
//   let mid = 0;                // Pointer to the current element being processed
//   let high = arr.length - 1;  // Pointer to the end of the array

//   while (mid <= high) {

//     if (arr[mid] === 0) {
// // If the current element is 0, swap it with the element at 'low' index
//       [arr[mid], arr[low]] = [arr[low], arr[mid]];
//       low++; // Move 'low' pointer to the right
//       mid++; // Move 'mid' pointer to the right
//     } 
//     else if (arr[mid] === 1) {
// // If the current element is 1, move 'mid' pointer to the right
//       mid++;
//     } 
//     else {
// // If the current element is 2, swap it with the element at 'high' index
//       [arr[mid], arr[high]] = [arr[high], arr[mid]];
//       high--; // Move 'high' pointer to the left
//     }
//   }

//   return arr; 
// };

// console.log(sortColors([0, 1, 2, 0, 2, 1, 2, 1, 2, 0])); 

// const sortColors = (arr) => {
//   let zero = 0, ones = 0, twos = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 0) zero++;
//     if(arr[i] == 1) ones++;
//     if(arr[i] == 2) twos++
//   }

//     for (let i = 0; i < zero; i++) arr[i] = 0;
//     for (let i = zero; i < zero + ones; i++) arr[i] = 1;
//     for (let i = zero + ones; i < zero + ones + twos; i++) arr[i] = 2;

//     return arr
// }

// console.log(sortColors([0, 1, 2, 0, 2, 1, 2, 1, 2]))


//// [14.1] Move Zeros to one Side of Array

// function moveZerosRight(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++
//     }
//   }
//   return arr;
// }
// console.log(moveZerosRight([0, 2, 3, 0, -1, 0, 9])); // [ 2, 3, -1, 9, 0, 0,  0]


// function moveZerosLeftSide(arr) {
//   let j = arr.length - 1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] !== 0) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       j--;
//     }
//   }
//   return arr;
// }

// console.log(moveZerosLeftSide([0, 2, 3, 0, -1, 0, 9]));  // Output: [ 0, 0, 0, 2, 3, -1, 9 ]


//// [14.2]. Move Negatives to one Side of Array. (Brute Force, Better, and optimal).

// function moveNegativesLeft(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }
//   return arr;
// }

// console.log(moveNegativesLeft([0, -3, 2, -9, 4, 9])); // Output: [-3, -9, 0, 2, 4, 9]

// function moveNegativesRight(arr) {
//   let right = arr.length - 1;
//   for(let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] < 0) {
//       [arr[i], arr[right]] = [arr[right], arr[i]]
//       right--
//     }
//   }
//   return arr;
// }
// console.log(moveNegativesRight([-1, 2, -3, 0, -4, 5])); // [ 0, 2, 5, -1, -3, -4 ]
// function moveNegativesRight(arr) {
//   let left = 0;
//   let right = arr.length - 1;
  
//   while (left <= right) {
//       if (arr[left] < 0 && arr[right] >= 0) {
//           [arr[left], arr[right]] = [arr[right], arr[left]];
//           left++;
//           right--;
//       } else {
//           if (arr[left] >= 0) left++;
//           if (arr[right] < 0) right--;
//       }
//   }
  
//   return arr;
// }

// console.log(moveNegativesRight([-1, 2, -3, 0, -4, 5])); // Output: [ 0, 2, 5, -1, -3, -4 ]


//// [15]. Max consecutive ones.
  // Given a binary array nums, return the maximum number of consecutive 1's  in an array.

  function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currentCount++;
      } else {
        maxCount = Math.max(maxCount, currentCount);
        currentCount = 0;
      }
    }
  
    // Update maxCount in case the array ends with a sequence of 1's
    maxCount = Math.max(maxCount, currentCount);
  
    return maxCount;
  }
  
  // Example usage:
  console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 0, 1])); // Output: 2
  console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));     // Output: 3
  console.log(findMaxConsecutiveOnes([0, 0, 0, 0]));           // Output: 0
  console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1]));        // Output: 5
  console.log(findMaxConsecutiveOnes([]));                     // Output: 0
  