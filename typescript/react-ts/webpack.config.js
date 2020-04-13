const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
 context: path.join(basePath, 'src'), //上下文环境
 resolve: { //帮处理那些静态文件
   extensions: ['.js', '.ts'],
 },
 entry: { //webpack 打包入口可以多个
   app: './index.ts', 
   vendorStyles: [ //bootstrap css框架   vue   业务代码在改变 但是框架要被打包，但是不会被修改，单独打包
     '../node_modules/bootstrap/dist/css/bootstrap.css',
   ],
   vendorReact: [
     "../node_modules/react",
     "../node_modules/react-dom"
   ]
 },
 output: {
   path: path.join(basePath, 'dist'),
   filename: '[name].[hash].js',//app  hash
 },
 module: {
   rules: [
     {
       test: /\.ts$/,
       exclude: /node_modules/,
       loader: 'awesome-typescript-loader',
       options: {
         useBabel: true,
       },
     },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, 'css-loader'],
     },
    //  {
    //    test: /\.(png|jpg|gif|svg)$/, //压缩 base64
    //    loader: 'file-loader',
    //    options: {
    //      name: 'assets/img/[name].[ext]?[hash]',
    //    },
    //  },
   ],
 },
 // For development https://webpack.js.org/configuration/devtool/#for-development
 devtool: 'inline-source-map',
 devServer: {
   port: 8080,
   noInfo: true,
 },
 plugins: [
   // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
     filename: 'index.html', // Name of file in ./dist/
     template: 'index.html', // Name of template in ./src
     hash: true,
   }),
   new MiniCssExtractPlugin({
     filename: '[name].css',
     chunkFilename: '[id].css',
   }),
 ],
};