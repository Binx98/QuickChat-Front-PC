<template>
  <div>
    <el-col style="width: 5vw;">
      <div class="div-cls">
        <!-- 头像 -->
        <div class="div-item-cls" style="padding-top: 2vh;">
          <el-avatar :src=this.loginUser.avatar class="avatar-cls" :size="48" shape="square"/>
        </div>
        <!-- 会话 -->
        <div class="div-item-cls">
          <div class="iconfont el-icon-chat-dot-round"/>
        </div>
        <!-- 通讯录 -->
        <div class="div-item-cls">
          <span class="iconfont el-icon-user"/>
        </div>
        <!-- 收藏夹 -->
        <div class="div-item-cls">
          <span class="iconfont el-icon-star-off"/>
        </div>
        <!-- 设置 -->
        <div class="div-item-cls">
          <span class="iconfont el-icon-setting"/>
        </div>
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
  background-color: $window-item-color;
}

.div-item-cls {
  cursor: pointer;
  font-size: 28px;
  padding-top: 3.5vh;
  display: flex;
  justify-content: center;
}

.iconfont:hover {
  background-color: $logo-color;
}

.avatar-cls {
  cursor: pointer;
}
</style>
