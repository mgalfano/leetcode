// 1.6: String Compression

var stringCompression = function(string) {
    if (string.length <= 0) { return string; }

    let curChar = string.charAt(0);
    let curCount = 0;
    let compressed = '';

    for (let i = 0; i <= string.length; i++) {
        if (string.charAt(i) === curChar) {
            curCount++;
        } else {
            // console.log('i:', i, ' |   string[i]:', string.charAt(i), ' |   curChar:', curChar, ' |   curCount:', curCount);
            compressed += curChar + curCount.toString();
            curChar = string.charAt(i);
            curCount = 1;
            if (compressed.length >= string.length) {
                return string;
            }
        }
    }

    if (compressed.length >= string.length) {
        return string;
    } else {
        return compressed;
    }
};

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
console.log(stringCompression('abc')); // abc