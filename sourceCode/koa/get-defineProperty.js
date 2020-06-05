class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));   //get 定义在原型上
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);   // defineProperty定义在实例上
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
