var merge = function(A, m, B, n) {
  // A.splice(m, A.length - m);
  console.log(A)
  A.splice(m, 0, ...B)
  console.log(A)
  A.sort((a,b) => a-b)
  return A
}

var A = [1,2,3,0,0,0]
var B = [2,4,6]

console.log(merge(A,3,B,3))