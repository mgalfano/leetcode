// 1.3: URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// example:
// input: "Mr John Smith    ", 13
// output: "Mr%20John%20Smith"

var urlify = function(str) {
    let arr = str.trim().split(' ');
    let newString = '';

    for (var i = 0; i <= arr.length - 2; i++) {
        newString += arr[i] + '%20';
    }
    newString += arr[arr.length - 1];

    return newString;
}

console.log(urlify('Mr John Smith    '));