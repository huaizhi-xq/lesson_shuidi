var myPow = function(x, n) {
  if (n > 0) {
    return quickMul(x, n)
  } 
  return 1.0 / quickMul(x, -n)
}


function quickMul(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
   let res = quickMul(x, Math.floor(n/2))
  if (n % 2 === 0) {
    return res * res
  } 
  return res*res*x
}