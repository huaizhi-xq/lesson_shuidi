const TULING = require('tuling');

const aiTuling = new TULING ({
    key: 'f14aa5cc0fa248549b95ec18ebbbe82c'
});
// 立即执行函数
(async () => {
    // 机器人
    // console.log('arrow function');
    const result = await aiTuling.send({
        userid: 1,
        info: '吃了吗',
        loc: '南昌市'
    });
    console.log(result);
})()
// console.log(func);
// func();