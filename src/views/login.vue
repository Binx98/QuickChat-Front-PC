<template>
  <div class="main">
    <div class="form-container" style="height: 72vh;margin-top: 5%;">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%;margin-bottom: 3.2%">
        <!--  账号密码输入框  -->
        <el-input class="input-cls" placeholder="请输入账号"/>
        <el-input class="input-cls" placeholder="请输入密码"/>
        <!--  验证码输入框  -->
        <div style="display: flex; justify-content: center;margin-bottom: 2%">
          <el-input style="border-radius: 10px;opacity: 0.6;margin-right: 1%;width: 13vw;height: 5.4vh;"
                    placeholder="请输入验证码"/>
          <img class="captcha-cls" :src="captchaUrl" @click="captcha()"/>
        </div>
        <!--  记住密码、忘记密码  -->
        <div style="font-size: 14px;margin-bottom: 2%">
          <span style="color: darkgrey;margin-right: 7vw">
            记住密码
            <el-switch v-model="loginForm.rememberPwd" active-color="#12CEC2FF"/>
          </span>
          <span style="color: darkgrey;cursor: pointer">忘记密码？</span>
        </div>
        <!--  登录按钮  -->
        <el-button class="btn-cls" type="primary" size="medium" round>
          登录
        </el-button>
      </div>
      <!--   去注册   -->
      <div style="font-size: 14px">
        <span style="color: darkgrey">没有账号？</span>
        <span style="color: #12CEC2FF;cursor: pointer" @click="clickGoRegister()">去注册></span>
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
      captchaUrl: '',

      // 登录表单
      loginForm: {
        accountId: '',
        password: '',
        verifyCode: '',
        rememberPwd: false,
      },
    }
  },

  created() {
    this.captcha()
  },

  methods: {
    /**
     * 生成验证码
     */
    captcha() {
      this.captchaUrl = 'http://localhost:8888/api/user/captcha' + '?' + Math.random()
    },

    /**
     * 点击：去注册
     */
    clickGoRegister() {
      this.loginForm = '';
      this.showRegisterFlag = true;
    },

    /**
     * 发送邮件
     */
    sendEmail() {
      let email = this.registerForm.toEmail;
      if (email == null || email == '') {
        this.$message.error("你还没输入邮箱呢，你想让我发给谁啊？")
        return;
      }
      let param = {
        type: 1,
        toEmail: email,
      }
      userApi.sendEmail(param).then(res => {
        this.$message.success("验证码发送成功，请查看您的邮箱");
      }).catch(e => {
        this.$message.error("邮件发送失败，请刷新重试");
      })
    },

    /**
     * 注册账号
     */
    register() {
      userApi.register(this.registerForm).then(res => {
        this.$message.success("注册成功")
        this.clickGoLogin()
      }).catch(e => {
        this.$message.error(e.data.msg)
      })
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.captcha-cls {
  border-radius: 4px;
  opacity: 0.72;
  width: 4.6vw;
  height: 5.2vh;
}

.btn-cls {
  background-color: #12CEC2FF;
  width: 18vw;
  height: 6vh;
  margin-bottom: 2%;
}

.form-container {
  width: 35vw;
  text-align: center;
  background-color: #232427;
  opacity: 0.9;
  border-radius: 20px
}

.input-cls {
  border-radius: 10px;
  opacity: 0.6;
  margin-bottom: 2%;
  width: 18vw;
  height: 6.2vh
}
</style>
