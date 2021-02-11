// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

//////////////////

var twoSumMap = function(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], i); // key is number, value is index
    }

    for (var j = 0; j < nums.length; j++) {
        var complement = target - nums[j];
        if (map.has(complement) && map.get(complement) !== j) {
            return [j, map.get(complement)];
        }
    }
}

console.log(twoSumMap([2,7,11,15], 9)); // [0, 1]
console.log(twoSumMap([3, 2, 4], 6)); // [1, 2]
console.log(twoSumMap([3, 3], 6)); // [0, 1]