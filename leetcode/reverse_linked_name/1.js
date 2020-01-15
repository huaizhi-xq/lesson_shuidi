function ListNode(val) {
  this.val = val;
  next = null;
}

// 下个结点 后继结点
// 当前结点 除了头结点都有前趋结点

var reverseList = function(head) {
  if (!head || !head.next) return head; //空链表或只一个节点
  let cur = head; //当前
  let pre = null; //前驱
  while (cur) { //遍历
    const next = cur.next; //后继
    cur.next = pur; //反过来
    pur = cur; //前驱结点变为当前结点
    cur = next; //后继结点变为当前结点
  } 
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