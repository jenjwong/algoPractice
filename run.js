

(function() {
  'use strict';
  // const _ = require('lodash');

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





}());


















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