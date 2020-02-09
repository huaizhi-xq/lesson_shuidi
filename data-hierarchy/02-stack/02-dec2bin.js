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

function dec2bin(value) {
  var stack = new Stack();
  while (value > 0) {
    // 获得余数
    stack.push(value % 2)

    // 结果 向下取整
    value = Math.floor(value / 2)
  }
  // return stack.toString();
  var bin = ''
  while (!stack.isEmpty()) {
    bin += stack.pop();
  }
  return bin;
}

// console.log(Math.floor(101 / 2))
console.log(dec2bin(100))