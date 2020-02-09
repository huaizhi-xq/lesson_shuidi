function Stack() {
  this.items = []

  Stack.prototype.push = function(item) {
    this.items.push(item)
  }
  
  Stack.prototype.pop = function() {
    return this.items.pop()
  }

  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }

  Stack.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  Stack.prototype.size = function() {
    return this.items.length
  }

  Stack.prototype.toString = function() {
    return this.items.join(' ')
    // return this.items.toString(' ')
  }
}
var s = new Stack();

s.push(20)
s.push(15)
s.push(10)


// console.log(s.peek())
// console.log(s.pop())
console.log(s.toString())