var key = getUrlParams('key');
// alert(key)
// 获取搜索结果
$.ajax({
  type: 'get',
  url: '/posts/search/' + key,
  success: function(response) {
    console.log(response)
    var html = template('searchTpl', {data: response});
    $('#listBox').html(html)
  }
})