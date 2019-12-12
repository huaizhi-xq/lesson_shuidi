const phoneReg = /^1[35789]\d{9}/; //匹配规则定义 正则表达式 
// console.log(phoneReg.test('13979113188sda'));
// console.log(typeof phoneReg); 

const reg = /^\d{3}-\d{5,8}$/;
console.log(reg.test('010-123456'));