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