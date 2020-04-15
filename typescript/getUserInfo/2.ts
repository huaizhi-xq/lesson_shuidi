
const getUserInfo3 = function(user: {name: string, age: number}) {  //参数随意
  // arguments  js 不靠谱  
  return `name: ${user.name}, age: ${user.age}`
}

// 中间过程意料不到的可能，数据从数据库里获取
console.log(getUserInfo3({
  name: 'aa',
  age: 18
}))