// leetcode解题 -> 面试
// 莱文斯坦距离
var a = "mitcmu" //原字符串
var b = "mtacnu" //比较字符串
var n = 6, m = 6
var minDist = Infinity //最短距离  动态规划，回溯也可以
// 回溯算法  穷举
function lwstBT(i,j,edist) {
  if (i === n || j === m) {//退出的
    if (i < n) edist += (n-i)   //剩下的删除
    if (j < m) edist += (m-j)   //增加
    if (edist < minDist) minDist = edist
    return
  }
  // 递归 穷举
  if (a[i] === b[j]) { //两个位置的字符一样 为0
    lwstBT(i+1,j+1,edist) //递归
  } else {
    // i j 多种决策需要做  不一样
    lwstBT(i+1,j,edist+1)  //尝试多少种可能性？ i忽略了 i删除
    lwstBT(i,j+1,edist+1) // j忽略    增加
    lwstBT(i+1,j+1,edist+1) // i,j同时忽略 替换
  }
}

lwstBT(0,0,0)

console.log(minDist)