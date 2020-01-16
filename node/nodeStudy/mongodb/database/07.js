const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('成功'))
  .catch((err) => console.log(err,'失败'))

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
    // 必选字段
    required: [true, '请传入文章标题'],
    // 最小长度
    minlength: [2, "文章标题不能小于2"],
    // 最大长度
    maxlength: [5, "文章标题不能大于5"],
    // 去除空格
    trim: true
  },
  age: {
    type: Number,
    // 数字最小
    min: 18,
    // 数字最大
    max: 100
  },
  publishDate: {
    type: Date,
    // 默认值
    default: Date.now
  },
  category: {
    type: String,
    // 枚举 列举出当前字段可以拥有的值
    enum: {
     values: ['html', 'css', 'javascript', 'node.js'],
     message: '分类名称不在一定范围类'
    }
  },
  author: {
    type: String,
    // 自定义验证规则
    validate: {
      validator: v => {
        // 返回布尔值
        // true 验证成功 false 验证失败
        // v 要验证的值
        return v&&v.length > 4
      },
      // 自定义错误信息
      message: '传入的值不符合规定'
    }
  }
});

const post = mongoose.model('Post', postSchema);

post.create({title: 'aaa', age: 19, category: 'java', author: 'abs'})
  .then(result => console.log(result))
  .catch(error => {
    // 获取错误信息对象
    const err = error.errors;
    // 循坏错误信息对象
    for (var attr in err) {
      // 打印错误信息
      console.log(err[attr]['message'])
    }
  })