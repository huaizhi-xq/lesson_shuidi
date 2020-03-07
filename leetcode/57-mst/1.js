/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  var res = []
  if (target == 1) return res
  
  var mid = Math.ceil(target/2)
  for (let i = 1; i < mid; i++) {
    let sum = 0;
    let temp = i;
    while (sum < target) {
      sum += temp++;
    }
    if (sum == target) {
      var arr = []
      for (let index = i; index < temp; index++) {
        arr.push(index)
      }
      res.push(arr)
    }
  }
  
  return res

};


console.log(findContinuousSequence(15))