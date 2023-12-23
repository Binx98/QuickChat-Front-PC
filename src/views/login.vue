<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;position: relative;">
    <div style="width: 100%; height: 100%;border: 1px solid red;">
      <div style="border: 1px solid red;width: 26vw;text-align: center;">
        <el-image :src="require('@/assets/logo/logo2_transparent.png')" style="height: 36vh;"/>
        <div style="margin-top: -10%">
          <el-input style="opacity: 0.26;margin-bottom: 2%;width: 18vw;" placeholder="请输入账号"/>
          <el-input style="opacity: 0.26;margin-bottom: 2%;width: 18vw;" placeholder="请输入密码"/>
          <el-input style="opacity: 0.26;margin-bottom: 6%;width: 18vw;" placeholder="请输入验证码"/>
          <el-button type="primary" size="medium" round
                     style="background-color: #12CEC2FF;width: 18vw;height: 6vh;margin-bottom: 10%;opacity: 0.7;">
            登录
          </el-button>
        </div>
        <span>没有账号？去注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
.main {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
