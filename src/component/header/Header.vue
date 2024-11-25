<template>
  <span>
    <el-col :span="5" class="col">
      <el-image class="logo-cls" :src="require('@/assets/logo/logo.png')"/>
    </el-col>
    <el-col :span="1" class="col"/>
    <el-col :span="11" class="col" style="margin-right: 2%">
      <el-input v-model="searchMsg" style="width: 76%;"/>
    </el-col>
    <el-col :span="1" class="col">
      <span class="iconfont el-icon-sunny" style="cursor: pointer;font-size: 34px;" @click="changeTheme(2)"
            v-if="themeFlag == 1"></span>
      <span class="iconfont el-icon-moon" style="cursor: pointer;font-size: 34px;" @click="changeTheme(1)"
            v-if="themeFlag == 2"></span>
    </el-col>
    <el-col :span="1" class="col">
      <span class="iconfont icon-comment" style="cursor: pointer;font-size: 34px;"></span>
    </el-col>
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
