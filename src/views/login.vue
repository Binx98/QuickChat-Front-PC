<template>
  <div class="main">
    <!-------------------------------------------------登录表单---------------------------------------------------------->
    <div class="form-container" style="height: 72vh;margin-top: 5%;" v-if="showRegisterFlag == false">
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

    <!-------------------------------------------------注册表单---------------------------------------------------------->
    <div class="form-container" style="height: 88vh;margin-top: 2.2%;" v-if="showRegisterFlag == true">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%;margin-bottom: 3.2%">
        <el-input class="input-cls" placeholder="请输入账号"/>
        <el-input class="input-cls" placeholder="请输入密码"/>
        <el-input class="input-cls" placeholder="请再次输入密码"/>
        <el-input class="input-cls" placeholder="请输入昵称"/>
        <el-input class="input-cls" placeholder="请输入性别"/>
        <el-input class="input-cls" placeholder="请输入邮箱"/>
        <el-input class="input-cls" placeholder="请输入验证码"/>
        <el-button class="btn-cls" type="primary" size="medium" round>
          注册
        </el-button>
        <div style="font-size: 14px">
          <span style="color: darkgrey">已有账号？</span>
          <span style="color: #12CEC2FF; cursor:pointer;" @click="clickGoLogin()">去登录></span>
        </div>
      </div>
    </div>

    <!---------------------------------------------------找回密码-------------------------------------------------------->
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      showRegisterFlag: false,
      captchaUrl: '',

      // 登录表单
      loginForm: {
        accountId: '',
        password: '',
        verifyCode: '',
        rememberPwd: false,
      },

      // 注册表单
      registerForm: {}
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
      this.showRegisterFlag = true;
    },

    /**
     * 点击：去登录
     */
    clickGoLogin() {
      this.showRegisterFlag = false;
    }
  }
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
  height: 5.4vh;
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
  height: 5.2vh
}
</style>
