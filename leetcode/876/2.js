var middleNode = function(head) {
  let l = head, r = head
  while (r && r.next) {
    l = l.next
    r = r.next.next
  }
  return l
}
