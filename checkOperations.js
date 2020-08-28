/**
 * You are given three arrays of integers a, b, and c, and an array of characters signs consisting of '+' and '-' signs. All of those arrays have the same length.
 * Your task is to return a boolean array output of the same length, where output[i] === true if the result of applying signs[i] to a[i] and b[i] is equal to c[i], and false otherwise.
 * In other words, for each index i, check if a[i] signs[i] b[i] = c[i]. ????????????
 * 
 * Example:
 *    For a = [3, 2, -1, 4], signs = ['+', '-', '-', '+'], b = [2, 7, -5, 2], and c = [5, 5, 4, 2], the output should be [true, false, true, false]
 */

function checkOperations(a, signs, b, c) {
  // create new empty array
  var result = [];
  // for each element in the given arrays (all have same length)
  for (var i = 0; i < a.length; i++) {
    // if a +/i b is equal to c, add true to newArray (do some manipulations to get sign)
    if (signs[i] === '+') {
      var calculated = a[i] + b[i];
    }
    else if (signs[i] === '-') {
      var calculated = a[i] - b[i];
    }
    result.push(calculated === c[i]);
  }
  return result;
}

a = [3, 2, -1, 4];
signs = ['+', '-', '-', '+'];
b = [2, 7, -5, 2];
c = [5, 5, 4, 2];

console.log(checkOperations(a, signs, b, c));