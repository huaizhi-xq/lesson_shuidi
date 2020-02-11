// 封装二叉搜索树
function BinarySearchTree() {

  function Node(key) {
    this.key = key;
    this.left = null
    this.right = null
  }

  // 属性
  this.root = null;

  // 方法
  // 插入数据
  BinarySearchTree.prototype.insert = function(key) {
    // 1. 根据key创建结点
    var newNode = new Node(key);

    // 2. 判断根节点是否有值
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = function(node, newNode) { //子树插入
    if (newNode.key < node.key) {//向左
      if (node.left == null) {//左结点为空
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { //向右
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function(handler) {
    this.preOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTraversalNode = function(node, handler) {
    if (node != null) {
      // 1. 处理经过的结点
      handler(node.key)
      
      // 2. 处理节点的左子节点
      this.preOrderTraversalNode(node.left, handler)

      // 3. 处理节点的右子节点
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function(handler) {
    this.midOrderTraversalNode(this.root, handler);
  }
  BinarySearchTree.prototype.midOrderTraversalNode = function(node, handler) {
    if (node != null) {
       // 1. 处理节点的左子节点
       this.midOrderTraversalNode(node.left, handler)

       //2. 处理经过的结点
       handler(node.key)
 
       // 3. 处理节点的右子节点
       this.midOrderTraversalNode(node.right, handler)
    }
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function(handler) {
    this.postOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.postOrderTraversalNode = function(node, handler) {
    if (node != null) {
      // 1. 左
      this.postOrderTraversalNode(node.left, handler)

      // 2. 右
      this.postOrderTraversalNode(node.right, handler)

      // 处理
      handler(node.key)
    }
  }

  // 最小值
  BinarySearchTree.prototype.min = function() {
    var current = this.root
    // 依次向左查找
    while(current.left) {
      current = current.left;
    }
    return current
  }
  // 最大值
  BinarySearchTree.prototype.max = function() {
    var current = this.root
    while(current.right) {
      current = current.right;
    }
    return current
  }

  // 搜索特定的值
  BinarySearchTree.prototype.searchKey = function(key) {
    var current = this.root;
    
    while(current) {  
      if (key > current.key) {
        current = current.right
      } else if (key < current.key){
        current = current.left 
      } else {
        return current
      }
    }
    return false
    
  }

  // 删除
  BinarySearchTree.prototype.remove = function(key) {
    // 1.寻找要删除的节点
    // 1.1 保存一些信息
    var current = this.root;
    var parent = null;
    var isLeftChild = true

    // 1.2 寻找要删除的节点
    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      }else {
        isLeftChild = false;
        current = current.right;
      }
      // 没有找到
      if (current == null) return false
    }
    // console.log(current.key)
    //2. 删除节点
    //2.1 叶子节点 
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null
      }else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
      // return current.key
    } 
    //2.2 一个子节点
    else if (current.left == null) {
      if (current == this.root) 
      {this.root = current.right}
      else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.left = current.right
      }
    }
    else if (current.right == null) {
      if (current == this.root) 
      {this.root = current.left}
      else if (isLeftChild) {
        parent.right = current.left
      } else {
        parent.right = current.left
      }
    }
    //2.3 俩个子节点
    else {
      // 获取后继节点
      var successor = this.getSuccssor(current)

      // 判断是否为根节点
      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }

      // 将删除节点的左子树 = current.left
      successor.left = current.left
    }
  }
  // 找后继的方法
  BinarySearchTree.prototype.getSuccssor = function(delNode) {
    // return this.min(delNode.right)
    // 定义变量， 保存找到的后继
    var successor = delNode
    var current = delNode.right
    var successorParent = null

    // 查找
    while(current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    // 判断寻找的后继节点是否直接就是delNode的right
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }

    return successor
  }
 
}


var bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

// var string1 = ""
// bst.preOrderTraversal((key) => {
//   string1 += key + " " 
// })

// console.log(string1)

// var string2 = ""
// bst.midOrderTraversal((key) => {
//   string2 += key + " " 
// })

// console.log(string2)

// var string3 = ""
// bst.postOrderTraversal((key) => {
//   string3 += key + " " 
// })

// console.log(string3)

// console.log(bst.min())
// console.log(bst.max())

// console.log(bst.searchKey(7))

// bst.remove(9)
// bst.remove(7)
// bst.remove(15)
bst.remove(11)

var string1 = ""
bst.preOrderTraversal((key) => {
  string1 += key + " " 
})

console.log(string1)