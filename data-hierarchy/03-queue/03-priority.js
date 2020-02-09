function PriorityQueue() {
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.items = []

  PriorityQueue.prototype.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    // 判断是否为空
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      // if (this.items.some(item => priority < item.priority)) {
        
      // }
      // var temp = false
      for (var i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          // temp = true;
          break;
        }
      }
      // console.log(i)
      if (i === this.items.length) this.items.push(queueElement)
    }
  }

  
  PriorityQueue.prototype.dequeue = function() {
    // 用数组性能不高
    return this.items.shift();
  }

  PriorityQueue.prototype.front = function() {
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty = function() {
    return this.items.length === 0
  }

  PriorityQueue.prototype.size = function() {
    return this.items.length
  }

  PriorityQueue.prototype.toString = function() {
    return this.items.join(' ')
  }
}

var pq = new PriorityQueue();

pq.enqueue('aa', 111)
pq.enqueue('cc', 333)
pq.enqueue('bb', 222)
pq.enqueue('dd', 1)

console.log(pq)