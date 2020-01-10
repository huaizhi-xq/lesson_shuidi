function ListNode(val) {
  this.val = val; //链表结点 值
  this.next = null; //
  return this;
}

var removeDuplicates = function(head) {
  if (head == null || head.next == null ) return head;
  var cur = head;
  while (cur.next != null) {  //一重循环
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next; //重复的 就指向下一个的下一个
    } else {
      cur = cur.next; //下一个
    }
  }
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(2)

n1.next = n2;
n2.next = n3;
// removeDuplicates(n1);
console.log(n1)