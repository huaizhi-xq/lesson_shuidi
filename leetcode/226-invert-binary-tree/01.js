function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

// var inverTree = function(root) {
//   subTree(root)
// }

// var subTree = function(node) {
//   if (node.left != null && node.right != null) {
//     var temp =   node.left
//     node.left = node.right
//     node.right = temp;
//     subTree(node.left)
//     subTree(node.right)
//   }  
// }


var inverTree = function(root) {
  if (!root) return root
  // const left = root.left
  // const right = root.right
  // root.right = inverTree(left)
  // root.left = inverTree(right)

  const stack = [root]
  let current = null;
  while((current = stack.pop())) {
    const left = current.left;
    const right = current.right;
    current.right = left
    current.left = right
    if (left) stack.push(left)
    if (right) stack.push(right)
  }

  return root
}


var t1 = new TreeNode(4)
var t2 = new TreeNode(2)
var t3 = new TreeNode(7)

t1.left = t2
t1.right = t3

inverTree(t1)

console.log(t1)
