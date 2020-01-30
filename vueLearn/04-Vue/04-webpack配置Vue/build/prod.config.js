const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebpackMerge(BaseConfig, {
  plugins: [
    new UglifyjsPlugin()
  ],
})