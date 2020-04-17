/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let leftPos = nums.length - 1  
  let leftPoint = leftPos
  for (let left = leftPoint; left >= 0; left--) {
    if (nums[left] + left >= leftPos) {     
      leftPos = left
    } 
  }
  return leftPos === 0
};


console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
