// o(n2) -> o(n)
function maxSubArray(nums) {
  let max = -Number.MAX_VALUE;
  var sum = 0;
  for (let num of nums) {
  //   if (sum < 0) { 
  //     sum = 0;
  //  }
  //   sum += num;
    // 加到了什么？ 让从下一个数开始 什么情况发起 之前加的值
    sum = Math.max(0,sum) + num
    max = Math.max(sum,max)
    // max = Math.max(( Math.max(0,sum) + num),max);
    
  }
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));