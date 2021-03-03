/*
1.4: Palindrome Permutation
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

Example:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
*/

// create new empty object to store characters
// iterate through string
// for each non-space char
  // add char to new obj with its occurence

// if length of string is even
  // if all occurrences are even
    // return true

// if length of string is odd
  // if all occurrences except one char
    // return true

// return false

function palindromePermutation(string) {
  var charCounts = {};

  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i).toLowerCase();
    if (currentChar !== ' ') {
      if (!charCounts[currentChar]) {
        charCounts[currentChar] = 1;
      } else {
        charCounts[currentChar]++;
      }
    }
  }

  var oddCount = 0;
  var charOccurrences = Object.values(charCounts);

  for (var j = 0; j < charOccurrences.length; j++) {
    if (charOccurrences[j] % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

console.log('should be true:', palindromePermutation('Tact Coa'));
console.log('should be false:', palindromePermutation('re       move'));
console.log('should be true:', palindromePermutation('h annah'));
console.log('should be false:', palindromePermutation('sHiFt'));