var findContinuousSequence = function(target) {
  let l = 1
  let r = 1
  let sum = 0
  let res = []
  while(l < Math.ceil(target/2)) {
    if (sum == target) {
      // let temp = []
      // for (let i = l; i < r; i++) {
      //   temp.push(i)
      // }
      let temp = Array.from({length: (r-l)}, (item,index) => index + l)
      res.push(temp)
      sum -= l
      l++
    } else if (sum > target) {
      sum -= l
      l++
    } else if (sum < target) {
      sum += r
      r++
    }
  }
  return res
}

console.log(findContinuousSequence(15))