

 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let len1 = []
  while (l1) {
    len1.push(l1.val)
    l1 = l1.next
  } 
  let len2 = []
  while (l2) {
    len2.push(l2.val)
    l2 = l2.next
  } 
  let res = []
  let n = 0
  while (len1.length || len2.length) {
    let t1 = len1.pop() || 0
    let t2 = len2.pop() || 0
    let t3 = t1 + t2
    if (t3+n >= 10) {
      t3 = t3+n-10
      res.push(t3)
       n = 1
      continue
    }
    res.push(t3+n)
    n = 0
  }
  if (n === 1) {
    res.push(1)
  }
  let dummy = new ListNode()
  let cur = dummy
  while (res.length) {
    let node = new ListNode(res.pop())
    cur.next = node
    cur = node
  }
  return dummy.next
};

