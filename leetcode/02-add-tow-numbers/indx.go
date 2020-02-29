package main

type ListNode struct {
	Val int
	Next *ListNode
}

func main() {
	var l1 *ListNode
	// var la *ListNode
	// var lb *ListNode
	
	*l1 = &ListNode {
		Val: 2,
		Next: nil
	}
	
	// *la = &ListNode {
	// 	Val: 4,
	// 	Next: lb
	// }
	
	// *lb = &ListNode {
	// 	Val: 3,
	// 	Next: nil
	// }
	print(l1)
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var result *ListNode
	next := &result
	num := 0
	for l1 != nil || l2 != nil || num > 0{
		if l1 != nil {
			num += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			num += l2.Val
			l2 = l2.Next
		}
		*next = &ListNode {
			Val: num % 10,
			Next: nil
		}
		num = num / 10
		next = &((*next).Next)
	}
	return result
}