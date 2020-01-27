// 退出
$('#logout').on('click', function() {
  var isConfirm = confirm('你真的要退出吗?');
  if (isConfirm) {
    $.ajax({
      url: '/logout',
      type: 'post',
      success: function() {
        location.href = 'login.html'
      },
      error: function() {
        alert('退出失败')
      }
    })
  }
})

// 处理日期事件格式
function formateDate(date) {
  date = new Date(date);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// 获取用户登陆信息
$.ajax({
  type: 'get',
  url: '/users/' + userId,
  success: function(response) {
    $('.avatar').attr('src', response.avatar);
    $('.profile .name').html(response.nickName)
  }
})
