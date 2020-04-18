/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length
  let max = 0
  let left = 0
  for (let i = 1; i < len; i++) {
    
    let temp = Math.min(height[i],height[left])*(i-left)
   
    max = Math.max(max,temp)
    if (height[i] > height[left]) {
      left = i
      
    }
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,2,1]))