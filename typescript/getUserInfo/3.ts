// interface  
// 类型基础类型  在多个地方会使用到的时候
// user 实现了IUser 一样的属性和方法的对象  接口
interface IUser {
  name: string;
  age: number;
}
const getUserInfo4 = (user :IUser): string => {

  return `name: ${user.name}, age: ${user.age}`
}

getUserInfo({
  name: 'aa',
  age: 18
})