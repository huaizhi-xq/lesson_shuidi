// 模块化
import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const list = [];
const count = 100


const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0;  i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'), // 返回时间搓 133333
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecate: '@float(0, 100, 2, 2)',
    importance: '@integer(1,3)',
    'type|1':['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',  // 阅读量
    image_uri,
    platforms: ['a-platform']
  }))
}

// new RegExp("\d+")   /\d+/
Mock.mock(new RegExp('/api/article/list'), 'get', config => {
  // console.log(config)
  // list根据params 分页
  const { page = 1, limit = 20, title } = param2Obj(config.url)

  // title 重要性  时间 状态    扩容性
  let mockList = list.filter(item => {
    //条件一个个的加
    if (title && item.title.indexOf(title) <  0) return false
    return true
  })
  console.log(mockList.length)
  const pageList = mockList.filter
    ((item, index) => index < limit*page && index >= limit*(page-1))
  return {
    list: pageList,
    total: mockList.length
  }
})

export default Mock