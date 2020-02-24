<template>
  <div class="signup">
    <!-- 行 -->
      <Row class="container">
        <i-col span="12" offset="2"
          class="signup-img-box">
          <img src="../assets/logo.png" alt="">
        </i-col>
        <i-col span="8"> 
          <div class="sign-up-title">
            <h1>欢迎注册账号</h1>
            <br>
            <h2>BIT MALL, 天天低价品质保证， 让消费者钱更值钱</h2>
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate">
              <form-item label="手机号" prop="phone">
                <i-input placeholder="请输入手机号" size="large" v-model="formValidate.phone"></i-input>
              </form-item>
              <form-item label="验证码" prop="checkNum">
                <i-input placeholder="请输入验证码" size="large" v-model="formValidate.checkNum">
                   <i-button slot="append" @click="getcheckNum">获取验证码</i-button>
                </i-input>
              </form-item>
              <i-button type="error" size="large" long @click="handSubmit('formValidate')">验证手机号</i-button>
            </i-form>
          </div>
        </i-col>
      </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        phone: '',
        checkNum: ''
      },
      ruleValidate: {
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {type: 'string', pattern: /^1[3|5|7|8|9][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur'},
        ],
        checkNum: [
          {required: true, min: 4, max: 4, message: '验证码格式错误', trigger: 'blur'},
        ],
        
      }
    }
  },
  methods: {
    handSubmit() {
      // 验证表单 
      // console.log(this.formValidate);
      //有通过验证吗？
      this.$refs.formValidate.validate((valid) => {
        // console.log(valid);
        if (valid) {
          this.$Message.success({
            content: '成功激活手机号',
            duration: 6,
            closable: true
          })
        } else {
          this.$Message.error({
            content: '表单有问题',
            duration: 6,
            closable: true
          })
        }
      })
    },
    getcheckNum() {
      // alert('123456')
        if (this.formValidate.phone.length === 11) {
         this.$Message.success({  
           /* this -> vue-> use iview -> Message js 声明调用  prototype
           消息提示组件 $Message  <Form /> */
           content: '验证码为：1234',
           duration: 6,
           closable: true
         });
       } else {
         this.$Message.error({
           content: '请输入正确的手机号',
           duration: 6,
           closable: true
         });
       }
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 15px auto;
    height: 500px;
    overflow: hidden;
  }
  .signup-img-box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .signup-img-box >img {
    height: 80%;
    max-width: 100%;
  }
</style>