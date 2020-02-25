main(List<String> args) {
  
}

mixin Runner {
  void running() {
    print("跑");
  }
}

mixin Swimer {
  void swimming() {
    print("游");
  }
}


class Person with Runner, Swimer {
  
}
