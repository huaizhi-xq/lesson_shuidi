https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
33. 搜索旋转排序数组






不存在重复的元素。
你的算法时间复杂度必须是 O(log n) 级别。


位运算
var mid = (low+high)>>1


二分查找的模板
```
  public int bsearch(int[] a, int n, int value) {
    int low = 0;
    int high = n - 1;

    while (low <= high) {
      int mid = (low + high) / 2;
      if (a[mid] == value) {
        return mid;
      } else if (a[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }
```