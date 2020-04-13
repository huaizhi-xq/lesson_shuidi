/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.user = new Map()
  this.f = new Map()
};

function element(tweetId, time) {
  this.tweetId = tweetId;
  this.time = time;
}

var num = 0

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  // var time = + new Date()
  let temp = new element(tweetId,num++)
  if (this.user.has(userId)) {
    let t = this.user.get(userId)
    t.unshift(temp)
    this.user.set(userId,t)
  } else {
    this.user.set(userId,[temp])
    this.f.set(userId,[])
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  let res = []
  if (this.user.has(userId)) {
    this.f.get(userId)
    if (this.f.has(userId) && this.f.get(userId).length > 0) {
      
      this.f.get(userId).forEach(item => {
        res = res.concat(this.user.get(item))
      })
    }
    res = res.concat(this.user.get(userId))
    console.log(res)
  }
  return res.sort((a,b) => b.time - a.time).map(item => item.tweetId)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.user.has(followerId)) {
    this.f.set(followerId,this.f.get(followerId).push(followeeId))
    console.log(this.f.get(followerId))
  } else {
    this.f.set(followerId,[followeeId])
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.user.has(followerId)) {
    let res = this.f.get(followerId)
    console.log(res)
    // res.length > 0 ? [] : res.filter(item => item !== followeeId)
    // this.f.set(followerId,res.length === 0 ? [] : res.filter(item => item !== followeeId))
  } 
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

var obj = new Twitter()
obj.postTweet(1, 5);
// console.log(obj.getNewsFeed(1))
obj.follow(1,2)
obj.postTweet(2, 6);
console.log(obj.getNewsFeed(1))
obj.unfollow(1,2)
// console.log(obj.getNewsFeed(1))
// console.log(obj.getNewsFeed(2))