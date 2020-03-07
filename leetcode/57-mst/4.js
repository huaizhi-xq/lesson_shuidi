// 等差公式

var findContinuousSequence = function(target) {
  let numArr = []
  if (target ==1 || target == 2) return []
  for (let i = 1; i < Math.ceil(target/2); i++) {
    // (i+ j)*( j - i +1) = 2* target
    //  j = Math.sqrt(i^2 - i + 2*target + 1/4) -1/2
    const end = Math.sqrt(i*i - i + 2*target + 1/4) - 1/2
    if (parseInt(end) === end) {
      const num = Array.from({length: (end-i+1)}, (item,index) => index + i)
      numArr.push(num)
    }
  }
  return numArr
}

console.log(findContinuousSequence(15))