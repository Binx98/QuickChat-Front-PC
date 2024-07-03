<template>
  <span>
    <!--  LOGO  -->
    <el-col :span="5" class="col">
      <el-image class="logo-cls" :src="require('@/assets/logo/logo.png')"/>
    </el-col>
    <!--  占位  -->
    <el-col :span="1" class="col"/>
    <!--  输入框  -->
    <el-col :span="11" class="col" style="margin-right: 2%">
      <el-input v-model="searchMsg" style="width: 76%;"/>
    </el-col>
    <!--  黑夜/白天  -->
    <el-col :span="1" class="col">
      <span class="iconfont el-icon-sunny" style="cursor: pointer;font-size: 34px;" @click="changeTheme(2)"
            v-if="themeFlag == 1"></span>
      <span class="iconfont el-icon-moon" style="cursor: pointer;font-size: 34px;" @click="changeTheme(1)"
            v-if="themeFlag == 2"></span>
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
  </span>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      searchMsg: '',
      value: '',
      themeFlag: 1,
    }
  },

  methods: {
    /**
     * 白天、黑夜模式
     */
    changeTheme(themeFlag) {
      if (themeFlag == 2) {
        document.getElementsByTagName('body')[0].style
            .setProperty('--window-bottom-color', '#87ecf8')
        document.getElementsByTagName('body')[0].style
            .setProperty('--window-item-color', '#daf1f8')
        this.themeFlag = 2;
      } else {
        document.getElementsByTagName('body')[0].style
            .setProperty('--window-bottom-color', '#1E1F22FF')
        document.getElementsByTagName('body')[0].style
            .setProperty('--window-item-color', '#2B2D30FF')
        this.themeFlag = 1;
      }
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

.logo-cls {
  height: 10vh;
}

::v-deep .el-input__inner {
  border-radius: 18px;
}
</style>
