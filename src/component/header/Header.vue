<template>
  <span>
    <!--  LOGO  -->
    <el-col :span="5" class="col">
      <el-image class="logo" :src="require('@/assets/logo/logo2_transparent.4cb48f1f(1).png')"/>
    </el-col>
    <!--  占位  -->
    <el-col :span="1" class="col"/>
    <!--  输入框  -->
    <el-col :span="11" class="col" style="margin-right: 4%">
      <el-input v-model="searchMsg" style="width: 76%;"/>
    </el-col>
    <!--  主题  -->
    <el-col :span="1" class="col">
      <span class="iconfont el-icon-sunny" style="cursor: pointer;font-size: 34px"></span>
    </el-col>
    <!--  Github  -->
    <el-col :span="1" class="col">
      <span class="iconfont icon-github-fill" style="cursor: pointer;font-size: 34px"></span>
    </el-col>
    <!--  通知  -->
    <el-col :span="1" class="col">
      <span class="iconfont icon-bell" style="cursor: pointer;font-size: 34px"></span>
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
  cursor: pointer;
  height: 10vh;
}

::v-deep .el-input__inner {
  border-radius: 18px;
}
</style>
