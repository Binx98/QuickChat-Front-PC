<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh">
    <!--  登录表单  -->
    <div style="width: 34vw;height: 72vh;text-align: center;background-color: #232427;opacity: 0.9;border-radius: 20px">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%">
        <el-input class="input-cls" placeholder="请输入账号"/>
        <el-input class="input-cls" placeholder="请输入密码"/>
        <el-input class="input-cls" placeholder="请输入验证码"/>
        <el-button type="primary" size="medium" round
                   style="background-color: #12CEC2FF;width: 18vw;height: 6vh;margin-bottom: 2%;">
          登录
        </el-button>
        <div style="font-size: 14px">
          <span style="color: darkgrey">没有账号？</span>
          <span style="color: #12CEC2FF">去注册></span>
        </div>
      </div>
    </div>

    <!--  注册表单  -->
    <div style="width: 34vw;height: 84vh;text-align: center;background-color: #232427;opacity: 0.9;border-radius: 20px">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;margin-top: -4%"/>
      <div style="margin-top: -10%">
        <el-input class="input-cls" placeholder="请输入账号"/>
        <el-input class="input-cls" placeholder="请输入密码"/>
        <el-input class="input-cls" placeholder="请再次输入密码"/>
        <el-input class="input-cls" placeholder="请输入验证码"/>
        <el-input class="input-cls" placeholder="请输入邮箱"/>
        <el-input class="input-cls" placeholder="输入邮箱验证码"/>
        <el-button type="primary" size="medium" round
                   style="background-color: #12CEC2FF;width: 18vw;height: 6vh;margin-bottom: 2%;">
          注册
        </el-button>
        <div style="font-size: 14px">
          <span style="color: darkgrey">已有账号？</span>
          <span style="color: #12CEC2FF">去登录></span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      showRegisterFlag: true,
    }
  }
}
</script>

<style scoped>
.input-cls {
  opacity: 0.6;
  margin-bottom: 2%;
  width: 18vw;
  height: 5vh
}
</style>
