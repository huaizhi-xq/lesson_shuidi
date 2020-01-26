// 选择文件
$('#file').on('change', function() {
  // 用户选择到的文件
  var file = this.files[0];
  var formData = new FormData();
  formData.append('image', file);
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      // console.log(response)
      $('#image').val(response[0].image);
    }
  })
})

// 表单提交
$('#slidesForm').on('submit', function() {
  var formData = $(this).serialize();
  $.ajax({
    type: 'post',
    url: '/slides',
    data: formData,
    success: function() {
      location.reload();
    }
  })
  return false;
})

// 图片轮播数据展示
$.ajax({
  type: 'get',
  url: '/slides',
  success: function(response) {
    console.log(response)
    var html = template('slidesTpl', {data: response})
    $('#slidesBox').html(html)
  }
})

// 删除按钮
$('#slidesBox').on('click', '.delete', function() {
  var id = $(this).attr('data-id');
  if (confirm(' 你真的要删除吗?')) {
    $.ajax({
      type: 'delete',
      url: '/slides/' + id,
      success: function() {
        location.reload();
      }
    })
  }
})