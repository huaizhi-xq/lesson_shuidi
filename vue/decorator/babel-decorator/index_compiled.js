var _class;

let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true; //装饰MyClass类拥有一个annotated属性
}

console.log(MyClass.annotated);
