// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'I') {
            if (s.charAt(i+1) === 'V') { total += 4; i++; console.log('uhh hello?');}
            if (s.charAt(i+1) === 'X') { total += 9; }
        }
        if (s.charAt(i) === 'X') {
            if (s.charAt(i+1) === 'L') { total += 40; }
            if (s.charAt(i+1) === 'C') { total += 90; i++}
        }
        if (s.charAt(i) === 'C') {
            if (s.charAt(i+1) === 'D') { total += 400; }
            if (s.charAt(i+1) === 'M') { total += 900; i++}
        } else {
            total += obj[s.charAt(i)];
        } 

        console.log('i:', i, '  |   total:', total, '   |   currentChar:', s.charAt(i));
    }

    return total;
}

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('IV')); // 4
// console.log(romanToInt('IX')); // 9
// console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994