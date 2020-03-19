const searchRouter = require('./search')

module.exports = app => {
  app.use('/search', searchRouter)
}