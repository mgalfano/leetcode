// 1.4: Pallindrome Permutation

var pallindromePermutation = function(string) {
    string = string.toLowerCase();
    let chars = {};
    let numOfChars = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === ' ') { continue; } // only checking for spaces, but need to check for special characters as well
        chars[string.charAt(i)] ? chars[string.charAt(i)]++ : chars[string.charAt(i)] = 1;
        numOfChars++;
    }

    let numOfOdds = 0;
    for (var char in chars) {
        if (chars[char] % 2 === 1) {
            numOfOdds++;
        }
    }

    if ((numOfChars % 2 === 0 && numOfOdds === 0) || (numOfChars % 2 === 1 && numOfOdds === 1)) {
        return true;
    } else {
        return false;
    }
};

console.log(pallindromePermutation('Tact Coa')); // true
console.log(pallindromePermutation('Michelle')); // false
console.log(pallindromePermutation('mm')); // true
console.log(pallindromePermutation('Mm')); // true
console.log(pallindromePermutation('M m m ')); // true