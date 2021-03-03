// 1.1: isUnique
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

var isUnique = function(string) {
    string = string.split('').sort().join('');
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i+1) && string.charAt(i) === string.charAt(i+1)) {
            return false;
        }
    }
    return true;
}

console.log(isUnique('zab12')); // true
console.log(isUnique('bz157amz')); // false
console.log(isUnique('82fh._-=!64$!')); // false