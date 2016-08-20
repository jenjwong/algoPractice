


  'use strict';
  const _ = require('lodash');

  exports.isPallindrom = string => {
    let stringIsPallindrom = true;

    for (let i = 0; i < Math.floor(string.length/2); i++) {
    let a = string[i];
    let b = string[string.length - i -1]
       if (a !== b) {
        stringIsPallindrom = false;
      } 
    }
    return stringIsPallindrom;
  };

  exports.isAnagram = (string1, string2) => {
    let string1Caps = string1.toUpperCase();
    let string2Caps = string2.toUpperCase()

    var countLetters = function(tally, letter) {
      tally[letter] ? tally[letter] = tally[letter] + 1 : tally[letter] = 1 
      return tally;
    };

    var stringCount1 = string1Caps.split('').reduce(countLetters, {});
    var stringCount2 = string2Caps.split('').reduce(countLetters, {});


    let count1 = 0;
    let count2 = 0;
    for (var key in stringCount1) {
      count1 ++;
      if (stringCount2[key] !== stringCount1[key]) {
        return false;
      }
    }
    for (var key in  stringCount2) {
      count2++;
    }
    if (count1 !== count2) {
      return false;
    }
    return true;
  };










  // let stringIsPallindrom = true;
  // _.forEach(string, (letter, index, collection) => {


  //   console.log(Math.floor(string.length/2))
  //   if (string[index] !== string[string.length - index + 1]) {
  //     stringIsPallindrom = false;
  //   } 
  //   if (string.length % 2 !==0 && index === Math.floor(string.length/2)) {
  //     stringIsPallindrom = true;
  //   }
  // });
  // return stringIsPallindrom;