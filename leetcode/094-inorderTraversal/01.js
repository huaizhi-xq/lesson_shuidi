function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

var inorderTraversal = function(root) {
  inorderTraversalNode(root)
}
var inorderTraversalNode = function(root) {
  if (root != null) {
    inorderTraversalNode(root.left)
    console.log(root.val)
    inorderTraversalNode(root.right)
  }
}




var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

inorderTraversal(a3)