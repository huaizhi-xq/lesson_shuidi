//  nb email 正则表达式
// 94938973@qq.com
// @sina.com.cn
// 一定要匹配到.  + (\.[\w-]+)+ 分组
console.log(/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test("949328973@sina.com.cn"));