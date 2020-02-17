function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

var isSameTree = function(t1, t2) {
  if(t1 == null && t2 == null) return true
  if (t1 == null || t2 == null) return false
  if (t1.val != t2.val) {
    return false
  } else if (!isSameTree(t1.left, t2.left)) {
    return false
  } else if (!isSameTree(t1.right, t2.right)) {
    return false
  }
  return true
}

var checkSubTree = function(t1, t2) {
  if (isSameTree(t1, t2)) {
    return true
  } else if (t1.left != null && checkSubTree(t1.left, t2)) {
    return true
  } else if (t1.right != null && checkSubTree(t1.right, t2)) {
    return true
  }
  return false
}


var t1 = new TreeNode(4)
var t2 = new TreeNode(2)
var t3 = new TreeNode(7)
t1.left = t2
t1.right = t3

// var n1 = new TreeNode(4)
// var n2 = new TreeNode(2)
var n3 = new TreeNode(7)
// n1.left = n2
// n1.right = n3

console.log(checkSubTree(t1,n3))