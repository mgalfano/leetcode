// Given a string 's' consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
  var chars = {};
  
  // store characters in obj, with occurences and index of first occurence
  for (var i = 0; i < s.length; i++) {
    let currentChar = s.charAt(i);
    
    if (!chars[currentChar]) {
      chars[currentChar] = {qty: 1, idx: i};
    } else {
      chars[currentChar]['qty']++;
    }
  }

  // delete duplicates from obj
  for (let prop in chars) {
    if (chars[prop].qty > 1) {
      delete chars[prop];
    }
  }

  // if obj is empty, return '_'
  if (Object.keys(chars).length === 0) {
    return '_';
  }

  // compare single chars, return char with smallest index
  var smallestIndex = -1;
  var smallestChar = '';
  for (let prop in chars) {
    if (smallestIndex === -1) {
      smallestIndex = chars[prop].qty;
      smallestChar = prop;
    } else if (chars[prop].qty < smallestIndex) {
      smallestIndex = chars[prop].qty;
      smallestChar = prop;
    }
  }
  return smallestChar;
  
};

console.log('should return z:', firstNotRepeatingCharacter('abacaabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadbadz'));
console.log('should return...?', firstNotRepeatingCharacter(''));
console.log('should return _:', firstNotRepeatingCharacter('abacabaabacaba'));