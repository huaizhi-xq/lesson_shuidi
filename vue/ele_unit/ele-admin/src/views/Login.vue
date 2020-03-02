<template>
  <div class="login_page fillcontain">
    <!-- vue 内置组件  带来特效  当它的子元素  从不显示到显示  主持人 报节目
         v-if  v-show 都会触发
     -->
    <transition name="form-fade">  
       <!--进场的切换  四个类名 
          进场 false -> true    
              暖场 form-fade-enter 短暂时间   元素插入之前生效，在插入之后的下一帧frame移除
              form-fade-enter-active 进入的过程之中 transition 时间
              .form-fade-enter(初始状态) -> .form-fade-enter-active(进场时间)
          出场 true  -> false   
              form-fade-leave 离开的开始状态 一帧frame
              form-fade-leave-active 离开 
       -->
      <section class="form_container" v-show="showLogin">
        <div class="manage_tip">
          <p>elm后台管理系统</p>
        </div>
        <!-- element-ui 表单 收集数据 json form功能组件 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">
              <span>dsfsf</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码" type="password">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(loginForm)" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
    
  </div>
</template>

<script>
// 后端请求都应该放在api里  不要把api业务卸载组件里
import { login } from '@/api/getData';

export default {
  data() {
    return {
      showLogin: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {
              required: true, message: '请输入密码', trigger: 'blur'
            }
          ]
        
      },
      // rules: ''
    }
  },
  mounted() {

    this.showLogin = true
  },
  methods: {
    show() {
      this.showLogin = false
    },
    async submitForm(forName) {
      // vue 比原生的js 更学 domless
      // serverless
      // 相当于id属性  domless
      this.$refs.loginForm.validate(async (valid) => {
        // console.log(valid)
        if (valid) {
          // 跟后端api通信  登陆
          // api开发  异步的ajax请求  es7给我们的能力
          const res = await login({
            user_name: this.loginForm.username,
            password: this.loginForm.password
          });
          // console.log(res)
          // 模拟 mock 把能写的代码写完 减少不确定性
          if (res.status == 1) {
            this.$message({
              type: 'success',
              message: '登陆成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
          }
        } else {
          // iview $message
          this.$notify.error({
            title: '错误',
            message: '请输入正确',
            offset: 100
          });
          
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login_page
  height 100vh
  background-color #324057
.manage_tip
  position absolute
  width 100%
  top -100px
  left 0
  p
    font-size 34px
    color #ffffff
.form_container
  width 320px
  height 240px
  position absolute
  top 50%
  left 50%
  margin-top -160px
  margin-left -120px
  padding 25px
  border-radius 5px
  text-align center
  background-color #ffffff
  .submit_btn
    width 100%
    font-size 16px

// 动态产生四个类  
.form-fade-enter-active, .form-fade-leave-active
  // 特效 简单
  transition all 1.5s
// 刚开始的时候  透明度为0  原来opacity 1  设置进入的初始状态
// 进入到真正进入 最后的样式opcity 1 transform translate3d(0, 0, 0)
// 一帧的时间
// form-fade-leave true -> false  默认opcity 1 transform translate3d(0, 0, 0)
// opcity 0 transform translate3d(0, -50px, 0)
.form-fade-enter, .form-fade-leave-active
  // 从上面降下来
  transform translate3d(0, -50px, 0)
  // 不可见
  opacity 0

</style>