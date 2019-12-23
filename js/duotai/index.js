function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
  return 'I am a Person, my name is ' + this.name;
}


function Man(name, age) {
  console.log(arguments, '-------');
  // Person 构造函数  把父类的构造函数执行一下
  Person.apply(this, arguments);
}



Man.prototype = Object.create(Person.prototype);
// toString 盖
Man.prototype.toString = function() {
  return 'I am a Man, my name is ' + this.name;
}
var cxc = new Man("cxc", 18);
console.log(cxc.name);
console.log(cxc + ""); // 类型转化

var person = new Person('JAY', 20);
console.log(person + ""); // 类型转化
const arr = ['cxc', 'cfw'];
console.log(Object.prototype.toString.call(arr)); //{  }
// [object Array]
