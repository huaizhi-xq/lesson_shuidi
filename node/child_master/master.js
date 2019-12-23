//  主进程
const cp = require('child_process'); //创建子进程
const child_process = cp.fork(__dirname + '/child.js');  // 启动子进程
// 公司 天下没有难做的生意 18人， 员工
child_process.send('hah');  //有些任务要交给它
child_process.on('message', (str) => {
  console.log('parent ', str);
})
