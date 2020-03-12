https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
1071. 字符串的最大公因子



字符串操作方法
.length()
.indexOf()
.lastIndexOf()
.search()
.slice()
.substring()
.substr()
.replace()
.toUpperCase()
.toLowerCase()
.concat()
.trim()
charAt()
charCodeAt()
split()


基础知识-gcd定理
最大公约数（Greatest Common Divisor）缩写为GCD
gcd定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数
gcd算法：gcd(a,b) = gcd(b,a mod b) (不妨设a>b 且r=a mod b ,r不为0)



