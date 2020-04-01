统会首先自动从Hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。

1. 如何让代码在  www.taobao.com
  前端上班第一个难题  运行代码
  在本地支持www.taobao.com  修改hosts文件

  www.taobao.com  —> ip  上淘宝
  在本地的域名缓存中先查找   访问过  本地会缓存的
  运营服务商  询问  www 域名系统   国内有   美国


  hosts 先来这边找  程序员来设置
  www.taobao.com 本地

- 如何干掉8080
  nginx
  vue  vue.config.js  proxy 8000 -> proxy  <-> 3000

  反向代理  www.taobao.com:80    default_port 80
  nginx 是高性能http服务器
  配置下反向代理
  :80 default 不用加  www.taobao.com  默认是同80端口提供服务
  8080  live-server 由80端口代理


- 我离肯德基有多远？ 
  百度地图  api
  把自己的坐标，店的坐标  多远？  lbs


本地https搭建
1. mkcert https://github.com/FiloSottile/mkcert/releases
2. mkcert.exe 拷贝到C:\Windows\System32\中，而后打开CMD命令行执行：mkcert -install 
3. 生成本地https证书和密钥
  mkcert localhost 127.0.0.1 ::1 YouHostname  生成证书和密钥
4. nginx配置
  引入证书
  加入多站单点配置应用： include sites-available/*.conf