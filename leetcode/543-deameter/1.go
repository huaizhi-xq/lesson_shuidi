/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 var max int

func diameterOfBinaryTree(root *TreeNode) int {
    max = 0
	if root == nil {
        return max
    }
	depth(root)

	return max
}

func depth(node *TreeNode) int {
	if node == nil {
        return 0
    }
	left := depth(node.Left)
	right := depth(node.Right)
	if left+right > max {
		max = left + right
	}
	temp := left 
	if (right > temp) {
		temp = right
	}

	return temp + 1
}	