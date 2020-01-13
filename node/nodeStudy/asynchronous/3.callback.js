function getData(callback) {
  callback('123')
}

getData(function(n) {
  console.log('调用')
  console.log(n)
})