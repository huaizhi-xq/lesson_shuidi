var merge = function(nums1, m, nums2, n) {
  let current = m + n - 1;
  while (current >= 0) {
    if (n === 0) return;
    if (m < 1) {
      nums1[current--] = nums2[--n];
      continue;
    }
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m];
    } else {
      nums1[current--] = nums2[--n];
    }
  } 
}
