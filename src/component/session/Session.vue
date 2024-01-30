<template>
  <div>
    <el-col :span="4" style="height: 90%">
<!--      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">-->
<!--        &lt;!&ndash; 头像 &ndash;&gt;-->
<!--        <div style="border: 1px solid red;height: 6.9vh;width: 3.5vw;display: inline-block;float: left">-->

<!--        </div>-->

<!--        &lt;!&ndash; 昵称、时间 &ndash;&gt;-->
<!--        <div style="border: 1px solid mediumspringgreen;height:2.3vh;width: 9vw;display: inline;float: left">-->
<!--          <span style="width: 3vw;font-size: 13px">去你的</span>-->
<!--          <span style="width: 3vw;font-size: 13px">2024-02-01</span>-->
<!--        </div>-->

<!--        &lt;!&ndash; 聊天信息、未读数 &ndash;&gt;-->
<!--        <div style="border: 1px solid mediumspringgreen;height: 3.6vh;width: 7vw;display: inline;float: left">-->
<!--          <span style="width: 3vw;font-size: 13px">去你的</span>-->
<!--          <span style="width: 3vw;font-size: 13px">2024-02-01</span>-->
<!--        </div>-->

<!--        &lt;!&ndash; 聊天信息、未读数 &ndash;&gt;-->
<!--        <div style="border: 1px solid mediumspringgreen;height: 3.6vh;width: 2vw;display: inline;float: left">-->
<!--          <span style="width: 3vw;font-size: 13px">去你的</span>-->
<!--          <span style="width: 3vw;font-size: 13px">2024-02-01</span>-->
<!--        </div>-->
<!--      </div>-->
      <div class="session-cls" v-for="item in sessionList" @click="chooseSession(item)">
        <!-- 头像 -->
        <div style="border: 1px solid red; height: 100%; width: 26%; display: inline-block; float: left;"></div>

        <!-- 昵称、时间 -->
        <div style="border: 1px solid mediumspringgreen; height: 40%; width: 69%; display: inline; float: left;">
          <span style="width: 40%; font-size: 13px; display: inline-block;">陈冠希</span>
          <span style="width: 60%; font-size: 12px; display: inline-block;">2024-02-02</span>
        </div>

        <!-- 聊天内容 -->
        <div style="border: 1px solid mediumspringgreen; height: 50%; width: 69%; display: inline; float: left;">
          <span style="width: 50%; font-size: 13px; display: inline-block;">陈冠希</span>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/component/js/event-bus";

export default {
  name: "Session",
  props: ['sessionList'],

  data() {
    return {}
  },

  methods: {
    chooseSession(item) {
      EventBus.$emit('sessionInfo', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.session-cls {
  height: 7vh;
  background-color: $window-item-color;
  border-radius: 6px;
  margin-bottom: 2px;
  cursor: pointer;
}

.session-cls:hover {
  background-color: $logo-color;
}
</style>
