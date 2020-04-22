/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func rightSideView(root *TreeNode) []int {
	if root == nil {
		return []int {}
	}
	res := make([]int,0)

	queue := make([]*TreeNode, 0)
	queue = append(queue,root)

	for len(queue) > 0 {
		var n int
		temp := make([]*TreeNode,0)
		
		for len(queue)> 0 {
			t := queue[0]
			if (t.Left != nil) {
				temp = append(temp, t.Left)
			}
			if (t.Right != nil) {
				temp = append(temp, t.Right)
			}
			n = t.Val
			queue = queue[1:]
		}
		res = append(res,n)
		queue = temp
	}
	return res
}