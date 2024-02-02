<template>
  <span>
    <el-col :span="5" class="col">
        <el-image class="logo" :src="require('@/assets/logo/logo2_transparent.4cb48f1f(1).png')"/>
    </el-col>
    <el-col :span="15" class="col">
      <el-input style="width: 50%"/>
    </el-col>
    <el-col :span="1" style=" height: 10%;">
      搞几个icon：喇叭、换主题、音乐
    </el-col>
  </span>
</template>

<script>
export default {
  name: "Header",
  methods: {
    /**
     * 退出登录
     */
    logout() {
      localStorage.removeItem('token')
      this.$message.success('退出成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.col {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 10vh;
  cursor: pointer;
}
</style>
