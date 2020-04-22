//深度优先dfs
var rightSideView = function(root) {
  if (!root) return [];
  let res = []
  const dfs = function(node, level) {
    if (!node) return 
    if (res.length === level) {   //层级
      res.push(node.val)
    }
    dfs(node.right, level+1)
    dfs(node.left, level+1)
  }
  dfs(root,0)
  return res
}