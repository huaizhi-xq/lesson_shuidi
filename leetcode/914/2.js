var hasGroupsSizeX = function(deck) {
  const gcd = (a, b) => b==0 ? a : gcd(b, a%b)
  let obj = {}
  for (let i of deck) {  //统计牌
    obj[i] = !obj[i] ? 1 : ++obj[i]
  }
  // console.log(obj)
  let arr = Object.values(obj)
  // console.log(arr)
  let res = arr[0]
  return arr.every(i => (res = gcd(res, i)) > 1)
}

var deck = [1,2,3,4,4,3,2,1]
var deck = [1,1,2,2,2,2]
console.log(hasGroupsSizeX(deck))