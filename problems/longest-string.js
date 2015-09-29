'use strict';

function longestString(arr) {
  var longest;
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string') {
      if(longest == null) {
        longest = arr[i];
      } else if (longest.length < arr[i].length) {
        longest = arr[i];
      }
    }
  }
  return longest;
}

module.exports = longestString;
