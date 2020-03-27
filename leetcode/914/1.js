/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const len = deck.length
  if (len < 2) return false
  deck.sort((a,b) => a - b)
  let X = 2
  while (X >= 2 && X <= len/2) {
    
  }
  
};


var deck = [1,2,3,4,4,3,2,1]
console.log(hasGroupsSizeX(deck))