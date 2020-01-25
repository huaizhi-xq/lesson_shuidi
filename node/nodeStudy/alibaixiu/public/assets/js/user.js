// 当表单发生提交行为的时候
$('#userForm').on('submit', function() {
  // 获取用户在表单输入的内容并内容格式化为参数字符串
  var formData = $(this).serialize();
  $.ajax({
    type: 'post',
    url: '/users',
    data: formData,
    success: function() {
      alert('用户添加成功')
      // 刷新页面
      location.reload();
    },
    error: function() {
      alert('用户添加失败')
    }
  })
  // 阻止表单的默认提交行为
  return false;
})

// 当用户选择文件的时候
$('#modifyBox').on('change', '#avatar', function() {
  var formData = new FormData();
  formData.append('avatar', this.files[0]);
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    // 告诉ajax不要解析请求参数
    processData: false,
    // 告诉ajax不要设置参数类型
    contentType: false,
    success: function(response) {
      // 实现头像预览功能
      $('#preview').attr('src', response[0].avatar);
      $('#hiddenAvatar').val(response[0].avatar);
    }
  })
})

// 向服务器端发送请求 索要用户列表数据
$.ajax({
  url: '/users',
  type: 'get',
  success: function(response) {
    // 使用模板引擎拼接字符串
    var html = template('userTpl', {data: response});
    // console.log(html)
    // 显示在页面中
    $('#userBox').html(html);
  }
})

// 通过事件委托的方式为编辑按钮添加点击事件
$('#userBox').on('click', '.edit', function() {
  // 获取用户id
  var id = $(this).attr('data-id');
  $.ajax({
    url: '/users/' + id,
    type: 'get',
    success: function(response) {
      var html = template('modifyTpl', response)
      // console.log(html)
      $('#modifyBox').html(html)
    } 
  })
})

// 为修改表单添加表单提交事件
$('#modifyBox').on('submit', '#modifyForm', function() {
  // 获取用户在表单中输入的内容
  var formData = $(this).serialize();
  var id = $(this).attr('data-id');
  $.ajax({
    url: '/users/' + id,
    type: 'put',
    data: formData,
    success: function(response) {
      alert('用户信息修改成功');
      location.reload();
    },
    error: function() {
      alert('用户信息修改失败');
    }
  })

  // 阻止表单默认提交
  return false;
})

// 当删除按钮被点击的时候
$('#userBox').on('click', '.delete', function() {
  if (confirm('你真的要删除该用户吗')) {
    var id = $(this).attr('data-id');
    $.ajax({
      url: '/users/' + id,
      type: 'delete',
      success: function() {
        alert('删除成功')
        location.reload();
      }
    })
  }
  
})

// 获取全选按钮
var selectAll = $('#selectAll');
// 获取批量删除按钮
var deleteMany= $('#deleteMany');

// 当全选按钮状态发生改变时
selectAll.on('change', function() {
  // 获取到全选按钮当前的状态
  var status = $(this).prop('checked');

  if (status) {
    // 显示批量删除
    deleteMany.show()
  } else {
    deleteMany.hide()
  }
  // 获取到所有用户并将用户的状态和全选按钮保持一致
  $('#userBox').find('input').prop('checked', status);
});

// 当用户前面的复选框状态发生改变时
$('#userBox').on('change', '.userStatus', function() {
  // 获取到所有用户  获取到被选中的用户
  // 如果俩者数量一致 那么就是都是选中，否则没有被选中
  var inputs = $('#userBox').find('input');

  if(inputs.length == inputs.filter(':checked').length) {
    selectAll.prop('checked', true);
  } else {
    selectAll.prop('checked', false);
  }

  if (inputs.filter(':checked').length > 0) {
    // 显示批量删除
    deleteMany.show()
  } else {
    deleteMany.hide();
  }

})

// 为批量删除按钮添加点击事件
deleteMany.on('click', function() {
  var ids = [];
  // 获取选中的用户
  var checkedUser = $('#userBox').find('input').filter(':checked');
  // 循环复选框 从复选框元素的身上获取data-id属性的值
  checkedUser.each(function(index, element) {
    ids.push($(element).attr('data-id'));
  });
  if (confirm('你确定要批量删除吗?')) {
    $.ajax({
      type: 'delete',
      url: '/users/' + ids.join('-'),
      success: function() {
        alert('删除成功')
        location.reload();
      }
    })
  }
 
})
