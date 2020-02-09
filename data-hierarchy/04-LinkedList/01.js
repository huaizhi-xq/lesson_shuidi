// 封装单向链表
function LinkedList() {

  // 内部节点类
  function Node(data) {
    this.data = data;
    this.next = null
  }

  this.head = null;
  this.length = 0;

  LinkedList.prototype.append = function(data) {
    var newNode = new Node(data)
    // 是否为头结点
    if (this.length == 0) { 
      this.head = newNode
    } else {
      // 找到最后一个节点
      var current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  LinkedList.prototype.insert = function(position, data) {
    // 边界判断
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data);
    // 判断插入是否第一个
    if (position == 0) {
      newNode.next = this.head
      this.head = newNode;
    } else {
      var index = 0;
      var current = this.head;
      var previous = null;
      while (index++ < position) {
        previous = current
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length += 1;
    return true
  }

  LinkedList.prototype.get = function(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    // 获取data
    var current = this.head;
    var index = 0;
    while (index++ < position) {
      current = current.next
    }
    return current.data;
  }

  LinkedList.prototype.indexOf = function(data) {
    var current = this.head;
    var index = 0;
    while (current) {
      if (current.data == data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  LinkedList.prototype.update = function(position, data) {
    // 越界判断
    if (position < 0 || position >= this.length) return false

    var current = this.head;
    var index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data

    return true;
  }

  LinkedList.prototype.removeAt = function(position) {
    // 越界判断
    if (position < 0 || position > this.length) return null

    var current = this.head;
    // 删除第一个
    if (position == 0) { 
      this.head = this.head.next;
    } else {
      
      var previous = null;
      var index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next
      }
      previous.next = current.next
    }

    this.length -= 1;
    return current.data;
  }

  LinkedList.prototype.remove = function(data) {
    // 获取data在链表中的位置
    var positon = this.indexOf(data);
    if (positon == -1) return false
    // 根据位置删除
    return this.removeAt(positon)
  }

  LinkedList.prototype.isEmpty = function() {
    return this.length == 0
  }

  LinkedList.prototype.size = function() {
    return this.length;
  }

  LinkedList.prototype.toString = function() {
    var current = this.head;
    var listString = ''
    // 循坏链表
    while (current) {
      listString += current.data + " "
      current = current.next;
    }
    return listString
  }
}

var list = new LinkedList();

list.append('a')
list.append('b')
list.append('c')

// list.insert(2,'d')

// list.update(1, 'z')

console.log(list.remove('b'))

console.log(list.toString())

console.log(list.size())

// console.log(list.get(2));

// console.log(list.indexOf('d'));

