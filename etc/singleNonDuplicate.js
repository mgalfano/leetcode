// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.
// Note: Your solution should run in O(log n) time and O(1) space.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10

// input: sorted array of integers - every elem appears twice, EXCEPT one elem that appears once
// output: single occurring element


var singleNonDuplicate = function(nums) {

  var currentElem = null;

  for (var elem of nums) {
    if (elem === currentElem) {
      currentElem = null;
    } else if (currentElem === null) {
      currentElem = elem;
    } else if (currentElem != null) {
      console.log(currentElem);
      return currentElem;
    }
  }
};

// singleNonDuplicate([1,1,2,3,3,4,4,8,8]);
// singleNonDuplicate([3,3,7,7,10,11,11]);
singleNonDuplicate([1]);