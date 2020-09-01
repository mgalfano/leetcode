/*
1.6: String Compression
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

function stringCompression(string) {
  if (string.length === 0) {
    return string;
  }

  var newStr = '';
  var charCount = 0;

  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    charCount++;

    if (string.charAt(i+1) !== currentChar) {
      newStr += currentChar + charCount;
      charCount = 0;
    }
  }
  
  if (string.length >= newStr.length) {
    return newStr;
  } else {
    return string;
  }
}

console.log(stringCompression('aabcccccaaa'), 'should be: a2b1c5a3');
console.log(stringCompression('aaaaggHhRRRRRRRRll'), 'should be: a4g2H1h1R8l2');
console.log(stringCompression('abcde'), 'should be: abcde');