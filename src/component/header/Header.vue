<template>
  <span>
    <!--  LOGO  -->
    <el-col :span="5" class="col">
      <el-image class="logo" :src="require('@/assets/logo/logo2_transparent.4cb48f1f(1).png')"/>
    </el-col>
    <!--  占位  -->
    <el-col :span="1" class="col"/>
    <!--  输入框  -->
    <el-col :span="11" class="col" style="margin-right: 2%">
      <el-input v-model="searchMsg" style="width: 76%;"/>
    </el-col>
    <!--  黑夜/白天  -->
    <el-col :span="1" class="col">
      <span class="iconfont el-icon-sunny" style="cursor: pointer;font-size: 34px;" @click="changeTheme"></span>
      <!--      <span class="iconfont el-icon-moon" style="cursor: pointer;font-size: 34px;"></span>-->
    </el-col>
    <!--  微信  -->
    <el-col :span="1" class="col">
      <span class="iconfont icon-comment" style="cursor: pointer;font-size: 34px;"></span>
    </el-col>
    <!--  Github  -->
    <el-col :span="1" class="col">
      <span class="iconfont icon-github-fill" style="cursor: pointer;font-size: 34px;"
            @click="redirectToGithub()"></span>
    </el-col>
    <!--  建议  -->
    <el-col :span="1" class="col">
      <span class="iconfont el-icon-message" style="cursor: pointer;font-size: 34px;"></span>
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
     * 白天、黑夜模式
     */
    changeTheme() {

    },

    /**
     * 跳转到 Github
     */
    redirectToGithub() {
      window.open('https://github.com/Binx98/QuickChat')
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
