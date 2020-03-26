// go tree

package main

import "fmt"

// tree treeNode 递归的概念来定义的
type Node struct {
	value int
	left  *Node
	right *Node
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil}
}

func (n *Node) FindNode(node *Node, value int) *Node {
	if node == nil {
		return nil
	} else if node.value == value {
		return node
	} else {
		p := node.FindNode(node.left, value)
		if p != nil {
			return p
		}
		return node.FindNode(node.right, value)
	}
}

func (n *Node) GetTreeHeight(node *Node) int {
	if node == nil {
		return 0
	} else {
		// 当前节点的高度？  左子树+1  右子树+1
		l := node.GetTreeHeight(node.left)

		r := node.GetTreeHeight(node.right)
		if l > r {
			return l + 1
		} else {
			return r + 1
		}
	}
}

func (n *Node) GetLeafNode(node *Node) {
	// 叶子节点
	if node != nil {
		if node.left == nil && node.right == nil {
			fmt.Println(node.value)
		} else {
			node.GetLeafNode(node.left)
			node.GetLeafNode(node.right)
		}
	}
}

func main() {
	root := CreateNode(5) //根节点
	root.left = CreateNode(2)
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)
	//
	fmt.Printf("%d\n", root.FindNode(root, 4).value) //4
	fmt.Printf("%d", root.GetTreeHeight(root))
	root.GetLeafNode(root)
}
