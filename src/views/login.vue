<template>
  <div class="main-container">
    <div class="form-container">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -3%"/>
      <div style="margin-top: -10%;margin-bottom: 3.2%;" @keyup.enter="login()">
        <!--  账号密码  -->
        <el-input class="input-cls" placeholder="请输入账号" v-model="loginForm.accountId"/>
        <el-input class="input-cls" placeholder="请输入密码" v-model="loginForm.passWord" show-password/>
        <!--  验证码  -->
        <div style="display: flex; justify-content: center;">
          <el-input class="input-cls" style="margin-right: 1%;width: 13vw;"
                    placeholder="请输入验证码" v-model="loginForm.verifyCode"/>
          <img class="captcha-cls" :src="captchaUrl" @click="captcha()"/>
        </div>
        <!--  登录按钮  -->
        <button class="btn-cls" @click="login()">登录</button>
        <!--   注册账号、找回密码   -->
        <div style="font-size: 14px">
          <span class="form-font">没有账号？</span>
          <span class="go-register" @click="clickGoRegister()">去注册></span>
          <div class="go-register" @click="clickGoRegister()">找回密码></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userApi from '@/api/user'

export default {
  name: "login",
  data() {
    return {
      // 图片验证码
      captchaUrl: '',

      // 登录表单
      loginForm: {
        accountId: '',
        passWord: '',
        verifyCode: '',
        rememberPwd: false,
      },
    }
  },

  created() {
    this.captcha();
  },

  methods: {
    /**
     * 生成验证码
     */
    captcha() {
      this.captchaUrl = process.env.VUE_APP_BASE_API + '/user/captcha' + '?' + Math.random()
    },

    /**
     * 点击：去注册
     */
    clickGoRegister() {
      this.loginForm = '';
      this.$router.push('/register')
    },

    /**
     * 登录
     */
    login() {
      userApi.login(this.loginForm).then(res => {
        this.$message.success('登录成功')
        localStorage.setItem("token", res.data.data)
        this.$router.push('/')
      }).catch(e => {
        this.$message.error(e.data.msg);
        this.loginForm.verifyCode = '';
        this.captcha();
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-container {
  width: 35vw;
  height: 66vh;
  opacity: 0.9;
  border-radius: 20px;
  margin-top: 6.2%;
  text-align: center;
  overflow: hidden;
  background-color: $window-bottom-color;
}

.captcha-cls {
  border-radius: 4px;
  opacity: 0.72;
  width: 4.6vw;
  height: 40px;
}

.btn-cls {
  width: 18vw;
  height: 5vh;
  margin-bottom: 2%;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  background-color: $logo-color;
}

.input-cls {
  opacity: 0.5;
  margin-bottom: 2%;
  width: 18vw;
}

.go-register {
  color: $logo-color;
  cursor: pointer
}

.form-font {
  color: $form-font-color
}
</style>
