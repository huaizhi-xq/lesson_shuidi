var trap = function(height) {
  if (height.length < 3) return 0
  let count = 0,
    left = 0,
    right = height.length - 1
    leftMax = 0,
    rightMax = 0
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        count += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        count += rightMax - height[right]
      }
      right--
    }
  }
  return count
}

var height = [0,1,0,3,1,0,1,2,2,1,2,1]
// var height = [4,2,3]
console.log(trap(height))