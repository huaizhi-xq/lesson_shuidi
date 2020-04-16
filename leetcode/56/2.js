var merge = function(intervals) {
  if (intervals.length === 0) return []
  let res = []
  intervals.sort((a,b) => a[0]-b[0])
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length-1][1] < intervals[i][0]) {
      res.push(intervals[i])
    } else {
      if (res[res.length-1][1] < intervals[i][1]) {
        res[res.length-1][1] = intervals[i][1]
      }
    }
  }
  return res
}