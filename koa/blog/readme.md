koa 是node的轻量级的开发框架

comment create table

id
name 用户名称
content 
moment 评论时间
postid 文章id
avatar 用户头像

create table comment(
  id int [not null] [primary key],
  name string [not null],
  content string [not null],
  postid int [not null] [f]
)

- mvc 
  routers 一个模块一个文件