<template>
  <span>
    <el-col :span="5" class="col">
      <el-image class="logo" :src="require('@/assets/logo/logo2_transparent.4cb48f1f(1).png')"/>
    </el-col>
    <el-col :span="15" class="col">
      <el-input v-model="searchMsg" style="width: 56%;"/>
    </el-col>
    <el-col :span="1" class="col">
      <el-switch
          v-model="value"
          width="50"
          active-color="#12CEC2FF"
          inactive-color=""
          active-text="黑夜"
          inactive-text="白天"
      />
    </el-col>
  </span>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      searchMsg: '',
      value: '',
    }
  },

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

::v-deep .el-input__inner {
  border-radius: 16px;
}
</style>
