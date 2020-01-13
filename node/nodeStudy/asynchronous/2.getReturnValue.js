function getMsg(callback) {
  setTimeout(function() {
    callback({
      msg: 'hello'
    })
    // return {
    //   msg: 'hello'
    // }
  }, 2000)
}

// const msg = getMsg();

// console.log(msg)

getMsg(function(data) {
  console.log(data);
})