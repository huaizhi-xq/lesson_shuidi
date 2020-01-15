function ListNode(val) {
  this.val = val;
  next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var oddEvenList = function(head) {
  // 将奇偶结点分开放俩个数组
  // 奇链表的尾结点指向偶结点的头结点
  // 空间复杂都不是O(1) 不是原地
  if (!head || !head.next) {
    return head;
  }
  var odd = [];
  var even = [];
  var f = true; //奇偶标记
  while(head) { //遍历
    var next = head.next;
    head.next = null;
    if (f) {
      odd.push(head);
    } else {
      even.push(head);
    }
    f = !f;
    head = next;
  }
  // 重建俩个分链表 原地算法？
  for (var i = 0; i < odd.length - 1; i++)
    odd[i].next = odd[i+1];
  for (var i = 0; i < even.length - 1; i++)
    even[i].next = even[i+1];
  //连接起来 
  odd[odd.length - 1].next = even[0];
  return odd[0];
}
console.log(oddEvenList(n1))
