let firstName = 'Avinashi';

// Length of a string
console.log(firstName.length);    // 7

// Access string element
console.log(firstName.charAt(0)); // A
console.log(firstName[0]);        // A
console.log(firstName.charCodeAt(0)); // 65

// Check Presence of Character
// "i" is present in the string or not?
console.log(firstName.includes('i')); // true
console.log(firstName.indexOf('i'));  // 2
console.log(firstName.lastIndexOf('i'));// 7

// Compare Two strings
let anotherName = 'Avinashi'
console.log(firstName.localeCompare(anotherName))// 0 // -1

// Replace Substring
let str = '     Avinash is the best frontend developer.        But Abhishek is Awesome      ';
console.log(str.replace('Avinash', 'Abhishek'));

// substring of a string
console.log(str.substring(7, 40)); // is the best frontend developer
console.log(str.slice(7, 50));     // is the best frontend developer [diff. is slice takes -ve int (-4, -1)]

// search return -1 or 0 as false or true.
console.log(str.search('Abhishek')); // -1 (same as indexOf)
console.log(str.indexOf('Avinash')); // 0

// Split and Join
// split return the substring array
console.log(str.split(".")); // ['Avinash is the best frontend developer', ' But Abhishek is Awesome']
console.log(str.split(" ")); // ['Avinash', 'is', 'the', 'best', 'frontend', 'developer.', 'But', 'Abhishek', 'is', 'Awesome']
console.log(str.split(""));  // ['A', 'v', 'i', 'n', 'a', 's', 'h', ' ', 'i', 's', ' ', 't', 'h', 'e', ' ', 'b', 'e', 's', 't', ' ', 'f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.', ' ', 'B', 'u', 't', ' ', 'A', 'b', 'h', 'i', 's', 'h', 'e', 'k', ' ', 'i', 's', ' ', 'A', 'w', 'e', 's', 'o', 'm', 'e']

const subStr = str.split(" "); // ['Avinash', 'is', 'the', 'best', 'frontend', 'developer.', 'But', 'Abhishek', 'is', 'Awesome']
console.log(subStr.join(" ")); // Avinash is the best frontend developer. But Abhishek is Awesome


// startWith endWith
console.log(str.startsWith('Avinash')); //true
console.log(str.endsWith('Avinash'));   //false

// Trim and Case Conversion
// trim      (Removes the leading and trailing white space and line terminator characters from a string. But not of middle)
// trimStart (Removes the leading white space and line terminator characters from a string.)
// trimEnd   (Removes the trailing white space and line terminator characters from a string.)
console.log(str.trim()); 
console.log(str.trimStart());
console.log(str.length);  // 81
triStr = str.trimEnd();
console.log(triStr, triStr.length); //      Avinash is the best frontend developer.        But Abhishek is Awesome 75


// toLowerCase v/s toLocalLowerCase
let str2 = 'İstanbul'; // Turkish character 'İ'
console.log(str2.toLowerCase());           // Output: i̇stanbul
console.log(str2.toLocaleLowerCase('tu')); // Output: istanbul

// Convert "Number" to "String"
const num = 123;
console.log(typeof(num.toString())); // string

// Convert "Object" to "string"
const obj = {
  name: 'Abhishek', 
  course: "DSA"
};

console.log(typeof(obj));         // object
console.log(JSON.stringify(obj)); // '{"name":"Abhishek","course":"DSA"}'
console.log(typeof(JSON.stringify(obj))); // string

// concate two strings
let lastName = ' Kumar';
console.log(firstName.concat(lastName, " is the best.")); // Avinashi Kumar is the best.
console.log(firstName + lastName); 
console.log(`${firstName}${lastName}`)
