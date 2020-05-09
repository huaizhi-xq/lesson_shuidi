/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // return parseInt(Math.sqrt(x));

  // let re = 0
  // while (!(re*re<=x&&(re+1)*(re+1)>x)) {
  //   re++
  // }
  // return re

  if (x===0) return 0
  let re = 1
  while (!(re*re<=x&&(re+1)*(re+1)>x)) {
    // f(re) = re^2 - x  f`re = 2 * re
    re = parseInt(re-(re*re-x)/(2*re))
  }
  return re
};  

console.log(mySqrt(4))
console.log(mySqrt(8))