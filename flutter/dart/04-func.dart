main(List<String> args) {
  print(sum(20,30));

  printInfo('xx');
  printInfo('xx',18);
  printInfo1('xx',height: 1.88);

  test(foo);
  var bar = getFunc();
  bar();

  // 匿名函数
  List<String> names = ['a','b','c','a'];
  names.forEach((element) {
    print(element);
  });

  // 只有一行简单的代码   健头函数
  names.forEach((element) => print(element));

  final res = List.from(names.map((e) => e + 'xxx'));
  print(res);

}

int sum(int num1, int num2) {
  return num1 + num2;
}

/**
 * 参数问题
 * 必传参数 和 可选参数 
 *    位置可选参数[]  命名可选此参数{}
 * 
 */

void printInfo(String name, [int age = 33]) {
  print("$name $age");
}
void printInfo1(String name, {int age = 18, double height}) {
  print("$name $age $height");
}


/**
 * 函数第一公民
 * 
 */
void foo() {
  print('hello');
}

void test(Function func) {
  func();
}

Function getFunc() {
  return foo;
}