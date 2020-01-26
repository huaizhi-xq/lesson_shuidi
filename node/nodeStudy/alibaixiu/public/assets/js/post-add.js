// 获取文章分类数据
$.ajax({
  url: '/categories',
  type: 'get',
  success: function(response) {
    var html = template('categoryTpl', {data: response})
    $('#category').html(html);
  }
})

// 选择文件时触发
$('#feature').on('change', function() {
  // 获取选择到的文件
  var file = this.files[0];
  // 实现二进制文件上传
  var formData = new FormData();
  // 追加到formData
  formData.append('cover', file);
  // 实现文章封面图片上传
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    // 不要处理data属性对应的参数
    processData: false,
    // 不要设置参数类型
    contentType: false,
    success: function(response) {
      $('#thumbnail').val(response[0].cover)
    }
  })
})

//添加文章表单提交事件
$('#addForm').on('submit', function() {
  var formData = $(this).serialize();

  $.ajax({
    type: 'post',
    url: '/posts',
    data: formData,
    success: function() {
      // 跳转到文章列表页面
      location.href = '/admin/posts.html'
    },
    error: function(err) {
      console.log(err.message)
    }
  })
  return false;
})

// 从浏览器的地址栏中获取查询参数
function getUrlParams(name) {
  var paramsAry = location.search.substr(1).split('&')
  for (var i =0; i< paramsAry.length; i++) {
    var tmp = paramsAry[i].split('=');
    if (tmp[0] == name) return tmp[1];
  }
  return -1
}
// 获取浏览器地址中的id参数
var id = getUrlParams('id');
// 修改操作
if (id != -1) {
  // 根据id获取文章信息
  $.ajax({
    type: 'get',
    url: '/posts/' + id,
    success: function(response) {
      $.ajax({
        url: '/categories',
        type: 'get',
        success: function(categories) {
          response.categories = categories;
          // console.log(response)
          var html = template('modifyTpl', response)
          // console.log(html)
          $('#parentBox').html(html);
        }
      })

    }
  })
}

// 修改文章信息表单提交
$('#parentBox').on('submit', '#modifyForm', function() {
  var formData = $(this).serialize();
  var id = $(this).attr('data-id')
  console.log(id)
  $.ajax({
    type: 'put',
    url: '/posts/' + id,
    data: formData,
    success: function() {
      location.href = '/admin/posts.html'
    }
  })
  
  return false;
})