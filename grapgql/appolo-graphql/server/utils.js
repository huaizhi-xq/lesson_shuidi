const fs = require('fs')
const utils = require('util')


module.exports = {
  readFile: utils.promisify(fs.readFile)
}