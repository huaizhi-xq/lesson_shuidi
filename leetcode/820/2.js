var minimumLengthEncoding = function (words) {
  let hashSet = new Set(words)
  for (let item of hashSet) {
    for (let i = 1; i < item.length; i++) {
      let target = item.slice(i)
      //删词尾  
      hashSet.has(target) && hashSet.delete(target)
    }
  }
  let result = 0
  hashSet.forEach(item => result += item.length + 1)
  return result
}