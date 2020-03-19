全文检索？

mongodb 天生支持  全文检索  模糊查询
mysql  like %
elastic_search

blog

Post
    .find({
      $text: {
        $search: keyword
      }
    })
    .exec((err, posts) => {
      res.json(posts)
    })