<template>
  <div>
    <el-col style="width: 5vw;">
      <div class="div-cls">
        <el-avatar :src=this.loginUser.avatar class="avatar-cls" :size="48" shape="square"/>
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
.div-cls {
  height: 90vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: $left-menu-color;
  display: flex;
  justify-content: center;
}

.avatar-cls {
  cursor: pointer;
  margin-top: 2vh;
}
</style>
