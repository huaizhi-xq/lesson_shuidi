// 获取文章id
var id = getUrlParams('id');
// 评论是否审核
var review;
// 文章数据
$.ajax({
  type: 'get',
  url: '/posts/' + id,
  success: function(response) {
    // console.log(response)
    var html = template('detailTpl', response)
    $('#detailBox').html(html);
  }
})

// 点赞
$('#detailBox').on('click', '#like', function() {
  $.ajax({
    type: 'post',
    url: '/posts/fabulous/' + id,
    success: function() {
      alert('点赞成功')
    }
  })
})

// 网站配置信息
$.ajax({
  type: 'get',
  url: '/settings',
  success: function(response) {
    review = response.review
    // console.log(response)
    // 评论功能
    if (response.comment) {
      var html = template('commentTpl');
      $('#comment').html(html);
    }
  }
})


// 评论表单提交
$('#comment').on('submit', 'form', function() {
  // 获取用户输入的评论内容
  var content = $(this).find('textarea').val();
  var state;
  if (review) state = 0;  //要审核
  else state = 1;

  $.ajax({
    type: 'post',
    url: '/comments',
    data: {
      content: content,
      post: id,
      state: state
    },
    success: function() {
      alert('评论成功')
      location.reload();
    },
    error: function() {
      alert('评论失败')
    }
  })

  return false;
})