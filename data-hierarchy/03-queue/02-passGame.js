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

function passGame(nameList, num) {
  let queue = new Queue();
  nameList.forEach(item => queue.enqueue(item))
  // 开始数数 不是num加入末尾 是num删除
  while (queue.size() !== 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // num对应这个人 删除
    queue.dequeue();
  }

  return nameList.indexOf(queue.front());
}

var nameList = ['a','b','c','d','e']

console.log(nameList[passGame(nameList,3)])