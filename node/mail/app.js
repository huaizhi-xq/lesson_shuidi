const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'qq',//腾讯
    port: 465,
    secureConnection: true, //安全连接
    auth: {
        user: '949328973@qq.com',
        pass: 'lbzvxtfbslelbaij'
    }
});

let mailOptions = {
    from: "光棍节前的呐喊<949328973@qq.com>",
    to: "949328973@qq.com",
    subject: '双11买什么？',
    html: '<b>淘宝京东拼多多</b>'
}

transporter.sendMail(mailOptions,(error,info) =>{
    if (error) {
        return console.log(error);
    }
    console.log('Message send %s',info.messageId);
})