
export default {
  getUsers(cb) {
    fetch('/api/users')
      .then(data => data.json())
      .then(data => {
        // console.log(data, '----')
        cb(data)
      })
      .catch(err => {
        cb(err)
      })
  },
  getUserByTag(tag, cb) {
    fetch(`/api/users/tag/${tag}`)
      .then(data => data.json())
      .then(data => {
        cb(data)
      })
      .catch(err => {
        cb(err)
      }) 
  }
}