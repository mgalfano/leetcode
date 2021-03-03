/*
1.5: One Away
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

Example:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

// helper function to convert string to object
function strToObj(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)]) {
      obj[str.charAt(i)]++;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

function oneAway(str1, str2) {
  var chars1 = strToObj(str1);
  var chars2 = strToObj(str2);
  var diff = 0;

  // var longerStr = null;
  // if (str1.length > str2.length) {return str1} else if (str2.length > str1.length) {return str2} else {null};

  // NOTE: This doesn't work for all cases, see last test case below. The commented out code above is the start of an attempt to make it work, but I think I should just revisit with a different approach.
  for (var char in chars1) {
    if (chars1[char] !== chars2[char]) {
      diff++;
    }
    if (diff > 1) {
      return false;
    }
  }
  
  return true;
}

console.log('should be true:', oneAway('pale', 'ple'));
console.log('should be false:', oneAway('pale', 'bake'));
console.log('should be true:', oneAway('pales', 'pale'));
console.log('should be true:', oneAway('pale', 'bale'));
console.log('should be false:', oneAway('ppppp', 'pppppip'));
// console.log('', oneAway('', ''));