// given non-neg int "num" represented as a string
// remove k digits from the number so that the new number is the smallest possible
// note: length of num is < 10002 && >= k
// note: given num does not contain leading zeroes.

// ex1:
// input: num = '1432219', k = 3
// output: '1219'

// ex2: 
// input: num = '10200', k = 1
// output: '200'

// ex3:
// input: num = '10', k = 2
// output: '0'

// question: what is "smallest"? -- smallest possible number
// question: do the digits need to be consecutive? -- no

// strategy: remove largest numbers from the left

var removeKdigits = function(num, k) {
  if (num.length === k) {
    console.log('0');
    return '0';
  }

  // start with the lastN characters in num
  // var lastN = num.slice((num.length - 1) - k);
  var lastN = num.slice(k);

  // iterate backwards (right to left) starting from immediately left of lastN
  for (var i = lastN.length - 2; i >= 0; i--) {
    var tempString = num.charAt(i) + lastN.slice(1);
    if (parseInt(lastN) <= parseInt(tempString)) {
      continue;
    } else {
      lastN = tempString.slice(0);
    }
  }

  // unary operator to remove leading zeroes, then convert back to string
  console.log((+lastN).toString());
  return (+lastN).toString();
};

removeKdigits('1432219', 3);
removeKdigits('10200', 1);
removeKdigits('1505', 4);
removeKdigits('1132219', 3); // 1119