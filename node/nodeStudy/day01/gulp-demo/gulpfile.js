//引用gulp
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
// 使用gulp.task建立任务
//  1.任务的名称
//  2.任务的回调函数
gulp.task('first', done => {
  console.log('第一个gulp任务执行了！');
  // 1. 使用gulp.src获取要处理的文件
  gulp.src('./src/css/base.css')
    .pipe(gulp.dest('dist/css'));
    done();
})
//html任务
//1. html文件中代码的压缩操作
//2. 抽取html文件中的公共代码
gulp.task('htmlmin', done => {
  gulp.src('./src/*.html')
    .pipe(fileinclude())
  // 压缩html文件中的代码
    .pipe(htmlmin({ collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
    done();
})

// css任务
//  1. less语法转换
//  2. css代码压缩
gulp.task('cssmin', done => {
  // 选择css目录下的所有less文件和css文件
  gulp.src(['./src/css/*.less', './src/css/*.css'])
    .pipe(less()) // less => css
    .pipe(csso()) //压缩
    .pipe(gulp.dest('dist/css'));
    done();
})

//js任务
// 1. es6代码转换
// 2. 代码压缩
gulp.task('jsmin', done => {
  gulp.src('./src/js/*.js')
    .pipe(babel({
      // 它可以判断当前代码的运行坏境 将代码转换为当前运行环境所支持的代码环境
      presets: ['@babel/env']
  }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    done();
})

//复制文件夹
gulp.task('copy', done => {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('dist/images'));
  gulp.src('./src/lib/*')
    .pipe(gulp.dest('dist/lib'));
    done();
});
// 构建任务
// gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy' ));