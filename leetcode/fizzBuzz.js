/*
412. Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  // multiples of 3: print "Fizz"
  // multiples of 5: print "Buzz"
  // multiples of both 3 and 5: print "FizzBuzz"
  // otherwise, print stringified number

  var strings = [];

  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strings.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strings.push("Fizz");
    } else if (i % 5 === 0){
      strings.push("Buzz");
    } else {
      strings.push(`${i}`);
    }
  }
  return strings;
    
};

console.log(fizzBuzz(15));