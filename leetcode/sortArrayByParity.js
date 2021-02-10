// https://leetcode.com/problems/sort-array-by-parity/

// given: Array A - non-negative integers (incl 0? yes)
// return: Array - all even elements of A, then all odd elements of A
// A.length at least 1

var sortArrayByParity = function(A) {
    var even = [];
    var odd = [];

    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }

    return even.concat(odd);
};

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]