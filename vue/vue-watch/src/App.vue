<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view/> -->
    <p>{{message}}</p>
    <p>大写： {{message | capitalize}}</p>
    <!-- 把所有字母都反过来 -->
    <p>逆序: {{reverseMessage}}</p>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input type="text" v-model="question"  >
        <!-- api question -> 请求  -->
      </p>
      <p>{{answer}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'  //vue的请求库
import _ from 'lodash'  //最常用的工具库 

export default {
  data() {
    return {
      message: "hello",
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  created() {
    this.debouncedGetAnswer =  _.debounce(this.getAnser,500)
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
      // return "value" + value
    }
  },
  watch: {
    // 订阅发布者模式
    question: function(newQustion, oldQuestion) {
      // console.log(newQustion, oldQuestion)
      this.answer = 'Wait for you to stop typing...'
      // this.getAnser(); //网络请求
      // this.debouncedGetAnser
      // _.debounce(this.getAnser())
      // this.askQuestion()
      this.debouncedGetAnswer();
    }
  },
  methods: {
    askQuestion() {
      // console.log(this.question)
      //发送请求 fetch ajax
     
    },
    getAnser() {
       axios
        .get('https://yesno.wtf/api')
        .then(response => {
          console.log(response)
          this.answer = response.data.answer
        })
    }
  }
}
</script>

<style>

</style>
