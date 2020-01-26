// 添加分类
$('#addCategory').on('submit', function() {
  var formData = $(this).serialize();
  $.ajax({
    type: 'post',
    url: '/categories',
    data: formData,
    success: function() {
      location.reload();
    }
  })  
  return false;
})

// 所有分类列表的数据
$.ajax({
  type: 'get',
  url: '/categories',
  success: function(response) {
    var html = template('categoryListTpl', {data: response});
    $('#categoryBox').html(html);
  }
})

// 为编辑按钮添加点击事件
$('#categoryBox').on('click', '.edit', function() {
  var id = $(this).attr('data-id');
  // console.log(id)
  $.ajax({
    type: 'get',
    url: '/categories/' + id,
    success: function(response) {
      var html = template('modifyCategoryTpl', response);
      $('#formBox').html(html);
    }
  })
})

// 修改事件
$('#formBox').on('submit', '#modifyCategory', function() {
  var formData = $(this).serialize();
  var id = $(this).attr('data-id');
  console.log(id);
  $.ajax({
    type: 'put',
    url: '/categories/' + id ,
    data: formData,
    success: function() {
      location.reload();
    }
  })

  return false;
})

// 删除事件
$('#categoryBox').on('click', '.delete', function() {
  if (confirm('你确定要删除操作吗？')) {
    var id = $(this).attr('data-id');
    $.ajax({
      type: 'delete',
      url: '/categories/' + id,
      success: function() {
        location.reload();
      }
    })
  }
})