// 在base config 之后插上babel 处理
module.exports = (config, resolve) => {

  // babel 的js化
  // webpack 使用module 生产模块单元
  // 基本原则
  const baseRule = config.module.rule('js').test(/\.js|.ts$/)
  const babelPath = resolve('babel.js')  //.babelrc的原因
  const babelConf = require(babelPath)
  // 理解
  const version = require(resolve('node_modules/@babel/core/package.json')).version;
  console.log(version,'9999')
  // babel js  
  // console.log(babelConf,'---')
  return () => {
    console.log(babelConf({
      version
    }));
    baseRule
      .use()
      // 将js  文件
      .loader('babel-loader')
      .options(babelConf({
        version
      }))
  }
  
}