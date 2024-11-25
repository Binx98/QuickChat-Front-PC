<template>
  <div class="main-container">
    <div class="form-container">
      <el-image class="img-cls" :src="require('@/assets/logo/logo.png')"/>
      <div style="margin-top: -12%;" @keyup.enter="register()">
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
        <button class="register-btn-cls" @click="register()">
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
      registerForm: {
        accountId: '',
        password1: '',
        password2: '',
        toEmail: '',
        emailCode: '',
      },
      sendButtonMsg: '发送验证',
      isGetting: false,
      count: 60,
      disable: false,
    }
  },

  methods: {
    clickGoLogin() {
      this.registerForm = '';
      this.$router.push('/login')
    },

    sendEmail() {
      let email = this.registerForm.toEmail;
      if (email == null || email == '') {
        this.$message.error("你还没输入邮箱呢！")
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.form-container {
  width: 33vw;
  opacity: 0.9;
  border-radius: 20px;
  text-align: center;
  padding-bottom: 2.5%;
  background-color: $window-bottom-color;
}

.register-btn-cls {
  background-color: $logo-color;
  width: 18vw;
  height: 5vh;
  color: white;
  margin-bottom: 2%;
  cursor: pointer;
  border-radius: 20px;
}

.img-cls {
  height: 36vh;
  margin-top: -6%;
}

.input-cls {
  opacity: 0.5;
  margin-bottom: 1%;
  width: 18vw;
}

.send-btn {
  color: white;
  cursor: pointer;
  border-radius: 4px;
  height: 41px;
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
