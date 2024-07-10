<template>
  <div>
    <el-col style="width: 5vw;">
      <div class="div-cls">
        <!-- 头像 -->
        <div class="div-item-cls" style="padding-top: 2vh;">
          <el-avatar :src=loginUser.avatar class="avatar-cls" :size="48" shape="square"/>
        </div>
        <!-- 会话 -->
        <div class="div-item-cls">
          <div class="iconfont el-icon-chat-dot-round"/>
        </div>
        <!-- 通讯录 -->
        <div class="div-item-cls">
          <span class="iconfont el-icon-user"/>
        </div>
        <!--        &lt;!&ndash; 收藏夹 &ndash;&gt;-->
        <!--        <div class="div-item-cls">-->
        <!--          <span class="iconfont el-icon-star-off"/>-->
        <!--        </div>-->
        <!--        &lt;!&ndash; 设置 &ndash;&gt;-->
        <!--        <div class="div-item-cls">-->
        <!--          <span class="iconfont el-icon-setting"/>-->
        <!--        </div>-->
      </div>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/component/event-bus";

export default {
  name: "LeftMenu",

  data() {
    return {
      loginUser: '',
    }
  },

  created() {
    /**
     * 组件传值：登录用户信息
     */
    EventBus.$on('loginUser', loginUser => {
      this.loginUser = loginUser;
    });
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.div-cls {
  height: 91vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: $window-item-color;
}

.div-item-cls {
  cursor: pointer;
  font-size: 26px;
  padding-top: 2.2vh;
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
