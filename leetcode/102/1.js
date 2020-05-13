var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let queue = [root]

  while (queue.length) {
    let acc = []
    let help = []
    while (queue.length) {
      let temp = queue.shift()
      acc.push(temp.val)
      if (temp.left) help.push(temp.left)
      if (temp.right) help.push(temp.right)
    }
    queue = help
    res.push(acc)
  }
  return res
}