main(List<String> args) {
  
}

class Runner {
  void running() {
    print("跑");
  }
}

class Person implements Runner {
  void running() {
      print("人在跑");
  }
}