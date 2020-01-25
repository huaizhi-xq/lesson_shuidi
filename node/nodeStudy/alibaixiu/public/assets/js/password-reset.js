
// 修改密码提交行为
$('#modifyForm').on('submit', function() {
  // 获取表单中输入的内容
  var formData = $(this).serialize();
  // alert('--------')
  $.ajax({
    type: 'put',
    url: '/users/password',
    data: formData,
    success: function(response) {
      // console.log(response)
      // console.log(response.message)
      alert(response.message)
      location.href = "/admin/login.html"
    },
    error: function(err) {
      // console.log(err)
      alert(err.message)
    }
  })
  // 阻止默认提交
  return false;
})