// https://leetcode.com/problems/valid-anagram/

/*

I: two strings: s, t
O: boolean - true if t is anagram of s, false if t is NOT anagram of s
C: maybe nlogn?
E: all same characters
   empty string
*/

var isAnagram = function(s, t) {
    var sChars = new Map();
    var tChars = new Map();
    for (var char of s) {
        console.log(char);
        console.log(sChars.has(char));
        if (sChars.has(char)) {
            sChars.char++;
        } else {
            sChars.char = 1;
        }
    }
    for (var char of t) {
        console.log(tChars.has(char));
        if (tChars.has(char)) {
            tChars.char++;
        } else {
            tChars.char = 1;
        }
    }
    for (var char in sChars) {
        
        if (tChars[char] === sChars[char]) {
            tChars.delete(char);
            console.log(tChars, tChars[char], '   ' , sChars, sChars[char]);
        } else {
            return false;
        }
    }
    if (tChars.size > 0) {
        return false;
    } else {
        return true;
    }
};

// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false
// console.log(isAnagram('aaaa', 'aaaa')); // true
console.log(isAnagram('aaaa', 'aaa')); // false