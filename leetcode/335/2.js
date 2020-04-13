var Twitter = function() {
  this.article = []//所有用户及其推文[[用户id，推文id],[],[]]
  this.user = new Map()//所有用户及其关注的user[]
  this.tfUser = function(userId) {
    if (!this.user.has(userId)) this.user.set(userId,[])
  }
}

Twitter.prototype.postTweet = function(userId, tweetId) {
  this.article.unshift([userId,tweetId])
  this.tfUser(userId)
}

Twitter.prototype.getNewsFeed = function(userId) {
  this.tfUser(userId)
  let arr = this.user.get(userId)
  arr.push(userId)
  let res = []
  // console.log(arr)
  
  this.article.forEach((values) => {
    if (arr.includes(values[0])) {
      res.push(values[1])
    }
  })
  if (res.length > 10) res = res.slice(0,10)
  return res
}

Twitter.prototype.follow = function(followerId, followeeId) {
  this.tfUser(followerId)
  this.user.get(followerId).push(followeeId)
}

Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.tfUser(followerId)
  let index = this.user.get(followerId).indexOf(followeeId)
  if (index !== -1) {
    this.user.get(followerId).splice(index,1)
  }
}

var obj = new Twitter()
obj.postTweet(1, 5);
// console.log(obj.getNewsFeed(1))
obj.follow(1,2)
obj.postTweet(2, 6);
console.log(obj.getNewsFeed(1))
obj.unfollow(1,2)
// console.log(obj.getNewsFeed(1))
// console.log(obj.getNewsFeed(2))
