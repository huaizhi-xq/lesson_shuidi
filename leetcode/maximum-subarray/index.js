function maxSubarray(nums) {
  var len = nums.length;
  let thissum,maxsum = -Number.MAX_VALUE;
  for (let i = 0; i < len; i++) {
    thissum = 0;
    for (let j = i; j < len; j++) {
      //每一趟的和是thsisum
      //最大值更替
      thissum += nums[j];
      if (thissum > maxsum ) {
        maxsum = thissum;
      }
      // thissum = 0;
      //   for (let k = i; k <= j; k++) {
      //     // 最大子和的数
      //     thissum += nums[k];
      //   }
      //   if (thissum > maxsum ) {
      //        maxsum = thissum;
      //     }
    }
  }
  return maxsum;
}
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));