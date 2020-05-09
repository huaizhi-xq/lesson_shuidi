// TDD  测试驱动开发   敏捷开发
// 先写测试，再写实现的代码？  mocha 工具
// 待测试代码是否正确
const EasyDate = require('../../src/EasyDate')
const should = require('should')  //断言库
// 测试什么
describe('测试Date类型', () => {
  // 添加测试用例
  // EasyDate 简单的日期类
  let date = new EasyDate('+1m')  //高级需求 可以给一个再当前后的偏移量
  it("测试实例日期正确", () => {
    // 测试  生成一个日期  
    // 写测试代码  用上src下的代码  测试你未来的写的代码是否正确
    let some = date.toDate()
    let today = new Date();  //当前的日期对象
    // should(some.getFullYear()).equal(today.getFullYear())
    should(some.getMonth()).equal(today.getMonth()+1)
  })

  describe('闰年', () => {
    it('是否为闰年', () => {
      should(EasyDate.isLeapYear(2000)).be.True()
    })
  })

  describe('月份', () => {
    it('输出月份，个位数前面自动补0', () => {
      should(EasyDate.toDuble(11)).equal('11');
      should(EasyDate.toDuble(9)).equal('09');
    })
  })
})
