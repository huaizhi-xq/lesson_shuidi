function ListNode(val) {
  this.val = val;
  this.next = null;
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

var reverseKGroup = function(head, k) {
  if (!head || k==1) { //空链表 或者 k=1
    return head;
  }
  var dummy = { //哨兵结点
    next: head
  }
  var start = dummy; //初始化为dummy 动态 之后会变成每个小组的开始结点
  var end = head; //初始化时 ？ k 相关 这个小组的第一个结点
  var count = 0;
  while (end != null) {
    // console.log(count);
    count++;
    if (count % k == 0) { //小组
      start = reverse(start, end.next); //反转 要能和其他小组连接
      end = start.next; //第一个结点
    } else {
      end = end.next; //更新
    }

  }
  return dummy.next;
}

var reverse = function(start, end) {
  var curr = start.next;
  var prev = start; //前驱
  var first = curr; //保存第一个结点 尾结点 下一组的头指针
  while(curr != end) {
    var next = curr.next;
    curr.next = prev //反转
    prev = curr;
    curr = next;//更新
  }
  // prev 变成小组的头结点
  start.next = prev;
  first.next = curr;
  return first;
}

console.log(reverseKGroup(n1,2))