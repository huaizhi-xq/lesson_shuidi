var findContinuousSequence = function(target) {
  let numberArr = []
  if (target === 1) return []
  if (target === 2) return []
  for (let i = 1; i < Math.ceil(target/2) ; i++) {
    const end = (-1 + Math.sqrt((1 + 4 * (i * i - i + 2 * target)))) / 2     //求最后一项
    if (parseInt(end) === end) {  //符合
      const number = Array.from({length: (end - i + 1)}, (item, index) => (index + i))
      numberArr.push(number)
    }
  }
  return numberArr


}


console.log(findContinuousSequence(15))