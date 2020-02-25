main(List<String> args) {
  // Dart2.x开始  new关键字可以省略
  final p = Person("xxx", age: 19);  
  p.name = "xx";
  p.eating();

  Map<String,dynamic> info = {
    "name": "zzz",
    "age": 18,
    "height": 1.88
  };
  final p1 = Person.fromMap(info);
  // p1.eating();
  print(p1);

  final rec = Rectangle(2,3);
  print(rec.area);

}

class Person {
  String name;
  int age;
  double height;

  // Person(String name,int age, {double hegiht}) {
  //   this.name = name;
  //   this.age = age;
  //   this.height = height;
  // }
  // 语法糖
  Person(this.name, {this.age, this.height});

  Person.fromMap(Map<String,dynamic> map) {
    this.name = map['name'];
    this.age = map['age'];
    this.height = map['height'];
  }

  void eating() {
    print("$name在吃东西 $age");
  }

  @override
  String toString() {
    return "name:$name age:$age height:$height";
  }
}

class Rectangle {
  int width;
  int height;
  int area;

  // 初始化列表
  Rectangle(this.width, this.height): area=width*height;
}