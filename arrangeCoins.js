// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3377/

var arrangeCoins = function(n) {  
  if (n === 0) {
    console.log(0);
    return 0;
  }

  var remainingCoins = n.valueOf();

  for (var i = 1; i <= n; i++) {
    remainingCoins = remainingCoins - i;
    if (remainingCoins > 0) {
      // console.log('n:', n, 'i:', i, 'continued...');
      continue;
    } else if (remainingCoins < 0) {
      // console.log('n:', n, 'i:', i, 'should return i - 1:', i - 1);
      console.log(i - 1);
      return i - 1;
    } else if (remainingCoins === 0) {
      // console.log('n:', n, 'i:', i, 'should return i:', i);
      console.log(i);
      return i;
    } 
  }
};

arrangeCoins(0); // return 0
arrangeCoins(1); // return 1
arrangeCoins(5); // return 2
arrangeCoins(8); // return 3