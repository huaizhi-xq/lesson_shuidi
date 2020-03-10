/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  var max = 0;
  depth(root);
  return max;

  function depth(node) {
    if (node == null) return 0
    let left = node.left ? depth(node.left) : 0
    let right = node.right ? depth(node.right) : 0
    max = Math.max(max,right+left)
    return Math.max(left,right)+1
  }
};


var t1 = new TreeNode(1)
var t2 = new TreeNode(2)
var t3 = new TreeNode(3)
var t4 = new TreeNode(4)
var t5 = new TreeNode(5)

t1.left = t2
t1.right = t3
t2.left = t4
t2.right = t5

console.log(diameterOfBinaryTree(t1))