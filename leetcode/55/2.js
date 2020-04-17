var canJump = function(nums) {
  let canNum = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > canNum) {
      return false
    }
    canNum = (i+nums[i]) > canNum ? (i+nums[i]) : canNum
    if (canNum >= len - 1) {
      return true
    }
  }
}

// var canJump = function(nums) {
//   var canJumpMax = 0;
//   var len = nums.length;
//   for(var i = 0;i<len;i++){
//       if(i > canJumpMax){
//        return false;   
//       }
//       canJumpMax = Math.max(canJumpMax,i+nums[i]);
//   }
//   return true;
// };

