<template>
  <div>
    <el-col :span="1" style="width: 5vw">
      <div class="colorStyle">
        <el-avatar :size="52" style="cursor: pointer"/>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",

  props: [
    'userInfo'
  ],

  data() {
    return {
      loginUser: this.userInfo
    }
  },

  created() {
    console.log(this.userInfo)
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.colorStyle {
  height: 93vh;
  background-color: $left-menu-color;
}
</style>
