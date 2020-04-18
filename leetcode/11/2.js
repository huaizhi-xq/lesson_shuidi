var maxArea = function(height) {
  let len = height.length
  let left = 0
  let right = len-1
  let temp,max = 0
  while (right - left >= 1) {
    if (height[left] > height[right]) {
      temp = height[right]*(right-left)
      right--
    } else {
      temp = height[left]*(right-left)
      left++
    }
    max = Math.max(max,temp)
  }
  return max
}