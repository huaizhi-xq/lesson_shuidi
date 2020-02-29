function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

var inorderTraversal = function(root) {
  var a = false; //用a记录是否访问过  false 入栈  true 出栈访问
  var res = []
  var stack = []
  stack.push([a,root])
  while (stack.length != 0) {
    var [a, root] = stack.pop(); 
    if (root == null) continue
    if (!a) { //该节点没有被访问过 入栈右 根 左
      stack.push([a, root.right])
      stack.push([!a, root])
      stack.push([a, root.left])
    } else {// 出栈 访问
      res.push(root.val)
    }
  }
  // cur = root;
  // while(stack.left > 0 || cur !=null) {
  //   if (cur != null) {
  //     stack.push(cur);
  //     cur = cur.left
  //   } else {
  //     cur = stack.pop();
  //     res.push(cur.val)
  //     cur = cur.right
  //   }
  // }

  return res
}





var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

console.log(inorderTraversal(a3))