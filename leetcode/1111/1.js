/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let res = new Array(seq.length).fill(0)
  let dep = 0
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === '(' ) {
      if (dep % 2 !== 0) {
        res[i] = 1
      }
      dep++
    } else {
      dep--
      if (dep % 2 !== 0) {
        res[i] = 1
      }
    }
  } 
  return res
};

var seq = "((()()))"
//var seq = "((()(()((()()))((()()((()(()(()())(()(()))))))))))"
//var seq ="()(())()"
//var seq ="(((()))((())))"    //[0,0,1,1,0,0,1,0,0,1,0,0,1,1]

console.log(maxDepthAfterSplit(seq))
