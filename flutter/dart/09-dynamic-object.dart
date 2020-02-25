main(List<String> args) {
  // Person p = Person();
  Map<String,Object> map = {
    "name": 'xx'
  };
  print(map.runtimeType);
  // print(map['name'].length);  这里就报错
  Map<String,dynamic> map1 = {
    "name": 'xx'
  };
  print(map1['name'].length);
}

/**
 * dynamic 更方便  但有潜在的危险
 * 动态决定类型
 * Object 
 * 安全
 */

/**
 * dart 所有类都默认继承Object
 */

class Person {
  
}