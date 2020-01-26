// 获取评论列表数据
$.ajax({
  type: 'get',
  url: '/comments',
  success: function(response) {
    // console.log(response)
    var html = template('commentsTpl', response)
    // console.log(html)
    $('#commentsBox').html(html);
    var pageHtml = template('pageTpl', response)
    $('#pageBox').html(pageHtml);
  }
})

// 实现分页
function changePage(page) {
  $.ajax({
    type: 'get',
    url: '/comments',
    data: {
      page: page
    },
    success: function(response) {
      console.log(response)
      var html = template('commentsTpl', response)
      // console.log(html)
      $('#commentsBox').html(html);
      var pageHtml = template('pageTpl', response)
      $('#pageBox').html(pageHtml);
    }
  })
}

// 审核按钮
$('#commentsBox').on('click', '.status', function() {
  // 获取评论状态
  var status = $(this).attr('data-status');
  var id = $(this).attr('data-id');
  // console.log(status )
  // return false
  $.ajax({
    type: 'put',
    url: '/comments/' + id,
    data: {
      state: status == 0 ? 1 : 0,
      success: function() {
        location.reload();
      }
    }
  })
})

// 删除
$('#commentsBox').on('click', '.delete', function() {
  var id = $(this).attr('data-id');
  if (confirm('你真的要删除该评论吗')) {
    $.ajax({
      type: 'delete',
      url: '/comments/' + id,
      success: function() {
        location.reload();
      }
    })
  }
})