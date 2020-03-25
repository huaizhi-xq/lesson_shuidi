@annotation
class MyClass {
  
}


function annotation(target) {
  target.annotated = true  //装饰MyClass类拥有一个annotated属性
}


console.log(MyClass.annotated)