main(List<String> args) {
  // list
  List<String> names = ['a','b','c','a'];

  // set  无序 不能重复
  // 应用:对list去重
  Set<int> nums = {101,102,623};
  print(nums);
  List<String> newNames = List.from(Set.from(names));
  print(newNames);

  // map
  Map<String,dynamic> info = {
    "name": 'xx',
    "age": 18,
    "height": 1.88
  };
  print(info);

}