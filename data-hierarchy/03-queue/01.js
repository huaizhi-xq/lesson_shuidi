function Queue() {
  this.items = []

  Queue.prototype.enqueue = function(item) {
    this.items.push(item);
  }

  Queue.prototype.dequeue = function() {
    // 用数组性能不高
    return this.items.shift();
  }

  Queue.prototype.front = function() {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  Queue.prototype.size = function() {
    return this.items.length
  }

  Queue.prototype.toString = function() {
    return this.items.join(' ')
  }

}

var queue = new Queue();

queue.enqueue('aaa')
queue.enqueue('bbb')
queue.enqueue('ccc')

queue.dequeue()

console.log(queue.front())

console.log(queue.size())
console.log(queue.toString())