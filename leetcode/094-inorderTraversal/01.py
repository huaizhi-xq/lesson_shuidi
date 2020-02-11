

# class TreeNode:
#   def __init__(self, x):
#     self.val = x
#     self.left = None
#     self.right = None


#   def inorderTraversal(self, root: TreeNode) -> List[int]:
#       stack,rst = [root],[]
#       while stack:
#           i = stack.pop()
#           if isinstance(i,TreeNode):
#               stack.extend([i.right,i.val,i.left])
#           elif isinstance(i,int):
#               rst.append(i)
#       return rst

# a1 = TreeNode(1)
# a2 = TreeNode(2)
# a3 = TreeNode(3)
# a3.left = a1
# a3.right = a2
