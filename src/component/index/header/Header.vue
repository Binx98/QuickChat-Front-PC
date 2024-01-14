<template>
  <span>
    <el-col :span="5" class="col">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" class="logo"/>
    </el-col>
    <el-col class="col" style="width: 48vw">
      <el-input style="width: 50%"/>
    </el-col>
    <el-col style="width: 10vw">
      搞几个
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
  height: 16vh;
  object-fit: cover;
  cursor: pointer;
}
</style>
