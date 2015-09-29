'use strict';

function arraySum(arr) {
  if(arr != []) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
      if(typeof arr[i] === 'object') {
        arr.push.apply(arr,arr[i]);
        arr.splice(i,1);
        i = i - 1;
      }
    }
    arr.forEach(function(value){
      total += value;
    });
  }
  return total;  
};

module.exports = arraySum;
