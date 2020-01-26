// 文章列表数据
$.ajax({
  type: 'get',
  url: '/posts',
  success: function(response) {
    // console.log(response)
    var html = template('postsTpl', {data: response})
    $('#postsBox').html(html);
    var page = template('pageTpl', response)
    $('#page').html(page)
  }
})



// 分页
function changePge(page) {
  $.ajax({
    type: 'get',
    url: '/posts',
    data: {
      page: page
    },
    success: function(response) {
      // console.log(response)
      var html = template('postsTpl', {data: response})
      $('#postsBox').html(html);
      var page = template('pageTpl', response)
      $('#page').html(page)
    }
  })
}

// 分类数据
$.ajax({
  type: 'get',
  url: '/categories',
  success: function(response) {
    // console.log(response)
    var html = template('categoryTpl', {data: response})
    $('#categoryBox').html(html);
  }
})

// 提交筛选
$('#filterForm').on('submit', function() {
  var formData = $(this).serialize();
  
  $.ajax({
    type: 'get',
    url: '/posts',
    data: formData,
    success: function(response) {
      // console.log(response)
      var html = template('postsTpl', {data: response})
      $('#postsBox').html(html);
      var page = template('pageTpl', response)
      $('#page').html(page)
    }
  })
  return false
})

// 删除按钮
$('#postsBox').on('click', '.delete', function() {
  var id = $(this).attr('data-id');
  if (confirm('你确定要删除吗？')) {
    $.ajax({
      type: 'delete',
      url: '/posts/' + id,
      success: function() {
        location.reload();
      }
    })
  }
})