func middleNode(head *ListNode) *ListNode {
	l := head
	r := head
	for r != nil && r.Next != nil {
		l = l.Next
		r = r.Next.Next
	}
	return l
}