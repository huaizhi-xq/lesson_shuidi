Page({
  data: {
    // todos list 
    // 全部， 已完成， 未完成。。。
    focus: false,
    addShow: false,
    lists: [], //所有todos
    curList: [], //当前状态todos
    status: '1' //当前状态
  },
  addTodoShow(event) {
    this.setData({
      addShow: true,
      focus: true
    })
  },
  showStatus(e) {
    var st = e.currentTarget.dataset.status;
    if (st == this.data.status) return;
    if (this.data.status === 1) {
      this.setData({
        curList: this.data.lists,
        status: st
      })
      return
    }
    this.setData({
      status: st,
      curList: this.data.lists.filter(item => +item.status === (st - 2))  //filter 数组过滤
    })
  },
  addTodo() {
    var temp = this.data.lists;
    var addT = {
      id: new Date().getTime(),
      title: this.data.addText,
      status: '0'
    }
    temp.push(addT);
    this.setData({
      lists: temp,
      addShow: false,
      curList: temp
    })
  },
  setInput(e) {
    this.setData({
      addText: e.detail.value
    })
  }
})