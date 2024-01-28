<template>
  <div>
    <el-col :span="1" style="width: 5vw">
      <div class="colorStyle">
        <el-avatar :size="48" shape="square" style="cursor: pointer"/>
<!--        {{this.loginUser}}-->
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  props: ['loginUser'],

  data() {
    return {
    }
  },

  created() {

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
