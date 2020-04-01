var maxDepthAfterSplit = function(seq) {
  let dep = 0
  return seq.split('').map(item => item === '(' ? dep++%2 : --dep%2)
}


var seq = "(()())"
var seq ="(((()))((())))" 
var seq ="((()()))"
console.log(maxDepthAfterSplit(seq))