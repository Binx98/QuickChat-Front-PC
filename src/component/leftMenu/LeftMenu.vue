<template>
  <div>
    <el-col :span="1" style="width: 5vw;">
      <div class="colorStyle">
        <el-avatar class="avatar-cls" :size="48" shape="square"/>
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
    return {}
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
  display: flex;
  justify-content: center;
}

.avatar-cls {
  cursor: pointer;
  margin-top: 1.8vh;
}
</style>
