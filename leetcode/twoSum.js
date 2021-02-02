// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        console.log('first:', first, ' |  i:', i);
        for (var j = i+1; j < nums.length; j++) {
            var next = nums[j];
            console.log('next:', next, ' |  j:', j);

            if (first + next === target) {
                return [i, j];
            } 
        }
    }
}

console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([3,2,4], 6)); // [1, 2]
console.log(twoSum([3,3], 6)); // [0, 1]
console.log(twoSum([2,5,5,11], 10)); // [1, 2]