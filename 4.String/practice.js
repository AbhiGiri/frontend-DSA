//// [1]. Find the Index of the First Occurrence in a String
// function findIndexOfFirstOccurrence(haystack, needle) {
//   return haystack.indexOf(needle);
// };

// console.log(findIndexOfFirstOccurrence('Hello World', 'World')); // 6
// console.log(findIndexOfFirstOccurrence('Hello World', 'o'));     // 4
// console.log(findIndexOfFirstOccurrence('Hello World', ''));      // 0
// console.log(findIndexOfFirstOccurrence('Hello World', 'xyz'));   // -1 (not present)
// console.log(findIndexOfFirstOccurrence('sadbutsad', 'sad'));     // 0 (present at 0th index)


//// [2]. Reverse String
// function reverseStr(str) {
//  return str.split('').reverse().join('')
// }

// console.log(reverseStr('khaini'));
// console.log(reverseStr('h', 'e', 'l', 'l', 'o'));


///////////////////////////
// console.log(this);
// const user = {
//   name: 'Ab',
//   arrFun: () => {
//     console.log(this)
//   }
// };
// user.arrFun();

const user = {
  name: 'Ab',

//// this will refer to user object; i.e 'Ab'
  normalFun: function(){
    console.log(this.name); 
  },

//// this will refer to window object; i.e undefined
  arrFun: () => {
    console.log(this.name); 
  },

//// this will refer to user object; i.e 'Ab'  
  nestestFun1: function() {
    const arrFun1 = () => {
      console.log(this.name)
    }
    arrFun1();
  },

//// this will refer to window object; i.e undefined
  nestestFun2: () => {
    const arrFun2 = () => {
      console.log(this.name)
    }
    arrFun2();
  },

//// this will refer to window object; i.e undefinde
  nestestFun3: function(){
    const arrFun3 = function() {
      console.log(this.name)
    }
    arrFun3();
  },

//// this will refer to window object; i.e undefinde
  nestestFun4: () => {
    const arrFun4 = function() {
      console.log(this.name)
    }
    arrFun4()
  }
};

// user.normalFun();
// user.arrFun();
// user.nestestFun();
// user.nestestFun1();
// user.nestestFun2();
// user.nestestFun3();
// user.nestestFun4();

// "use strict";
var name = 'aaa'
function myFunction() {
  return console.log(this.name); // undefined // otherwise window
}
myFunction();

console.log(this.name)