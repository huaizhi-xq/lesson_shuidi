var makeSound = function(animal) {
  // 多态 只要对象具有统一的接口 可以互换使用
  // if (animal instanceof Duck) {
  //   console.log('gagaga');
  // } else {
  //   console.log('lololo');
  // }
  animal.say(); //面向对象的优化
}
var Duck = function() {}
Duck.prototype.say = function() {
  console.log('gagaga');
}
var Chicken = function() {}

Chicken.prototype.say = function() {
  console.log('lololo');
}

makeSound(new Chicken());
