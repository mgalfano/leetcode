// 1.2: checkPermutation
// Given two strings, write a method to decide if one is a permutation of the other.

var checkPermutation = function(str1, str2) {
    // edge case - check lengths
    if (str1.length !== str2.length) {
        return false;
    }

    // create objects for both strings
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        // obj1.has(str1.charAt(i)) ? obj1[str1.charAt(i)]++ : obj1.set(str1.charAt(i), 1);
        // obj2.has(str2.charAt(i)) ? obj2[str2.charAt(i)]++ : obj2.set(str2.charAt(i), 1);
        obj1[str1.charAt(i)] ? obj1[str1.charAt(i)]++ : obj1[str1.charAt(i)] = 1;
        obj2[str2.charAt(i)] ? obj2[str2.charAt(i)]++ : obj2[str2.charAt(i)] = 1;
    }

    for (let key in obj1) {
        if (obj2[key] !== obj1[key]) {
            return false;
        } else {
            delete obj2[key];
            delete obj1[key];
        }
    }

    if (Object.keys(obj1).length > 0 || Object.keys(obj2).length > 0) {
        return false;
    } else {
        return true;
    }
}

console.log(checkPermutation('leetcode', 'idocteel')); // true