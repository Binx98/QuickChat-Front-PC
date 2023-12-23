<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #232427">
    <div style="width: 100%; height: 100%;border: 1px solid red;">
<!--      &lt;!&ndash; 左上角LOGO &ndash;&gt;-->
<!--      <div style="width: 10%; height: 10%;border: 1px solid yellow">-->
<!--        <el-image :src="require('@/assets/logo/logo2_transparent.png')"-->
<!--                  style=" object-fit: cover;"/>-->
<!--      </div>-->

      <!--   表单   -->
      <div style="border: 1px solid red;width: 20vw;text-align: center;">
        <el-input style="display: block;opacity: 0.4" placeholder="请输入账号"/>
        <el-input style="display: block;opacity: 0.4" placeholder="请输入密码"/>
        <el-input style="display: block;opacity: 0.4" placeholder="请输入验证码"/>
        <el-button type="primary" size="medium" style="background-color: #12CEC2FF;width: 10vw">登录</el-button>
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

</style>
