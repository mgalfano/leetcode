// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        if (result.length === 0) {
            result.push(nums[i]);
        } else {
            result.push(result[i-1] + nums[i]);
        }
    }

    return result;
}

console.log(runningSum([1,2,3,4])); // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]

// time complexity: O(n)
// space complexity: O(n)

// FOR O(1) SPACE:

// var runningSum = function(nums) {
//     let sum = 0;
//     for (let i in nums) {
//         sum += nums[i];
//         nums[i] = sum;
//     }
//     return nums;
// }