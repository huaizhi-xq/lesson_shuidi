const rimraf = require('rimraf')
const path = require('path')
const ora = require('ora')  //加载指示器
rimraf.sync(path.join(process.cwd(),'dist'))

const spinner = ora("开始构建项目")
spinner.start()