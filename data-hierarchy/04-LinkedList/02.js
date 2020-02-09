// 封装双向链表
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  DoublyLinkedList.prototype.append = function(data) {
    var newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  DoublyLinkedList.prototype.insert = function(position, data) {
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data);

    // 判断链表是否为空
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 判断是否插入头结点
      if (position == 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else if (position == this.length) { //插入尾结点
        this.append(data)
      } else { 
          var current = this.head;
          var previous = null;
          var index =  0;
          while(index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = newNode;
          newNode.next = current;
          current.prev = newNode;
          newNode.prev = previous;  
      }
    }
    this.length += 1;
    return true;
  }

  DoublyLinkedList.prototype.get = function(position) {
    if (position < 0 || position >= this.length) return null;

    // this.length / 2 > positon  true tail false head  二分法

    var index = 0;
    var current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.data
  }

  DoublyLinkedList.prototype.indexOf = function(data) {
    var current = this.head;
    var index = 0
    while (current) {
      if (current.data == data) return index;
      current = current.next;
      index += 1;
    }
    return -1;
  }

  DoublyLinkedList.prototype.update = function(position,data) {
    if (position < 0 || position >= this.length) return false;

    var current = this.head;
    var index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  DoublyLinkedList.prototype.removeAt = function(position) {
    if (position < 0 || position >= this.length) return null;

    var current = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position == 0) { //删除第一个结点
        this.head.next.prev = null
        this.head = this.head.next;
      } else if (position == this.length-1) { //最后一个结点
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        var index = 0;
        
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    return current.data;
  }

  DoublyLinkedList.prototype.remove = function(data) {
    var index = this.indexOf(data);
    return this.removeAt(index);
  }

  DoublyLinkedList.prototype.isEmpty = function() {
    return this.length == 0
  }

  DoublyLinkedList.prototype.size = function() {
    return this.length
  }

  DoublyLinkedList.prototype.getHead = function() {
    return this.head.data;
  }

  DoublyLinkedList.prototype.getTail = function() {
    return this.tail.data;
  }

  DoublyLinkedList.prototype.toString = function() {
    return this.backwardString();
  }
  DoublyLinkedList.prototype.forwardString = function() {
    var current = this.tail;
    var resultString = "";
    // 向前遍历
    while(current) {
      resultString += current.data + " "
      current = current.prev
    }

    return resultString;
  }
  DoublyLinkedList.prototype.backwardString = function() {
    var current = this.head;
    var resultString = "";
    // 向后遍历
    while(current) {
      resultString += current.data + " "
      current = current.next
    }

    return resultString;
  }
}

var list = new DoublyLinkedList();

list.append('aa')
list.append('bb')
list.append('cc')

// list.insert(1, 'dd')

// console.log(list.get(2))

// console.log(list.indexOf('cc'))

// list.update(2, 'zz')
// console.log(list.removeAt(2))
// console.log(list.remove('aa'))

console.log(list.size())

console.log(list.getHead())

console.log(list.getTail())

console.log(list.backwardString())
// console.log(list.forwardString())