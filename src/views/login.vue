<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #232427">
    <div style="background-color: #1f2023; width: 50%; height: 80%;">
      <el-input style="width: 20vw;display: block" placeholder="请输入账号"/>
      <el-input style="width: 20vw;display: block" placeholder="请输入密码"/>
      <el-input style="width: 20vw;display: block" placeholder="请输入验证码"/>
      <el-button>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
