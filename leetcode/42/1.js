/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0
  let l = 0, r = 1
  while (r < height.length) {
    if (height[r] >= height[l]) {
      l++
      r++
    } else {
      let t = r
      while (height[r] < height[l]) {
        r++
        // console.log(height[l], height[r])
      }
      // console.log(r)
      if (r >= height.length) {
        l = t
        r = t+1
        console.log(l,r)
        continue
      }
      let temp = height[l] < height[r] ? height[l] : height[r]
      // console.log(temp)
      for (var i = l+1; i < r; i++) {
        res += temp - height[i]
      }
      // console.log(res)
      l = r
      r++
    }
  }
  return res
};

var height = [0,1,0,3,1,0,1,2,2,1,2,1]
// var height = [4,2,3]
console.log(trap(height))