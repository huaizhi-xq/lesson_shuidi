"use strict";
console.log("hello ts");
function a() {
}
// var str:string = 1;  错误
// 数组
// var arr = ['1', '2']  //es5
// var arr:number[] = [11, 22]
// var arr1:Array<number> = [11, 22]
// var arr2:any[] = [true, 123, 'asda'];
// 元组  属于数组的一种
// let arr:[number,string] = [123, 'this is ts']
// 枚举
// enum Flag {
//   success = 1,
//   error = 2
// }
// let f:Flag = Flag.error;
// console.log(f);
// enum Color { blue, red, 'oriange'}
// let c:Color = Color.oriange;
// console.log(c)  // 如果标识符没有赋值  它的值就是下标
// enum Color { blue, red=3, 'oriange'}  //改变小标值
// let c:Color = Color.oriange;
// console.log(c)
// 最常用错误处理
// enum Err { 
//   "undefined" = -1,
//   "null" = -2,
//   "success" = 1
// }
// 任意类型  any
// let num:any = 123
// num = 'str'
// console.log(num)
// null 和 undefined 其他（never类型） 数据类型的子类型
// var num:undefined;
// console.log(num + '+++')
// var num: number | undefined;
// num = 123;
// console.log(num);
// var num:null;
// 一个元素可能是number 可能是 undefine 也可能是null
// void 一般用于定义方法的时候方法没有返回值
// es5  
//ts
// function run():void {
//   console.log('run')
// }
// run();
// never 其他类型(包括null 和 undefine)  代表不会出现的值
// 意味着声明never的变量只能被never类型所赋值
// var ss:never;
// // ss = 123; 错误
// ss = (() => {
//   throw new Error('错误');
// }) ()
