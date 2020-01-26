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
