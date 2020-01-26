// 选择图片
$('#logo').on('change', function() {
  var file = this.files[0]
  var formData = new FormData();
  formData.append('logo', file)

  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      // console.log(response);
      $('#hiddenLogo').val(response[0].logo);
      // logo显示页面中
      $('#preview').attr('src', response[0].logo);
    }
  })
})

// 表单提交
$('#settingsForm').on('submit', function() {
  var formData = $(this).serialize();

  $.ajax({
    type: 'post',
    url: '/settings',
    data: formData,
    success: function(response) {
     
      location.reload();
    }
  })

  return false;
})

// 索要网站设置数据
$.ajax({
  type: 'get',
  url: '/settings',
  success: function(response) {
    if (response) {
      // 将logo地址存储在隐藏域中
      $('#hiddenLogo').val(response.logo);
      // 将logo显示在页面中
      $('#preview').attr('src', response.logo);
      // 网站标题显示页面中
      $('input[name="title"]').val(response.title);
      // 评论
      $('input[name="comment"]').prop('checked', response.comment);
      // 审核
      $('input[name="review"]').prop('checked', response.review);
    }
    
  }
})