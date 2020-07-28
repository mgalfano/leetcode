// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3382/

// go to last element, add 1 (recursion start)
// if element is less than 10
  // break
// if element is equal to 10
  // set current element to 0
  // if previous element does not exist
    // insert 1 to front of array
    // break
  // go to previous element, add 1 (recursion enter)
// return array

var plusOne = function(digits) {
  // console.log('start:', digits);
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      break;
    }
    if (digits[i] === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        console.log('end1:', digits);
        return digits;
      }
      // console.log('start recursion:', digits, 'i:', i);
      // console.log('digits.slice:', digits.slice(0, i));
      // console.log('pre', i, digits)
      // plusOne(digits.slice(0, i));ß
      // console.log('post', i, digits)
    }
  }

  console.log('end2:', digits);
  return digits;
};

plusOne([1, 2, 3]); // [1, 2, 4]
plusOne([4, 3, 2, 1]); // [4, 3, 2, 2]
plusOne([0]); // [1]
plusOne([1, 9]); // [2, 0]
plusOne([9, 9]); // [1, 0, 0]
plusOne([3, 2, 9]);