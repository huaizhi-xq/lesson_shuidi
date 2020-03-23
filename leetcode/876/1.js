/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// Definition for singly-linked list.
function ListNode(val) {
     this.val = val;
      this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let num = 1
  let current = head.next
  while (current) {
    num++
    current = current.next
  }
  console.log(num)
  num = num % 2 === 0 ? num/2 + 1 : num/2
 console.log(num)
  current = head
  num--
  while(num > 0) {
    current = current.next
    num--
  }
 
  return current

};

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)
var n6 = new ListNode(6)




n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// n5.next = n6


console.log(middleNode(n1))