const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        data: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'unix编程艺术',
        data: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        data: '2006-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '代码大全',
        data: '2006-1',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      // let result = 0;
      // for (i in this.books) {
      //   result += this.books[i].price * this.books[i].count 
      // }
      // for( book of this.books) {
      //   result += book.price * book.count
      // }
      // return result
      return this.books.reduce((pre,book) => pre + book.price*book.count,0)
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

