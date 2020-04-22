var getMaxRepetitions = function(s1, n1, s2, n2) {
  let j = 0
  let num = 0
  let temp = 0
  do {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[j]) {
        j++
      }
      if (j >= s2.length) {
        j = 0
        num++
      }
    }
    temp++   
  } while(j !== 0 && temp < n1)   
  if ( j !== 0  && temp === n1) {  //遍历完整 num/n2
    return Math.floor(num / n2)
  }  
  // n2/num  放大倍数 * temp s1经历了几轮
  return Math.floor(n1 / (n2 / num * temp))
}

