const url = require('url')
let request = {
  get url() {  //不用原生的req对象， 用ctx.requset.url
    return this.req.url //this ? ctx
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}
module.exports = request