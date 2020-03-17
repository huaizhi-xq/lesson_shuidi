/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

  for (let item of words) {
    for (let i = 0; i < chars.length; i++) {
      let index = item.search(chars[i])
      if (index === -1) {
        break
      } else {
        let t = item[index]
        item.replace(t, '0'), 
        console.log(t)
      }
    }
    console.log(item)
  }
};


var words = ["cat","bt","hat","tree"], chars = "atach"

countCharacters(words,chars)


