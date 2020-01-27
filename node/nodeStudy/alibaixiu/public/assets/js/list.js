// 获取地址栏中参数
 var id = getUrlParams('categoryId');

//  获取文章列表
 $.ajax({
  type: 'get',
  url: '/posts/category/' + id,
  success: function(response) {
    console.log(response)
    var html = template('listTpl', {data: response})
    $('#listBox').html(html)
  }
 })