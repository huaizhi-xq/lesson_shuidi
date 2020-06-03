PC端扫码登陆方案，并需要传递哪些信息？

1. jwt(cookie session) 轮询怎么做  mongodb  二维码(node) 扫码登陆
2. node 前端 登陆 api的业务分开理解


1. 二维码  一段信息的图片   node qrcode生成
2. 微信  手机微信登陆了，扫码， 
  轮询：过几分钟 安全问题。
  - 手机app，微信，github QQ  已经登陆(前提)  cookie(token)
  头像，id，用户名 => 二维码里 等待着头像，id，用户名(发生ajax请求)
  1. 二维码里 mongodb 存 qrcode_id   time expires   node qrcode
  2. 手机扫码时，已登录，token，  把token给二维码
  手机端  触发一个ajax post请求，到服务器端， token  qrcode_id 解析出来用户user_id
  3. mongodb 二维码，登陆中， user信息，token也传给PC页面，也登陆成功了
  4. 跳转，已登录成功

  - 扫一下 App里 用户头像 id 登陆状态， 都传到了PC端
  - 结果是PC站登陆了
  服务器端要认识你是谁？ token oAuth 代替 cookie



1. node 插入一条qrcode记录， {qrcode_id， expires_at,create_at}, 生成一个二维码
2. PC端登录页 二维码显示出来
3. 扫码 得到 qrcodeId  使用postman来模拟