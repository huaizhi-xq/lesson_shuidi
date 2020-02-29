# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        stack = [root]
        while stack:
            node = stack.pop(0)
            node.left, node.right = node.right, node.left
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return root
  
    # a1 = TreeNode(4)
    # a2 = TreeNode(2)
    # a3 = TreeNode(7)
    # a1.left = a1
    # a1.right = a2

    # invertTree(a1)

    # print(a1.val)
