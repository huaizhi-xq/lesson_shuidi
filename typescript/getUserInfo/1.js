const getUserInfo2 = function(user) {  //参数随意
  // arguments  js 不靠谱  
  return `name: ${user.name}, age: ${user.age}`
}

// js 不会做运行前检测  动态语音  java ts 静态语言
// 先编译再运行  ts 检测语法
//多人协作时  不严格的语法  会带来大麻烦
console.log(getUserInfo({name: 'lap'}))