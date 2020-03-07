https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/

1. 暴力法
  从1开始 往后加 如果等于target 将保留下来，再下一个  直到mid

2. 滑动窗口法
  窗口所有的数加起来和target比较   左开右闭
  小于，右边加+ 
  大于， 左边-

3. 等差数列法
    解得最后一个数字 如果是整数则满足条件
    (i"首项" + j"末项") * n"项数" = 2 * sum"等差数列的和"
     项数可以 转化为 末项 - 首项 + 1 n = j-i+1   //这里刚好公差为1  n = (j-i)/d + 1
     等式变为 (j + i)*( j - i +1) = 2* target
      j^2 - ij + j + ij - i^2 + i = 2*target
      j^2 + j +1/4 = i^2 - i + 2*target +1/4
      j^2+j+1/4 = (j+1/2)^2 
      j = Math.sqrt(i^2 - i + 2*target + 1/4) -1/2

      j = Math.sqrt(2*target + i*i - i + 1/4) - 1/2



   // Sn = n*(a1+an)/2   Sn=n*a1+n(n-1)d/2  => n=(an-a1)/d +1
  // an = a1 + (n-1)*d    an = Sn*2/n-a1    => an 


 1 + 4*(a1*a1 - a1 + 2*Sn)