<template>
  <div class="main-container">
    <div class="form-container">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%;margin-bottom: 3.2%" @keyup.enter="register()">
        <el-input class="input-cls" placeholder="请输入账号" v-model="registerForm.accountId"/>
        <el-input class="input-cls" type="password" show-password placeholder="请输入密码"
                  v-model="registerForm.password1"/>
        <el-input class="input-cls" type="password" show-password placeholder="请再次输入密码"
                  v-model="registerForm.password2"/>
        <div style="display: flex; justify-content: center;">
          <el-input class="input-cls" style="margin-right:1%;width: 12vw;"
                    placeholder="请输入邮箱" v-model="registerForm.toEmail"/>
          <button class="send-btn" :disabled="disable" @click="sendEmail()">
            {{ sendButtonMsg }}
          </button>
        </div>
        <el-input class="input-cls" placeholder="请输入验证码" v-model="registerForm.emailCode"/>
        <button class="btn-cls" @click="register()">
          注册
        </button>
        <div style="font-size: 14px">
          <span class="form-font">已有账号？</span>
          <span class="go-login" @click="clickGoLogin()">去登录></span>
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
  }
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
  height: 80vh;
  opacity: 0.9;
  margin-top: 3.2%;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  background-color: $window-bottom-color;
}

.btn-cls {
  background-color: $logo-color;
  width: 18vw;
  height: 5vh;
  color: white;
  margin-bottom: 2%;
  cursor: pointer;
  border-radius: 20px;
}

.input-cls {
  opacity: 0.5;
  margin-bottom: 2%;
  width: 18vw;
}

.send-btn {
  color: white;
  cursor: pointer;
  border-radius: 4px;
  height: 40px;
  width: 5.7vw;
  background-color: $logo-color;
}

.go-login {
  color: $logo-color;
  cursor: pointer;
}

.form-font {
  color: $form-font-color
}
</style>
