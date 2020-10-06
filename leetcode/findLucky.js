/*
1394. Find Lucky Integer in an Array

https://leetcode.com/problems/find-lucky-integer-in-an-array/
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  var obj = {};
  var luckyNum = -1;

  for (var item of arr) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  for (var key in obj) {
    if (obj[key] === parseInt(key) && parseInt(key) > luckyNum) {
      luckyNum = parseInt(key);
    }
  }

  return luckyNum;
    
};

console.log(findLucky([2,2,3,4])); // 2
console.log(findLucky([1,2,2,3,3,3])); // 3
console.log(findLucky([2,2,2,3,3])); // -1
console.log(findLucky([5])); // -1
console.log(findLucky([7,7,7,7,7,7,7])); // 7