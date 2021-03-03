// 1.2: Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
  // short circuits if input lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  var characters1 = {};
  var characters2 = {};

  // store str1 chars
  for (var i = 0; i < str1.length; i++) {
    let currentChar = str1.charAt(i);
    if (characters1.hasOwnProperty(currentChar)) {
      characters1[currentChar]++;
    } else {
      characters1[currentChar] = 1;
    }
  }

  // store str2 chars
  for (var j = 0; j < str2.length; j++) {
    let currentChar = str2.charAt(j);
    if (characters2.hasOwnProperty(currentChar)) {
      characters2[currentChar]++;
    } else {
      characters2[currentChar] = 1;
    }
  }

  // compare obj1 and obj2
  for (var char in characters1) {
    if (characters1[char] !== characters2[char]) {
      return false;
    }
  }

  return true;
}

console.log('should be true:', checkPermutation('abc', 'cba')); // true
console.log('should be false:', checkPermutation('a', 'ab')); // false
console.log('should be true:', checkPermutation('', '')); // true
console.log('should be true:', checkPermutation('aaa', 'aaa')); // true

// Note to self: case sensitive