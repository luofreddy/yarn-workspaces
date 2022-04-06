const _ = require('lodash')
const random = () => {
  console.log('a-workspace')
  return _.random(1, 100, false)
}
module.exports = random