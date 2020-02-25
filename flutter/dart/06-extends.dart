main(List<String> args) {
  final p = Person('xx',26);
  p.name = "aax";
  p.eating();
}

class Animal {
  int age;

  Animal(this.age);

  void eating() {
    print("aa");
  }

}

class Person extends Animal {
  String name;


  Person(this.name, int age): super(age);

  void eating() {
    print("$name aaa $age");
  }
}