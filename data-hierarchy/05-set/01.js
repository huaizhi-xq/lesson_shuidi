// 封装集合类
function Set() {
  // 属性
  this.items = {}

  // 方法
  Set.prototype.add = function(value) {
    // 判断是否有
    if (this.has(value))  return false

    this.items[value] = value
    return true
  }

  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.remove = function(value) {
    if (!this.has(value)) return false

    delete this.items[value]
    return true
  }

  Set.prototype.clear = function() {
    this.items = {}
  }

  Set.prototype.size = function() {
    return Object.keys(this.items).length
  }

  Set.prototype.values = function() {
    return Object.keys(this.items)
  }
}

var set = new Set();

set.add('a')
set.add('a')
set.add('c')
set.add('b')
set.add('d')

set.remove('a')

set.clear();

console.log(set.values())

console.log(set.size())