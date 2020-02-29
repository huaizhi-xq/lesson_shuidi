function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  if (l1 == null || l2 == null) return null;

  // dummyHead
  let dummyHead = new ListNode(0);
  let cur1 = l1;
  let cur2 = l2;
  let cur = dummyHead  //计算新链表
  let carry = 0; //进位标志

  while (cur1 != null || cur2 != null) {
    let val1 = cur1 != null ? cur1.val : 0;
    let val2 = cur2 != null ? cur2.val : 0;
    let sum = val1 + val2 + carry;
    let newNode = new ListNode( sum % 10);
    carry = sum >= 10 ? 1: 0;
    cur.next = newNode;
    cur = cur.next;

    if (cur1 != null) cur1 = cur1.next;
    if (cur2 != null) cur2 = cur2.next;
  }
  // 如果最后还有进位，新加一个节点
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummyHead.next;
}


var l1 = new ListNode(2);
var la = new ListNode(4);
var lb = new ListNode(3);
l1.next = la;
la.next = lb;

var l2 = new ListNode(5);
var lx = new ListNode(6);
var ly = new ListNode(4);
l2.next = lx;
lx.next = ly;


console.log(addTwoNumbers(l1,l2))