// https://leetcode.com/problems/distribute-candies/

var distributeCandies = function(candyType) {
    var uniqueCandies = new Set();
    var maxCandies = candyType.length / 2;

    for (var i = 0; i <= candyType.length - 1; i++) {
        if (!uniqueCandies.has(candyType[i])) {
            uniqueCandies.add(candyType[i]);
        }
        
        if (uniqueCandies.size === maxCandies) {
            break;
        }
    }

    return uniqueCandies.size;
}

console.log(distributeCandies([1,1,2,2,3,3])); // 3
console.log(distributeCandies([1,1,2,3])); // 2
console.log(distributeCandies([6,6,6,6])); // 1
console.log(distributeCandies([0,0,0,4])); // 2