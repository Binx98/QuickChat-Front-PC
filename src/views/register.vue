<template>
  <div class="main">
    <div class="form-container" style="height: 84vh;margin-top: 3.2%;">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%;margin-bottom: 3.2%">
        <el-input class="input-cls" placeholder="请输入账号" v-model="registerForm.accountId"/>
        <el-input class="input-cls" type="password" placeholder="请输入密码" v-model="registerForm.password1"/>
        <el-input class="input-cls" type="password" placeholder="请再次输入密码" v-model="registerForm.password2"/>
        <div style="display: flex; justify-content: center;">
          <el-input
              style="border-radius: 10px;opacity: 0.6;margin-bottom: 2%;margin-right:1%;width: 11.3vw;height: 6.2vh"
              placeholder="请输入邮箱" v-model="registerForm.toEmail"/>
          <el-button :disabled="disable" @click="sendEmail()"
                     style="height: 5.2vh;margin-bottom: 2%;background-color: #12CEC2FF;"
                     type="primary">
            {{ sendButtonMsg }}
          </el-button>
        </div>
        <el-input class="input-cls" placeholder="请输入验证码" v-model="registerForm.emailCode"/>
        <el-button class="btn-cls" type="primary" size="medium" round @click="register()">
          注册
        </el-button>
        <div style="font-size: 14px">
          <span style="color: darkgrey">已有账号？</span>
          <span style="color: #12CEC2FF; cursor:pointer;" @click="clickGoLogin()">去登录></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userApi from "@/api/user";

export default {
  name: "register",
  data() {
    return {
      // 注册表单
      registerForm: {
        accountId: '',
        password1: '',
        password2: '',
        toEmail: '',
        emailCode: '',
      },

      // 发送验证码按钮
      sendButtonMsg: '发送验证',
      isGetting: false,
      count: 60,
      disable: false,
    }
  },

  methods: {
    /**
     * 点击：去登录
     */
    clickGoLogin() {
      this.registerForm = '';
      this.$router.push('/login')
    },

    /**
     * 登录
     */
    login() {

    },

    /**
     * 发送邮件
     */
    sendEmail() {
      let email = this.registerForm.toEmail;
      if (email == null || email == '') {
        this.$message.error("你还没输入邮箱呢，真讨厌！")
        return;
      }
      let param = {
        type: 1,
        toEmail: email,
      }
      userApi.sendEmail(param).then(res => {
        this.countDown();
        this.$message.success("验证码发送成功，请查看您的邮箱");
      }).catch(e => {
        this.$message.error("邮件发送失败，请刷新重试");
      })
    },

    /**
     * 发送倒计时
     */
    countDown() {
      let countDown = setInterval(() => {
        if (this.count < 1) {
          this.isGetting = false
          this.disable = false
          this.sendButtonMsg = '发送验证'
          this.count = 60
          clearInterval(countDown)
        } else {
          this.isGetting = true
          this.disable = true
          this.sendButtonMsg = '重新发送(' + this.count-- + 's)'
        }
      }, 1000);
    },
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
