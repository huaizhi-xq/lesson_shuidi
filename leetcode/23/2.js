function mergeTwoLists(l1, l2) {
  const dummyHead = {}
  let current = dummyHead
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      current = current.next
      l1 = l1.next
    } else {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  if (l1 === null) {
    current.next = l2
  } else {
    current.next = l1
  }
  return dummyHead.next
}

//  分治
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1])
  }

  const mid = lists.length >> 1 
  const l1 = []
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i]
  }

  const l2 = []
  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i]
  }

  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2))
}

console.log(7 >> 1)