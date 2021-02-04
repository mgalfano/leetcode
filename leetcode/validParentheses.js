// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {

    if (s.length % 2 !== 0) {
        return false;
    }

    var openParens = [];
    for (var i = 0; i <= s.length - 1; i++) {
        var currentChar = s.charAt(i);
        if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
            openParens.push(currentChar);
        } else {
            if (
            (currentChar === ')' && openParens[openParens.length - 1] === '(') || 
            (currentChar === ']' && openParens[openParens.length - 1] === '[') || 
            (currentChar === '}' && openParens[openParens.length - 1] === '{')) {
                openParens.pop();
                
            } else {
                return false;
            }
        }
        
    }

    if (openParens.length > 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true