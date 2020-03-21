/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  // var t1 = x, t2 = y  
  // if (y > z)  y = 0
  // if (x > z)  x = 0
  // if (x == 0 && y == 0 ) return false
  // // x + y  %  z == 0 || z == x || z == y
  // if (x < y) {
  //   x = t1, y = 0
  // } else {
  //   x = t2, y = 0
  // }
  
  if (x + y < z) return false;
  if (x === 0 || y === 0) return z === 0 || x + y === z;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);             
  return z % gcd(x, y) === 0;

};

console.log(canMeasureWater(3,5,4))