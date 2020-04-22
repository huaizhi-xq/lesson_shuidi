/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 层序遍历
 */
var rightSideView = function(root) {
  if (!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let n ;
    let temp = [];
    while (queue.length) {
      let t = queue.shift();
      if (t.left) temp.push(t.left);
      if (t.right) temp.push(t.right);
      n = t.val;
    }
    res.push(n);
    queue = temp;
  }
  return res;
};