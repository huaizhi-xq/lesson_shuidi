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

  // 并集
  Set.prototype.union = function(otherSet) {
    var unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));

    otherSet.values().forEach(value => unionSet.add(value));
    
    return unionSet;
  }

  // 交集
  Set.prototype.intersection =function(otherSet) {
    var intersection = new Set();
    this.values().forEach(value1 => {   
      if (otherSet.has(value1)) {
        intersection.add(value1);
      } 
    })
    return intersection;
  }

  // 差集
  Set.prototype.difference = function(otherSet) {
    var difference = new Set();
    this.values().forEach(value1 => {   
      if (!otherSet.has(value1)) {
        difference.add(value1);
      } 
    })
    return difference;
  }

  // 子集
  Set.prototype.subset = function(otherSet) {
    // return this.values().every(value => otherSet.has(value))
    return !this.values().some(value => !otherSet.has(value))
  }
}

var set1 = new Set();
set1.add('a')
set1.add('b')
// set1.add('c')
var set2 = new Set();
set2.add('a')
set2.add('b')
set2.add('d')

// console.log(set1.union(set2))
// console.log(set1.intersection(set2))
// console.log(set1.difference(set2))
console.log(set1.subset(set2))