// 1.1: Is Unique - pg 192
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// Hints: #44, #117, #132

function isUnique(string) {
  if (string.length === 0) {
    console.log('undefined');
    return undefined;
  }

  var uniqueChars = [];
  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    if (uniqueChars.includes(currentChar)) {
      console.log('false');
      return false;
    } else {
      uniqueChars.push(currentChar);
    }
  }
  console.log('true');
  return true;
}

isUnique('');
isUnique('abc');
isUnique('abcB');
isUnique('a bc');