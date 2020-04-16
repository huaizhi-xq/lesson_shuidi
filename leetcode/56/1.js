/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return []
  let res = []
  intervals.sort((a,b) => a[0]-b[0])
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    let temp = res.pop()
    // console.log(temp)
    if (temp[1] < intervals[i][0]) {
      res.push(temp)
      res.push(intervals[i])
    } else {
      res.push([Math.min(temp[0],intervals[i][0]),Math.max(temp[1], intervals[i][1])])
    }
  }
  return res
};

var intervals =  [[1,3],[2,6],[8,10],[15,18]]
// var intervals =  [[1,4],[4,5]]
// var intervals =  [[1,4],[0,4]]
// var intervals =  [[1,4],[0,3]]
// var intervals =  [[1,4],[0,0]]
// var intervals =  [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log(merge(intervals))