const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 动态的， 不同的项目， 需求不一样
          // loader不一样 
          'style-loader',//内联进html
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 默认使用 webpackOptions.output中的publicPath
              publicPath: '../',
              // 热更新
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader'//css文件
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "imgs/",
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 在 css-loader 前执行的 loader 数量
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: "postcss",
              plugins: loader => [
                require('autoprefixer')({
                  browsers: ['> 0.15% in CN']
                })
              ]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              preferPathResolver: "webpack"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  devServer: {
    port: '8080'
  },
  plugins:[
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css'
    })
  ]
}