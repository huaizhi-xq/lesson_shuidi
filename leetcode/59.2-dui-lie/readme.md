https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/



// 用一个辅助数组队列  来存放值  使其递减 求max直接返回该数组第一个值
// 注意插入的时候的判断  插入的该值与辅助数组中的值比较大小 比新插入的值小的pop  然后将改值也插入辅助数组