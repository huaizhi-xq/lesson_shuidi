# 面向对象规则设计
- uuid v1方法 代表用户的唯一串码， 字符串
  钱包 订单 商品id   。。 unique id的地方都可以用它

  区块链， 钱在区块链就是一个不会被篡改的串
  去中心化 uuid 对应
- 私有属性 
  private
  js _id
  私有属性提供get接口
- balance的修改
  进钱  出钱
  私有属性  变化 提供接口
  js使用_attribute 这种做法是一种约定 private 编程风格  一般情况都可以
  真正的私有   闭包创建私有类


  + new Date() 时间微秒数
