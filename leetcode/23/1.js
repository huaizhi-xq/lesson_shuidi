/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let arr = []
  for (item of lists) {
    while(item) {
      arr.push(item.val)
      item = item.next
    }
  }

  arr.sort((a,b) => a-b)

  let res = new ListNode()

  arr.forEach(item => {
    let node = new ListNode(item)
    res.next = node
    res = node
  })
  return res.next
};