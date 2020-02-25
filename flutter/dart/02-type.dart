/**
 * 强类型  变量有自己的类型
 *
 */

main() {
  // 1. 明确声明
  String name = "xxx";
  // name = 18 
  int age = 18;
  double height = 1.88;

  print("$name $age $height");
  // print(name.runtimeType);
  // print(age.runtimeType);

  //  类型推导
  var message = "hello";
  print(message.runtimeType);

  // const/final
  const message1 = "abc";
  final message2 = "zxy";
  print(message1.runtimeType);
  print(message2.runtimeType);

  // dynamic
  dynamic num = "aasa";
  num = 123;
  print(num);
  print(num.runtimeType);

  
} 

