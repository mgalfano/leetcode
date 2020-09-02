/**
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:
  Input: [1,2,3,4]
  Output: "23:41"

Example 2:
  Input: [5,5,5,5]
  Output: ""
 
Note:
  A.length == 4
  0 <= A[i] <= 9
 */

 /**
 * @param {number[]} A
 * @return {string}
 */

var largestTimeFromDigits = function(A) {
  // create empty array to store new time
  // loop 1: find 2 from given array, backwards until 0
  // loop 2: find 3 from given array, backwards until 0
  // loop 3: find 5 from given array, backwards until 0
  // loop 4: find 9 from given array, backwards until 0
  // when valid number is found, delete from given array and add to new array
  // if given array is empty, return new time
  // if given array is NOT empty, return empty string


  // TODO: Fails if HH is less than 20.x
  var newTime = [];
  for (let a = 2; a >= 0; a--) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === a) {
        newTime.push(A.splice(i, 1));
        a = -1;
        break;
      }
    }
  }
  for (let b = 3; b >= 0; b--) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === b) {
        newTime.push(A.splice(i, 1));
        b = -1;
        break;
      }
    }
  }
  for (let c = 5; c >= 0; c--) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === c) {
        newTime.push(A.splice(i, 1));
        c = -1;
        break;
      }
    }
  }
  for (let d = 9; d >= 0; d--) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === d) {
        newTime.push(A.splice(i, 1));
        d = -1;
        break;
      }
    }
  }
  if (A.length > 0) {
    return "";
  } else {
    return `${newTime[0]}${newTime[1]}:${newTime[2]}${newTime[3]}`;
  }
};

console.log(largestTimeFromDigits([1, 2, 3, 4])); // 23:41
console.log(largestTimeFromDigits([5, 5, 5, 5])); // ""
console.log(largestTimeFromDigits([0, 9, 0, 9])); // ""