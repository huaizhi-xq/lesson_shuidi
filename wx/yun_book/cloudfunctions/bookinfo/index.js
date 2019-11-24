var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=f9aab3579259d9f27df104993a9c927a`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=f9aab3579259d9f27df104993a9c927a`).then(html =>{
    return html;
  })
  return res;
}