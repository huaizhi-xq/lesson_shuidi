/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummy = new ListNode()
  dummy.next = head
  let count = 0, current = head,start = dummy
  while (current) {
    count++
    if (count % k === 0) {
      start = reverse(start, current.next)
      current = start.next
    } else {
      current = current.next
    }
  }
  return dummy.next
};

const reverse = (start, current) => {
  let cur = start.next, pre = start, first = cur
  while (cur !== current) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  start.next = pre
  first.next = cur
  return first
}