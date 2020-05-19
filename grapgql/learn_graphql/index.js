// 新的接口
// node 快速支持  import
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
const app = express()

// req -> grapphql -> db
// 数据playground  启动了graphql服务
// 可以给我们接口定义schema  太强了
app.use('/graphql', graphqlHTTP({
  // 在前端也有向mongodb， schema严格约定接口
  schema,
  graphiql: true  /**playground */
}))

app.listen(8080)


