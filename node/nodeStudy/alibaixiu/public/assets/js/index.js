// 获取文章数量
$.ajax({
  type: 'get',
  url: '/posts/count',
  success: function(responsePost) {
    // 获取分类数量
    $.ajax({
      type: 'get',
      url: '/categories/count',
      success: function(responseCate) {
        // 获取评论数量
        $.ajax({
          type: 'get',
          url: '/comments/count',
          success: function(responseCom) {
            // console.log(responseCate)
            // console.log(responseCom)
            var html = template('indexTpl',{
              post: responsePost,
              cate: responseCate,
              com: responseCom
            })
            $('#countBox').html(html)
          }
        })
      }
    })
   
  }
})

// 