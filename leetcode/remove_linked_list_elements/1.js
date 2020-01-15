function ListNode(val) {
  this.val = val;
  next = null;
}

function removeElements (head, val) {  // 头结点， val 要检查的值
  // 如果当前结点的下一个结点的值为val ， 当前结点的next 指向next.next
  // 如果头结点的值为val
  const dummy = { //哨兵结点 假
    next: head //哨兵结点为头结点， 可能是val的头结点服务 保持链表
  }
  let current = dummy; //当前结点指向哨兵结点
  while (current && current.next) { //遍历 尾结点 少做一次
    let next = current.next;//取当前结点的下一个结点
    if (next.val == val) {
      current.next = next.next;
    }
    if (next.val != val) { //不要移除的
      current = next;
    }
  }
  return dummy.next; //移除dummy
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
removeElements(n1,6);
console.log(n1);