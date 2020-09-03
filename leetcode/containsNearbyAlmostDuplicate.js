/*
Contains Duplicate III

Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:
  Input: nums = [1,2,3,1], k = 3, t = 0
  Output: true

Example 2:
  Input: nums = [1,0,1,1], k = 1, t = 2
  Output: true

Example 3:
  Input: nums = [1,5,9,1,5,9], k = 2, t = 3
  Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  // for each element in num (num[i])
    // for each element after i until k (num[j])
      // if absolute difference between num[i] and num[j] is less than or equal to t
        // return true
  // return false (no duplicates were found)
    
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j <= i+k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2)); // true
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)); // false